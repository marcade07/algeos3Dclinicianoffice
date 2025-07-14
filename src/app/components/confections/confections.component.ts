import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

// Extended confection interface for the confections page
interface ConfectionData {
  id: number;
  confectionId: string;
  patientFirstName: string;
  patientLastName: string;
  businessPartner: string;
  madeBy: string;
  dateCreated: string;
  status: 'Draft' | 'In Cart' | 'Ordered' | 'Received';
  orderNumber: string;
}

@Component({
  selector: 'app-confections',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './confections.component.html',
  styleUrl: './confections.component.scss'
})
export class ConfectionsComponent implements OnInit {
  confections: ConfectionData[] = [];
  filteredConfections: ConfectionData[] = [];
  searchTerm: string = '';
  statusFilter: string = '';
  
  // Prescription modal properties - identical to Patients page
  showPrescriptionModal: boolean = false;
  selectedConfection: any = null;
  activePrescriptionTab: 'form' | 'variables' = 'form';
  activeFootTab: 'left' | 'right' = 'left';
  mockPrescriptionData: any = {
    personalInfo: {
      firstName: 'Emily',
      lastName: 'Watson',
      dateOfBirth: '1985-03-15'
    },
    medicalInfo: {
      height: '165 cm',
      weight: '62 kg',
      shoeSizeUK: '6',
      shoeSizeEU: '39',
      typeOfShoes: 'Athletic/Running',
      footWidth: 'Medium',
      footType: 'Normal',
      archType: 'Medium Arch',
      footRange: 'Normal',
      stjAxisLocation: 'Medial',
      symptomsOrDiagnosis: 'Plantar fasciitis, heel pain, mild overpronation during gait cycle',
      comments: 'Patient reports morning heel pain that improves with activity. Recommends custom orthotic with heel cup and arch support.'
    },
    associatedScans: [
      {
        scanType: '3D Foot Scan',
        date: '2024-12-10',
        foot: 'Left'
      },
      {
        scanType: '3D Foot Scan',
        date: '2024-12-10',
        foot: 'Right'
      },
      {
        scanType: 'Pressure Analysis',
        date: '2024-12-08',
        foot: 'Left'
      },
      {
        scanType: 'Pressure Analysis',
        date: '2024-12-08',
        foot: 'Right'
      }
    ]
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadConfections();
  }

  loadConfections() {
    // Generate comprehensive mock data for all confections across organisations
    this.confections = [
      // London Podiatry Centre confections
      {
        id: 1,
        confectionId: 'LPC-CONF-001',
        patientFirstName: 'Emily',
        patientLastName: 'Watson',
        businessPartner: 'London Podiatry Centre',
        madeBy: 'Dr. Robert Thompson',
        dateCreated: '2024-12-15',
        status: 'Received',
        orderNumber: 'ORD-2025-001'
      },
      {
        id: 2,
        confectionId: 'LPC-CONF-002',
        patientFirstName: 'Emily',
        patientLastName: 'Watson',
        businessPartner: 'London Podiatry Centre',
        madeBy: 'Helen Anderson',
        dateCreated: '2024-11-20',
        status: 'Ordered',
        orderNumber: 'ORD-2025-001'
      },
      {
        id: 3,
        confectionId: 'LPC-CONF-003',
        patientFirstName: 'James',
        patientLastName: 'Mitchell',
        businessPartner: 'London Podiatry Centre',
        madeBy: 'Dr. Robert Thompson',
        dateCreated: '2024-12-01',
        status: 'In Cart',
        orderNumber: 'ORD-2025-006'
      },
      {
        id: 4,
        confectionId: 'LPC-CONF-004',
        patientFirstName: 'Sophie',
        patientLastName: 'Clarke',
        businessPartner: 'London Podiatry Centre',
        madeBy: 'Helen Anderson',
        dateCreated: '2024-11-25',
        status: 'Ordered',
        orderNumber: 'ORD-2025-001'
      },
      
      // Manchester Foot Clinic confections
      {
        id: 5,
        confectionId: 'MFC-CONF-001',
        patientFirstName: 'Michael',
        patientLastName: 'Roberts',
        businessPartner: 'Manchester Foot Clinic',
        madeBy: 'Dr. David Wilson',
        dateCreated: '2024-12-20',
        status: 'Draft',
        orderNumber: 'ORD-2025-002'
      },
      {
        id: 6,
        confectionId: 'MFC-CONF-002',
        patientFirstName: 'Michael',
        patientLastName: 'Roberts',
        businessPartner: 'Manchester Foot Clinic',
        madeBy: 'Sarah Taylor',
        dateCreated: '2024-11-30',
        status: 'Received',
        orderNumber: 'ORD-2025-002'
      },
      {
        id: 7,
        confectionId: 'MFC-CONF-003',
        patientFirstName: 'Sarah',
        patientLastName: 'Thompson',
        businessPartner: 'Manchester Foot Clinic',
        madeBy: 'Dr. David Wilson',
        dateCreated: '2024-12-05',
        status: 'Ordered',
        orderNumber: 'ORD-2025-007'
      },
      {
        id: 8,
        confectionId: 'MFC-CONF-004',
        patientFirstName: 'David',
        patientLastName: 'Evans',
        businessPartner: 'Manchester Foot Clinic',
        madeBy: 'Sarah Taylor',
        dateCreated: '2024-11-15',
        status: 'In Cart',
        orderNumber: 'ORD-2025-007'
      },
      
      // Birmingham Medical Centre confections
      {
        id: 9,
        confectionId: 'BMC-CONF-001',
        patientFirstName: 'Rachel',
        patientLastName: 'Green',
        businessPartner: 'Birmingham Medical Centre',
        madeBy: 'Mark Johnson',
        dateCreated: '2024-12-18',
        status: 'Draft',
        orderNumber: 'ORD-2025-003'
      },
      {
        id: 10,
        confectionId: 'BMC-CONF-002',
        patientFirstName: 'Rachel',
        patientLastName: 'Green',
        businessPartner: 'Birmingham Medical Centre',
        madeBy: 'Claire Smith',
        dateCreated: '2024-11-28',
        status: 'Ordered',
        orderNumber: 'ORD-2025-003'
      },
      {
        id: 11,
        confectionId: 'BMC-CONF-003',
        patientFirstName: 'Thomas',
        patientLastName: 'Baker',
        businessPartner: 'Birmingham Medical Centre',
        madeBy: 'Mark Johnson',
        dateCreated: '2024-12-10',
        status: 'In Cart',
        orderNumber: 'ORD-2025-008'
      },
      {
        id: 12,
        confectionId: 'BMC-CONF-004',
        patientFirstName: 'Lisa',
        patientLastName: 'White',
        businessPartner: 'Birmingham Medical Centre',
        madeBy: 'Claire Smith',
        dateCreated: '2024-11-10',
        status: 'Ordered',
        orderNumber: 'ORD-2025-008'
      },
      
      // Leeds Sports Medicine confections
      {
        id: 13,
        confectionId: 'LSM-CONF-001',
        patientFirstName: 'Andrew',
        patientLastName: 'Taylor',
        businessPartner: 'Leeds Sports Medicine',
        madeBy: 'Dr. Sophie Brown',
        dateCreated: '2024-12-08',
        status: 'Draft',
        orderNumber: 'ORD-2025-004'
      },
      {
        id: 14,
        confectionId: 'LSM-CONF-002',
        patientFirstName: 'Jennifer',
        patientLastName: 'Brown',
        businessPartner: 'Leeds Sports Medicine',
        madeBy: 'Dr. Sophie Brown',
        dateCreated: '2024-12-22',
        status: 'In Cart',
        orderNumber: 'ORD-2025-004'
      },
      {
        id: 15,
        confectionId: 'LSM-CONF-003',
        patientFirstName: 'Jennifer',
        patientLastName: 'Brown',
        businessPartner: 'Leeds Sports Medicine',
        madeBy: 'Dr. Sophie Brown',
        dateCreated: '2024-11-18',
        status: 'Ordered',
        orderNumber: 'ORD-2025-004'
      },
      
      // Edinburgh Foot Care confections
      {
        id: 16,
        confectionId: 'EFC-CONF-001',
        patientFirstName: 'Robert',
        patientLastName: 'Wilson',
        businessPartner: 'Edinburgh Foot Care',
        madeBy: 'Dr. Anna Martinez',
        dateCreated: '2024-12-12',
        status: 'Ordered',
        orderNumber: 'ORD-2025-005'
      },
      {
        id: 17,
        confectionId: 'EFC-CONF-002',
        patientFirstName: 'Amanda',
        patientLastName: 'Davis',
        businessPartner: 'Edinburgh Foot Care',
        madeBy: 'Peter Wilson',
        dateCreated: '2024-11-22',
        status: 'In Cart',
        orderNumber: 'ORD-2025-005'
      },
      {
        id: 18,
        confectionId: 'EFC-CONF-003',
        patientFirstName: 'Christopher',
        patientLastName: 'Miller',
        businessPartner: 'Edinburgh Foot Care',
        madeBy: 'Dr. Anna Martinez',
        dateCreated: '2024-12-03',
        status: 'Draft',
        orderNumber: 'ORD-2025-005'
      },
      
      // Bristol Foot Clinic confections
      {
        id: 19,
        confectionId: 'BFC-CONF-001',
        patientFirstName: 'Victoria',
        patientLastName: 'Jones',
        businessPartner: 'Bristol Foot Clinic',
        madeBy: 'Dr. James Wilson',
        dateCreated: '2024-12-14',
        status: 'Received',
        orderNumber: 'ORD-2024-156'
      },
      {
        id: 20,
        confectionId: 'BFC-CONF-002',
        patientFirstName: 'Daniel',
        patientLastName: 'Anderson',
        businessPartner: 'Bristol Foot Clinic',
        madeBy: 'Dr. James Wilson',
        dateCreated: '2024-11-28',
        status: 'Ordered',
        orderNumber: 'ORD-2024-156'
      },
      
      // Cardiff Medical Centre confections
      {
        id: 21,
        confectionId: 'CMC-CONF-001',
        patientFirstName: 'Catherine',
        patientLastName: 'Moore',
        businessPartner: 'Cardiff Medical Centre',
        madeBy: 'Dr. Sarah Evans',
        dateCreated: '2024-12-09',
        status: 'Received',
        orderNumber: 'ORD-2024-155'
      },
      {
        id: 22,
        confectionId: 'CMC-CONF-002',
        patientFirstName: 'Matthew',
        patientLastName: 'Jackson',
        businessPartner: 'Cardiff Medical Centre',
        madeBy: 'Dr. Sarah Evans',
        dateCreated: '2024-11-25',
        status: 'Ordered',
        orderNumber: 'ORD-2024-155'
      },
      
      // Glasgow Foot Clinic confections
      {
        id: 23,
        confectionId: 'GFC-CONF-001',
        patientFirstName: 'Helen',
        patientLastName: 'Martin',
        businessPartner: 'Glasgow Foot Clinic',
        madeBy: 'Dr. Ian MacLeod',
        dateCreated: '2024-12-04',
        status: 'Received',
        orderNumber: 'ORD-2024-154'
      },
      {
        id: 24,
        confectionId: 'GFC-CONF-002',
        patientFirstName: 'Paul',
        patientLastName: 'Lee',
        businessPartner: 'Glasgow Foot Clinic',
        madeBy: 'Dr. Ian MacLeod',
        dateCreated: '2024-11-20',
        status: 'Ordered',
        orderNumber: 'ORD-2024-154'
      }
    ];

    // Sort by date created in descending order (most recent first)
    this.filteredConfections = this.sortConfectionsByDateDescending(this.confections);
  }

  // Sort confections by date created in descending order
  private sortConfectionsByDateDescending(confections: ConfectionData[]): ConfectionData[] {
    return [...confections].sort((a, b) => {
      const dateA = new Date(a.dateCreated);
      const dateB = new Date(b.dateCreated);
      return dateB.getTime() - dateA.getTime(); // Descending order (newest first)
    });
  }

  filterConfections() {
    const filtered = this.confections.filter(confection => {
      const matchesSearch = confection.confectionId.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           confection.patientFirstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           confection.patientLastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           `${confection.patientFirstName} ${confection.patientLastName}`.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = !this.statusFilter || confection.status === this.statusFilter;
      
      return matchesSearch && matchesStatus;
    });
    
    // Apply sorting to filtered results
    this.filteredConfections = this.sortConfectionsByDateDescending(filtered);
  }

  clearFilters() {
    this.searchTerm = '';
    this.statusFilter = '';
    this.filteredConfections = this.sortConfectionsByDateDescending(this.confections);
  }


  // Format date from YYYY-MM-DD to DD/MM/YYYY  
  formatDateToEuropean(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Get status badge class
  getStatusBadgeClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'draft': return 'bg-secondary';
      case 'in cart': return 'bg-warning';
      case 'ordered': return 'bg-primary';
      case 'received': return 'bg-success';
      default: return 'bg-secondary';
    }
  }

  // Prescription modal methods - identical to Patients page
  viewPrescription(confection: ConfectionData): void {
    this.selectedConfection = confection;
    
    // Update mock data with confection-specific patient info
    this.mockPrescriptionData.personalInfo = {
      firstName: confection.patientFirstName,
      lastName: confection.patientLastName,
      dateOfBirth: '1985-03-15' // Mock date of birth
    };
    
    this.showPrescriptionModal = true;
    console.log('View prescription for confection:', confection.confectionId);
  }

  closePrescriptionModal(): void {
    this.showPrescriptionModal = false;
    this.selectedConfection = null;
    this.activePrescriptionTab = 'form';
    this.activeFootTab = 'left';
    this.activePrescriptionTab = 'form';
    this.activeFootTab = 'left';
  }

  // Set active prescription tab
  setActivePrescriptionTab(tab: 'form' | 'variables'): void {
    this.activePrescriptionTab = tab;
  }

  // Set active foot tab
  setActiveFootTab(foot: 'left' | 'right'): void {
    this.activeFootTab = foot;
  }

  // Get foot elements for a specific section and foot
  getFootElements(section: 'forefoot' | 'midfoot' | 'hindfoot', foot: 'left' | 'right'): Array<{name: string, value: number}> {
    // Mock data for prescription variables - different values for left and right foot
    const mockVariables = {
      left: {
        forefoot: [
          { name: 'Element 1', value: 3 },
          { name: 'Element 2', value: 4 },
          { name: 'Element 3', value: 2 },
          { name: 'Element 4', value: 5 },
          { name: 'Element 5', value: 1 },
          { name: 'Element 6', value: 3 },
          { name: 'Element 7', value: 4 },
          { name: 'Element 8', value: 2 }
        ],
        midfoot: [
          { name: 'Element 1', value: 2 },
          { name: 'Element 2', value: 3 },
          { name: 'Element 3', value: 4 },
          { name: 'Element 4', value: 1 },
          { name: 'Element 5', value: 5 },
          { name: 'Element 6', value: 2 },
          { name: 'Element 7', value: 3 },
          { name: 'Element 8', value: 4 }
        ],
        hindfoot: [
          { name: 'Element 1', value: 4 },
          { name: 'Element 2', value: 2 },
          { name: 'Element 3', value: 3 },
          { name: 'Element 4', value: 5 },
          { name: 'Element 5', value: 1 },
          { name: 'Element 6', value: 4 },
          { name: 'Element 7', value: 2 },
          { name: 'Element 8', value: 3 }
        ]
      },
      right: {
        forefoot: [
          { name: 'Element 1', value: 4 },
          { name: 'Element 2', value: 3 },
          { name: 'Element 3', value: 5 },
          { name: 'Element 4', value: 2 },
          { name: 'Element 5', value: 1 },
          { name: 'Element 6', value: 4 },
          { name: 'Element 7', value: 3 },
          { name: 'Element 8', value: 5 }
        ],
        midfoot: [
          { name: 'Element 1', value: 3 },
          { name: 'Element 2', value: 4 },
          { name: 'Element 3', value: 2 },
          { name: 'Element 4', value: 5 },
          { name: 'Element 5', value: 1 },
          { name: 'Element 6', value: 3 },
          { name: 'Element 7', value: 4 },
          { name: 'Element 8', value: 2 }
        ],
        hindfoot: [
          { name: 'Element 1', value: 5 },
          { name: 'Element 2', value: 1 },
          { name: 'Element 3', value: 4 },
          { name: 'Element 4', value: 3 },
          { name: 'Element 5', value: 2 },
          { name: 'Element 6', value: 5 },
          { name: 'Element 7', value: 1 },
          { name: 'Element 8', value: 4 }
        ]
      }
    };

    return mockVariables[foot][section];
  }

  downloadPrescription(): void {
    if (this.selectedConfection) {
      console.log('Download prescription for:', this.selectedConfection.confectionId);
      alert(`Downloading prescription for ${this.selectedConfection.confectionId}`);
    }
  }

  editPrescriptionFromModal(): void {
    if (this.selectedConfection) {
      console.log('Edit prescription from modal for:', this.selectedConfection.confectionId);
      alert(`Edit Prescription feature for ${this.selectedConfection.confectionId} will be implemented later.`);
      this.closePrescriptionModal();
    }
  }

  // Tab action buttons methods
  downloadPrescriptionForm(): void {
    console.log('downloadPrescriptionForm called');
    if (this.selectedConfection) {
      console.log('Download prescription form for:', this.selectedConfection.confectionId);
    }
  }

  isPrescriptionEditable(): boolean {
    if (!this.selectedConfection) return false;
    const status = this.selectedConfection.status.toLowerCase();
    return status === 'in cart' || status === 'draft';
  }

  editPrescriptionForm(): void {
    console.log('editPrescriptionForm called');
    if (this.selectedConfection) {
      console.log('Edit prescription form for:', this.selectedConfection.confectionId);
    }
  }

  downloadPrescriptionVariables(): void {
    console.log('downloadPrescriptionVariables called');
    if (this.selectedConfection) {
      console.log('Download prescription variables for:', this.selectedConfection.confectionId);
    }
  }

  editPrescriptionVariables(): void {
    console.log('editPrescriptionVariables called');
    if (this.selectedConfection) {
      console.log('Edit prescription variables for:', this.selectedConfection.confectionId);
    }
  }

  // Action methods
  deleteConfection(confection: ConfectionData): void {
    if (confirm(`Are you sure you want to delete confection ${confection.confectionId}?`)) {
      console.log('Delete confection:', confection.confectionId);
      // Remove from filtered list for demo purposes
      this.filteredConfections = this.filteredConfections.filter(c => c.id !== confection.id);
      this.confections = this.confections.filter(c => c.id !== confection.id);
      alert(`Confection ${confection.confectionId} has been deleted.`);
    }
  }

  // Reorder confection method - REQUIRED METHOD
  reorderConfection(confection: ConfectionData): void {
    console.log('Reorder confection:', confection.confectionId);
    alert(`Reordering confection ${confection.confectionId}. This will create a new order with the same specifications.`);
    // TODO: Implement reorder logic - this could:
    // 1. Open a reorder confirmation modal
    // 2. Navigate to the order creation flow with pre-filled data
    // 3. Add the confection to a new cart/order
  }
}