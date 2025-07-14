import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { User } from '../../interfaces/common.interfaces';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit {
  customers: User[] = [];
  filteredCustomers: User[] = [];
  searchTerm: string = '';
  organisationFilter: string = '';
  roleFilter: string = '';
  businessPartnerSortAscending: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCustomers().subscribe((customers: User[]) => {
      this.customers = customers;
      this.sortBusinessPartners();
    });
  }

  // Sort business partners alphabetically
  sortBusinessPartners() {
    this.filteredCustomers = [...this.customers].sort((a, b) => {
      const comparison = a.organisation.localeCompare(b.organisation);
      return this.businessPartnerSortAscending ? comparison : -comparison;
    });
    this.filterCustomers();
  }

  // Toggle business partner sorting order
  toggleBusinessPartnerSort() {
    this.businessPartnerSortAscending = !this.businessPartnerSortAscending;
    this.sortBusinessPartners();
  }

  filterCustomers() {
    const filtered = this.customers.filter(customer => {
      const matchesSearch = customer.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           customer.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           customer.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           customer.organisation.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesRole = !this.roleFilter || customer.role === this.roleFilter;
      
      return matchesSearch && matchesRole;
    });
    
    // Apply sorting to filtered results
    this.filteredCustomers = filtered.sort((a, b) => {
      const comparison = a.organisation.localeCompare(b.organisation);
      return this.businessPartnerSortAscending ? comparison : -comparison;
    });
  }


  getUniqueRoles(): string[] {
    return [...new Set(this.customers.map(customer => customer.role))].sort();
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

  // Action methods - placeholder implementations
  viewBusinessPartner(customer: User): void {
    console.log('View customer:', customer);
    alert(`Viewing business partner: ${customer.title || ''} ${customer.firstName} ${customer.lastName} from ${customer.organisation}`);
  }

  editBusinessPartner(customer: User): void {
    console.log('Edit customer:', customer);
    alert(`Editing business partner: ${customer.title || ''} ${customer.firstName} ${customer.lastName}`);
  }

  deleteBusinessPartner(customer: User): void {
    if (confirm(`Are you sure you want to delete business partner ${customer.title || ''} ${customer.firstName} ${customer.lastName}?`)) {
      console.log('Delete customer:', customer);
      // Remove from filtered list for demo purposes
      this.filteredCustomers = this.filteredCustomers.filter(c => c.id !== customer.id);
      this.customers = this.customers.filter(c => c.id !== customer.id);
      alert(`Business partner ${customer.title || ''} ${customer.firstName} ${customer.lastName} has been deleted.`);
    }
  }

  resetPassword(customer: User): void {
    console.log('Reset password for:', customer);
    if (confirm(`Are you sure you want to reset the password for ${customer.title || ''} ${customer.firstName} ${customer.lastName}?`)) {
      // TODO: Implement actual password reset functionality
      alert(`Password reset email has been sent to ${customer.email}`);
    }
  }
}