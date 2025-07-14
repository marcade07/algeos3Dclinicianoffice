// Common interfaces for the application

export interface MetricCard {
  title: string;
  value: string;
  trend: {
    direction: 'up' | 'down';
    percentage: string;
  };
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  lastLogin: string;
}

export interface Practitioner {
  id: number;
  businessPartner: string;
  name: string;
  surname: string;
  email: string;
  profession: string;
  status: string;
  orderCount: number;
}

export interface User {
  id: number;
  organisation: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
  confections: number;
  title?: string; // Dr, Mr, Ms, etc.
  phoneNumber?: string;
}

export interface ProductOption {
  id: string;
  name: string;
  enabled: boolean;
  price: number;
  description?: string;
}

export interface Product {
  id: number;
  name: string;
  code: string;
  productType: string;
  description: string;
  stock: number;
  status: string;
  price: number;
  options?: ProductOption[];
}

export interface OrderTimeline {
  order: { date: string; completed: boolean };
  printing: { date: string; completed: boolean };
  shipping: { date: string; completed: boolean };
  delivery: { date: string; completed: boolean };
}

export interface Order {
  id: number;
  orderNumber: string;
  orderedBy: string;
  businessPartner: string;
  dateCreated: string;
  status: 'Send' | 'Shipped' | 'Delivered';
  orderPrice: number;
  insoles: number;
  topCovers: number;
  trackingNumber: string;
  timeline: OrderTimeline;
}

export interface Invoice {
  id: string;
  dateIssued: string;
  businessPartner: string;
  amount: number;
  invoicedTo: string;
}

export interface ExportOption {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  businessPartner: string;
  numberOfConfections: number;
  patientId: string;
}

export interface Confection {
  id: number;
  patientId: number;
  date: string;
  madeBy: string; // Prescribed by (practitioner who created the prescription)
  status: string;
  confectionId: string;
}

export interface Carrier {
  id: number;
  name: string;
  trackingUrl: string;
  deliveryOptionsCount: number;
  status: string;
}

export interface DeliveryOption {
  id: number;
  carrierId: number;
  deliveryTypeName: string;
  estimatedDeliveryTime: string;
  price: number;
  geographicZone: string;
  status: 'Activated' | 'Deactivated';
}