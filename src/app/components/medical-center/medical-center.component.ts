import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { User, Invoice } from '../../interfaces/common.interfaces';

@Component({
  selector: 'app-medical-center',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medical-center.component.html',
  styleUrl: './medical-center.component.scss'
})
export class MedicalCenterComponent implements OnInit {
  activeTab: 'users' | 'invoices' | 'export' = 'users';
  
  // Users data (from Users component)
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';
  roleFilter: string = '';
  statusFilter: string = '';
  
  // Invoices data (from Finances component)
  invoices: Invoice[] = [];
  filteredInvoices: Invoice[] = [];
  invoicesSearchTerm: string = '';
  startDate: string = '';
  endDate: string = '';
  
  // Export data (from Data Export component)
  exportFormat: string = 'csv';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadUsersData();
    this.loadInvoicesData();
  }

  // Tab management
  setActiveTab(tab: 'users' | 'invoices' | 'export') {
    this.activeTab = tab;
  }

  // Users functionality (from Users component)
  loadUsersData() {
    this.dataService.getCustomers().subscribe((users: User[]) => {
      // Filter to only show London Podiatry Centre users
      const londonUsers = users.filter((user: User) => user.organisation === 'London Podiatry Centre');
      this.users = londonUsers;
      this.filteredUsers = londonUsers;
    });
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearch = user.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           user.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           user.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesRole = !this.roleFilter || user.role === this.roleFilter;
      const matchesStatus = !this.statusFilter || user.status === this.statusFilter;
      return matchesSearch && matchesRole && matchesStatus;
    });
  }

  toggleUserStatus(user: User) {
    user.status = user.status === 'Active' ? 'Desactivated' : 'Active';
    console.log(`User ${user.firstName} ${user.lastName} status changed to ${user.status}`);
  }

  resetPassword(user: User) {
    console.log(`Password reset for ${user.firstName} ${user.lastName}`);
  }

  viewProfile(user: User) {
    console.log(`Viewing profile for ${user.firstName} ${user.lastName}`);
  }

  getUniqueRoles(): string[] {
    return [...new Set(this.users.map(user => user.role))].sort();
  }

  // Role display mapping to handle legacy data
  getRoleDisplayName(role: string): string {
    switch (role.toLowerCase()) {
      case 'secretary':
        return 'Coordinator';
      default:
        return role;
    }
  }

  // Invoices functionality (from Finances component)
  loadInvoicesData() {
    this.dataService.getInvoices().subscribe(invoices => {
      this.invoices = invoices;
      this.filteredInvoices = invoices;
    });
  }

  filterInvoices() {
    this.filteredInvoices = this.invoices.filter(invoice => {
      const matchesSearch = invoice.id.toLowerCase().includes(this.invoicesSearchTerm.toLowerCase()) ||
                           invoice.businessPartner.toLowerCase().includes(this.invoicesSearchTerm.toLowerCase());
      
      // Date range filtering - convert DD/MM/YYYY input to Date objects
      let matchesDateRange = true;
      if (this.startDate || this.endDate) {
        const invoiceDate = new Date(invoice.dateIssued);
        
        if (this.startDate) {
          const startDateObj = this.convertDDMMYYYYToDate(this.startDate);
          if (startDateObj) {
            matchesDateRange = matchesDateRange && invoiceDate >= startDateObj;
          }
        }
        
        if (this.endDate) {
          const endDateObj = this.convertDDMMYYYYToDate(this.endDate);
          if (endDateObj) {
            // Set end date to end of day for inclusive filtering
            endDateObj.setHours(23, 59, 59, 999);
            matchesDateRange = matchesDateRange && invoiceDate <= endDateObj;
          }
        }
      }
      
      return matchesSearch && matchesDateRange;
    });
  }

  // Format date from YYYY-MM-DD to DD/MM/YYYY
  formatDateToEuropean(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Convert DD/MM/YYYY string to Date object
  convertDDMMYYYYToDate(dateString: string): Date | null {
    if (!dateString) return null;
    
    // Handle both DD/MM/YYYY and YYYY-MM-DD formats
    if (dateString.includes('/')) {
      // DD/MM/YYYY format
      const parts = dateString.split('/');
      if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
      }
    } else if (dateString.includes('-')) {
      // YYYY-MM-DD format (from date input)
      return new Date(dateString);
    }
    
    return null;
  }

  // Convert Date object to DD/MM/YYYY string for input fields
  formatDateForInput(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Handle date input change - convert from browser format to DD/MM/YYYY
  onStartDateChange(event: any) {
    const value = event.target.value;
    if (value) {
      // Browser date input gives YYYY-MM-DD, convert to DD/MM/YYYY for display
      const date = new Date(value);
      this.startDate = this.formatDateForInput(date);
    } else {
      this.startDate = '';
    }
    this.filterInvoices();
  }

  onEndDateChange(event: any) {
    const value = event.target.value;
    if (value) {
      // Browser date input gives YYYY-MM-DD, convert to DD/MM/YYYY for display
      const date = new Date(value);
      this.endDate = this.formatDateForInput(date);
    } else {
      this.endDate = '';
    }
    this.filterInvoices();
  }

  // Convert DD/MM/YYYY to YYYY-MM-DD for date input value
  getDateInputValue(ddmmyyyyString: string): string {
    if (!ddmmyyyyString) return '';
    
    const date = this.convertDDMMYYYYToDate(ddmmyyyyString);
    if (date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    
    return '';
  }

  clearDateFilters() {
    this.startDate = '';
    this.endDate = '';
    this.filterInvoices();
  }
  
  // Export functionality (from Data Export component)
  


  // Export Orders
  exportOrders() {
    console.log('Exporting Orders...');
    this.dataService.getOrders().subscribe((orders: any[]) => {
      const csvData = this.convertToCSV(orders, [
        { key: 'orderNumber', header: 'Order Number' },
        { key: 'businessPartner', header: 'Business Partner' },
        { key: 'dateCreated', header: 'Date Created' },
        { key: 'status', header: 'Status' },
        { key: 'orderPrice', header: 'Order Price (£)' },
        { key: 'insoles', header: 'Number of Insoles' },
        { key: 'topCovers', header: 'Number of Top Covers' },
        { key: 'trackingNumber', header: 'Tracking Number' }
      ]);
      this.downloadCSV(csvData, 'orders');
    });
  }

  // Export Invoices
  exportInvoices() {
    console.log('Exporting Invoices...');
    this.dataService.getInvoices().subscribe((invoices: Invoice[]) => {
      const csvData = this.convertToCSV(invoices, [
        { key: 'id', header: 'Invoice ID' },
        { key: 'dateIssued', header: 'Date Issued' },
        { key: 'businessPartner', header: 'Business Partner' },
        { key: 'numberOfOrders', header: 'Number of Orders' },
        { key: 'amount', header: 'Amount (£)' }
      ]);
      this.downloadCSV(csvData, 'invoices');
    });
  }

  // Helper method to convert data to CSV format
  private convertToCSV(data: any[], columns: { key: string, header: string }[]): string {
    if (!data || data.length === 0) {
      // Return just headers if no data
      return columns.map((col: { key: string, header: string }) => col.header).join(',');
    }
    
    // Create header row
    const headers = columns.map((col: { key: string, header: string }) => col.header).join(',');
    
    // Create data rows
    const rows = data.map((item: any) => {
      return columns.map((col: { key: string, header: string }) => {
        const value = item[col.key];
        // Handle values that might contain commas or quotes
        if (value === null || value === undefined) {
          return '';
        }
        const stringValue = String(value);
        if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
          return `"${stringValue.replace(/"/g, '""')}"`;
        }
        return stringValue;
      }).join(',');
    });
    
    return [headers, ...rows].join('\n');
  }

  // Helper method to download CSV file
  private downloadCSV(csvContent: string, filename: string) {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log(`Successfully exported ${filename} data as CSV`);
      
      // Show success message to user
      alert(`${filename.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())} data has been exported successfully!`);
    } else {
      console.error('Download not supported in this browser');
      alert('Download not supported in this browser');
    }
  }
}