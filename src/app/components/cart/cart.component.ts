import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface PendingPrescription {
  id: number;
  prescriptionNumber: string;
  prescribedBy: string;
  patient: string;
  createdOn: string;
  topCovers: number;
  pairOfInsoles: number;
  price: number;
}

interface DeliveryAddress {
  id: string;
  name: string;
  address: string;
}

interface BillingAddress {
  id: string;
  name: string;
  address: string;
}

interface DeliveryMode {
  id: string;
  name: string;
  description: string;
  days: number;
  price: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  // Pending prescriptions data
  pendingPrescriptions: PendingPrescription[] = [
    {
      id: 1,
      prescriptionNumber: 'CNF-2024-007',
      prescribedBy: 'Dr. Sarah Wilson',
      patient: 'John Smith',
      createdOn: '2024-12-15',
      topCovers: 2,
      pairOfInsoles: 1,
      price: 125.50
    },
    {
      id: 2,
      prescriptionNumber: 'CNF-2024-008',
      prescribedBy: 'Dr. Michael Chen',
      patient: 'Emma Johnson',
      createdOn: '2024-12-14',
      topCovers: 4,
      pairOfInsoles: 2,
      price: 245.75
    },
    {
      id: 3,
      prescriptionNumber: 'CNF-2024-009',
      prescribedBy: 'Dr. Lisa Davis',
      patient: 'Robert Brown',
      createdOn: '2024-12-13',
      topCovers: 1,
      pairOfInsoles: 1,
      price: 89.99
    }
  ];

  // Address options
  deliveryAddresses: DeliveryAddress[] = [
    {
      id: 'advanced-medical',
      name: 'Advanced Medical Center',
      address: '123 Healthcare Drive, Boston, MA 02101'
    },
    {
      id: 'downtown-clinic',
      name: 'Downtown Clinic',
      address: '456 Medical Plaza, Boston, MA 02102'
    },
    {
      id: 'suburban-practice',
      name: 'Suburban Practice',
      address: '789 Health Street, Cambridge, MA 02139'
    }
  ];

  billingAddresses: BillingAddress[] = [
    {
      id: 'advanced-medical-billing',
      name: 'Advanced Medical Center',
      address: '123 Healthcare Drive, Boston, MA 02101'
    },
    {
      id: 'billing-department',
      name: 'Billing Department',
      address: '456 Finance Ave, Boston, MA 02103'
    },
    {
      id: 'accounts-payable',
      name: 'Accounts Payable',
      address: '789 Payment Street, Cambridge, MA 02140'
    }
  ];

  // Delivery modes
  deliveryModes: DeliveryMode[] = [
    {
      id: 'normal',
      name: 'Normal',
      description: 'Standard delivery, 7 days',
      days: 7,
      price: 10.00
    },
    {
      id: 'express',
      name: 'Express',
      description: 'Priority delivery, 2 days',
      days: 2,
      price: 25.00
    }
  ];

  // Form selections
  selectedDeliveryAddress: string = '';
  selectedBillingAddress: string = '';
  selectedDeliveryMode: string = 'normal';
  selectedPaymentMethod: string = 'card';

  // Modal states
  showStripeModal: boolean = false;
  showSuccessModal: boolean = false;

  // Stripe form data
  stripeForm = {
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  };

  // Order reference for success modal
  orderReference: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Set default selections
    this.selectedDeliveryAddress = this.deliveryAddresses[0].id;
    this.selectedBillingAddress = this.billingAddresses[0].id;
  }

  // Format date from YYYY-MM-DD to DD/MM/YYYY
  formatDateToEuropean(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Remove prescription from cart
  removePrescription(prescription: PendingPrescription): void {
    if (confirm(`Are you sure you want to remove prescription ${prescription.prescriptionNumber} from your cart?`)) {
      this.pendingPrescriptions = this.pendingPrescriptions.filter(p => p.id !== prescription.id);
      console.log('Removed prescription:', prescription.prescriptionNumber);
    }
  }

  // View prescription details
  viewPrescription(prescription: PendingPrescription): void {
    console.log('View prescription:', prescription.prescriptionNumber);
    alert(`Viewing prescription ${prescription.prescriptionNumber} details.`);
  }

  // Calculate totals
  getTotalPairsOfInsoles(): number {
    return this.pendingPrescriptions.reduce((total, p) => total + p.pairOfInsoles, 0);
  }

  getTotalTopCovers(): number {
    return this.pendingPrescriptions.reduce((total, p) => total + p.topCovers, 0);
  }

  getSubtotal(): number {
    return this.pendingPrescriptions.reduce((total, p) => total + p.price, 0);
  }

  getShippingCost(): number {
    const selectedMode = this.deliveryModes.find(mode => mode.id === this.selectedDeliveryMode);
    return selectedMode ? selectedMode.price : 0;
  }

  getTotal(): number {
    return this.getSubtotal() + this.getShippingCost();
  }

  // Check if form is valid for payment
  isFormValid(): boolean {
    return !!(
      this.selectedDeliveryAddress &&
      this.selectedBillingAddress &&
      this.selectedDeliveryMode &&
      this.selectedPaymentMethod &&
      this.pendingPrescriptions.length > 0
    );
  }

  // Get validation status text
  getValidationStatus(): string {
    if (this.pendingPrescriptions.length === 0) {
      return 'Add prescriptions to cart';
    }
    if (!this.selectedDeliveryAddress) {
      return 'Select delivery address';
    }
    if (!this.selectedBillingAddress) {
      return 'Select billing address';
    }
    if (!this.selectedDeliveryMode) {
      return 'Select delivery mode';
    }
    if (!this.selectedPaymentMethod) {
      return 'Select payment method';
    }
    return 'Ready to pay';
  }

  // Open Stripe payment modal
  openStripeModal(): void {
    if (this.isFormValid()) {
      this.showStripeModal = true;
    }
  }

  // Close Stripe modal
  closeStripeModal(): void {
    this.showStripeModal = false;
    this.resetStripeForm();
  }

  // Reset Stripe form
  resetStripeForm(): void {
    this.stripeForm = {
      cardholderName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    };
  }

  // Format card number input
  formatCardNumber(event: any): void {
    let value = event.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
    const matches = value.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      this.stripeForm.cardNumber = parts.join(' ');
    } else {
      this.stripeForm.cardNumber = value;
    }
  }

  // Format expiry date input
  formatExpiryDate(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    this.stripeForm.expiryDate = value;
  }

  // Check if Stripe form is valid
  isStripeFormValid(): boolean {
    return !!(
      this.stripeForm.cardholderName.trim() &&
      this.stripeForm.cardNumber.replace(/\s/g, '').length === 16 &&
      this.stripeForm.expiryDate.length === 5 &&
      this.stripeForm.cvv.length === 3
    );
  }

  // Process payment
  processPayment(): void {
    if (this.isStripeFormValid()) {
      // Generate order reference
      this.orderReference = 'ORD-' + new Date().getFullYear() + '-' + 
        String(Math.floor(Math.random() * 1000)).padStart(3, '0');
      
      // Simulate payment processing
      setTimeout(() => {
        this.closeStripeModal();
        this.showSuccessModal = true;
        console.log('Payment processed successfully');
      }, 1500);
    }
  }

  // Close success modal
  closeSuccessModal(): void {
    this.showSuccessModal = false;
    // Clear cart after successful payment
    this.pendingPrescriptions = [];
  }

  // Navigate to orders page
  viewOrders(): void {
    this.closeSuccessModal();
    this.router.navigate(['/orders']);
  }

  // Download invoice
  downloadInvoice(): void {
    console.log('Downloading invoice for order:', this.orderReference);
    alert(`Downloading invoice for order ${this.orderReference}`);
  }

  // Get selected delivery address details
  getSelectedDeliveryAddress(): DeliveryAddress | undefined {
    return this.deliveryAddresses.find(addr => addr.id === this.selectedDeliveryAddress);
  }

  // Get selected billing address details
  getSelectedBillingAddress(): BillingAddress | undefined {
    return this.billingAddresses.find(addr => addr.id === this.selectedBillingAddress);
  }

  // Get selected delivery mode details
  getSelectedDeliveryMode(): DeliveryMode | undefined {
    return this.deliveryModes.find(mode => mode.id === this.selectedDeliveryMode);
  }
}