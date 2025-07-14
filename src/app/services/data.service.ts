import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  TeamMember,
  Practitioner,
  User,
  Product,
  Order,
  Invoice,
  MetricCard,
  ExportOption,
  OrderTimeline,
  Patient,
  Confection,
  DeliveryOption,
  Carrier
} from '../interfaces/common.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Dashboard metrics
  getCurrentMonthMetrics(): Observable<MetricCard[]> {
    return of([
      {
        title: 'Total Orders',
        value: '247',
        trend: { direction: 'up', percentage: '12.5%' },
        icon: 'bi-cart'
      },
      {
        title: 'Total Prescriptions',
        value: '312',
        trend: { direction: 'up', percentage: '18.3%' },
        icon: 'bi-file-medical'
      },
      {
        title: 'Revenue',
        value: '£18,450',
        trend: { direction: 'up', percentage: '8.2%' },
        icon: 'bi-currency-pound'
      },
      {
        title: 'Active Business Partners',
        value: '89',
        trend: { direction: 'up', percentage: '3.1%' },
        icon: 'bi-building'
      },
      {
        title: 'Product Sales',
        value: '1,247',
        trend: { direction: 'up', percentage: '9.8%' },
        icon: 'bi-box'
      },
      {
        title: 'Average Order Value',
        value: '£74.70',
        trend: { direction: 'down', percentage: '2.1%' },
        icon: 'bi-graph-up'
      }
    ]);
  }

  getAllTimeMetrics(): Observable<MetricCard[]> {
    return of([
      {
        title: 'Total Orders',
        value: '12,847',
        trend: { direction: 'up', percentage: '145.2%' },
        icon: 'bi-cart'
      },
      {
        title: 'Total Prescriptions',
        value: '18,234',
        trend: { direction: 'up', percentage: '189.4%' },
        icon: 'bi-file-medical'
      },
      {
        title: 'Total Revenue',
        value: '£987,450',
        trend: { direction: 'up', percentage: '198.7%' },
        icon: 'bi-currency-pound'
      },
      {
        title: 'Partner Business Partners',
        value: '234',
        trend: { direction: 'up', percentage: '89.1%' },
        icon: 'bi-building'
      },
      {
        title: 'Products Delivered',
        value: '45,678',
        trend: { direction: 'up', percentage: '234.5%' },
        icon: 'bi-truck'
      },
      {
        title: 'Average Order Value',
        value: '£76.85',
        trend: { direction: 'up', percentage: '8.7%' },
        icon: 'bi-graph-up'
      }
    ]);
  }

  // Team Members (kept for legacy compatibility)
  getTeamMembers(): Observable<TeamMember[]> {
    return of([
      {
        id: 1,
        name: 'Sarah Johnson',
        email: 'sarah.johnson@company.com',
        phone: '+44 20 7946 0958',
        role: 'Administrator',
        status: 'Active',
        lastLogin: '2025-01-08 14:30'
      },
      {
        id: 2,
        name: 'Michael Chen',
        email: 'michael.chen@company.com',
        phone: '+44 161 496 0142',
        role: 'Manager',
        status: 'Active',
        lastLogin: '2025-01-08 09:15'
      },
      {
        id: 3,
        name: 'Emma Williams',
        email: 'emma.williams@company.com',
        phone: '+44 113 496 0789',
        role: 'Support',
        status: 'Active',
        lastLogin: '2025-01-07 16:45'
      },
      {
        id: 4,
        name: 'James Brown',
        email: 'james.brown@company.com',
        phone: '+44 121 496 0234',
        role: 'Support',
        status: 'Desactivated',
        lastLogin: '2025-01-05 11:20'
      },
      {
        id: 5,
        name: 'Lisa Davis',
        email: 'lisa.davis@company.com',
        phone: '+44 141 496 0567',
        role: 'Manager',
        status: 'Active',
        lastLogin: '2025-01-08 13:10'
      }
    ]);
  }

  // Practitioners (kept for legacy compatibility)
  getPractitioners(): Observable<Practitioner[]> {
    return of([
      {
        id: 1,
        businessPartner: 'London Podiatry Centre',
        name: 'Dr. Robert',
        surname: 'Thompson',
        email: 'r.thompson@londonpodiatry.com',
        profession: 'Podiatrist',
        status: 'Active',
        orderCount: 45
      },
      {
        id: 2,
        businessPartner: 'Manchester Foot Clinic',
        name: 'Dr. Helen',
        surname: 'Anderson',
        email: 'h.anderson@manchesterfoot.com',
        profession: 'Chiropodist',
        status: 'Active',
        orderCount: 32
      },
      {
        id: 3,
        businessPartner: 'Birmingham Medical Centre',
        name: 'Dr. David',
        surname: 'Wilson',
        email: 'd.wilson@birminghammed.com',
        profession: 'Orthotist',
        status: 'Active',
        orderCount: 28
      },
      {
        id: 4,
        businessPartner: 'Leeds Sports Medicine',
        name: 'Dr. Sarah',
        surname: 'Taylor',
        email: 's.taylor@leedssports.com',
        profession: 'Sports Medicine',
        status: 'Desactivated',
        orderCount: 15
      },
      {
        id: 5,
        businessPartner: 'Edinburgh Foot Care',
        name: 'Dr. Mark',
        surname: 'Johnson',
        email: 'm.johnson@edinburghfoot.com',
        profession: 'Podiatrist',
        status: 'Active',
        orderCount: 38
      }
    ]);
  }

  // Backoffice Users (Algeos and Printing Portal only)
  getBackofficeUsers(): Observable<User[]> {
    return of([
      // Algeos users
      {
        id: 1,
        organisation: 'Algeos',
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'sarah.johnson@algeos.com',
        role: 'Administrator',
        status: 'Active',
        confections: 0
      },
      {
        id: 2,
        organisation: 'Algeos',
        firstName: 'Michael',
        lastName: 'Chen',
        email: 'michael.chen@algeos.com',
        role: 'Support',
        status: 'Active',
        confections: 0
      },
      {
        id: 3,
        organisation: 'Algeos',
        firstName: 'Emma',
        lastName: 'Williams',
        email: 'emma.williams@algeos.com',
        role: 'Technician',
        status: 'Active',
        confections: 0
      },
      {
        id: 4,
        organisation: 'Algeos',
        firstName: 'James',
        lastName: 'Brown',
        email: 'james.brown@algeos.com',
        role: 'Technician',
        status: 'Desactivated',
        confections: 0
      },
      {
        id: 5,
        organisation: 'Algeos',
        firstName: 'Lisa',
        lastName: 'Davis',
        email: 'lisa.davis@algeos.com',
        role: 'Technician',
        status: 'Active',
        confections: 0
      },
      // Printing Portal users - ALL SET TO 0 ORDERS
      {
        id: 6,
        organisation: 'Printing Portal',
        firstName: 'David',
        lastName: 'Wilson',
        email: 'david.wilson@printingportal.com',
        role: 'Manufacturer',
        status: 'Active',
        confections: 0
      },
      {
        id: 7,
        organisation: 'Printing Portal',
        firstName: 'Lisa',
        lastName: 'Martinez',
        email: 'lisa.martinez@printingportal.com',
        role: 'Manufacturer',
        status: 'Desactivated',
        confections: 0
      }
    ]);
  }

  // Customers (Clinic users only)
  // Customers (Business Partner users only)
  getCustomers(): Observable<User[]> {
    return of([
      // Business Partner users - Keep appropriate values
      {
        id: 1,
        organisation: 'London Podiatry Centre',
        title: 'Dr.',
        firstName: 'Dr. Robert',
        lastName: 'Thompson',
        email: 'r.thompson@londonpodiatry.com',
        phoneNumber: '+44 20 7946 0958',
        role: 'Manager',
        status: 'Active',
        confections: 45
      },
      {
        id: 2,
        organisation: 'London Podiatry Centre',
        title: 'Ms.',
        firstName: 'Helen',
        lastName: 'Anderson',
        email: 'h.anderson@londonpodiatry.com',
        phoneNumber: '+44 20 7946 0959',
        role: 'Practitioner',
        status: 'Active',
        confections: 32
      },
      {
        id: 3,
        organisation: 'London Podiatry Centre',
        title: 'Ms.',
        firstName: 'Lisa',
        lastName: 'Davis',
        email: 'l.davis@londonpodiatry.com',
        phoneNumber: '+44 20 7946 0960',
        role: 'Coordinator',
        status: 'Active',
        confections: 0
      },
      {
        id: 4,
        organisation: 'Manchester Foot Clinic',
        title: 'Dr.',
        firstName: 'Dr. David',
        lastName: 'Wilson',
        email: 'd.wilson@manchesterfoot.com',
        phoneNumber: '+44 161 496 0142',
        role: 'Manager',
        status: 'Active',
        confections: 28
      },
      {
        id: 5,
        organisation: 'Manchester Foot Clinic',
        title: 'Ms.',
        firstName: 'Sarah',
        lastName: 'Taylor',
        email: 's.taylor@manchesterfoot.com',
        phoneNumber: '+44 161 496 0143',
        role: 'Practitioner',
        status: 'Active',
        confections: 15
      },
      {
        id: 6,
        organisation: 'Birmingham Medical Centre',
        title: 'Mr.',
        firstName: 'Mark',
        lastName: 'Johnson',
        email: 'm.johnson@birminghammed.com',
        phoneNumber: '+44 121 496 0234',
        role: 'Manager',
        status: 'Active',
        confections: 38
      },
      {
        id: 7,
        organisation: 'Birmingham Medical Centre',
        title: 'Ms.',
        firstName: 'Claire',
        lastName: 'Smith',
        email: 'c.smith@birminghammed.com',
        phoneNumber: '+44 121 496 0235',
        role: 'Practitioner',
        status: 'Desactivated',
        confections: 22
      },
      {
        id: 8,
        organisation: 'Birmingham Medical Centre',
        title: 'Mr.',
        firstName: 'John',
        lastName: 'Roberts',
        email: 'j.roberts@birminghammed.com',
        phoneNumber: '+44 121 496 0236',
        role: 'Coordinator',
        status: 'Active',
        confections: 0
      },
      {
        id: 9,
        organisation: 'Edinburgh Foot Care',
        title: 'Dr.',
        firstName: 'Dr. Anna',
        lastName: 'Martinez',
        email: 'a.martinez@edinburghfoot.com',
        phoneNumber: '+44 131 496 0567',
        role: 'Manager',
        status: 'Active',
        confections: 41
      },
      {
        id: 10,
        organisation: 'Edinburgh Foot Care',
        title: 'Mr.',
        firstName: 'Peter',
        lastName: 'Wilson',
        email: 'p.wilson@edinburghfoot.com',
        phoneNumber: '+44 131 496 0568',
        role: 'Practitioner',
        status: 'Active',
        confections: 29
      },
      {
        id: 11,
        organisation: 'Leeds Sports Medicine',
        title: 'Dr.',
        firstName: 'Dr. Sophie',
        lastName: 'Brown',
        email: 's.brown@leedssports.com',
        phoneNumber: '+44 113 496 0789',
        role: 'Manager',
        status: 'Active',
        confections: 33
      },
      // Bristol Foot Clinic users
      {
        id: 12,
        organisation: 'Bristol Foot Clinic',
        title: 'Dr.',
        firstName: 'Dr. James',
        lastName: 'Wilson',
        email: 'j.wilson@bristolfoot.com',
        phoneNumber: '+44 117 496 0890',
        role: 'Manager',
        status: 'Active',
        confections: 25
      },
      {
        id: 13,
        organisation: 'Bristol Foot Clinic',
        title: 'Ms.',
        firstName: 'Emma',
        lastName: 'Thompson',
        email: 'e.thompson@bristolfoot.com',
        phoneNumber: '+44 117 496 0891',
        role: 'Practitioner',
        status: 'Active',
        confections: 18
      },
      // Cardiff Medical Centre users
      {
        id: 14,
        organisation: 'Cardiff Medical Centre',
        title: 'Dr.',
        firstName: 'Dr. Sarah',
        lastName: 'Evans',
        email: 's.evans@cardiffmed.com',
        phoneNumber: '+44 29 2496 0992',
        role: 'Manager',
        status: 'Active',
        confections: 31
      },
      {
        id: 15,
        organisation: 'Cardiff Medical Centre',
        title: 'Mr.',
        firstName: 'Michael',
        lastName: 'Davies',
        email: 'm.davies@cardiffmed.com',
        phoneNumber: '+44 29 2496 0993',
        role: 'Practitioner',
        status: 'Active',
        confections: 22
      },
      // Glasgow Foot Clinic users
      {
        id: 16,
        organisation: 'Glasgow Foot Clinic',
        title: 'Dr.',
        firstName: 'Dr. Ian',
        lastName: 'MacLeod',
        email: 'i.macleod@glasgowfoot.com',
        phoneNumber: '+44 141 496 0567',
        role: 'Manager',
        status: 'Active',
        confections: 27
      },
      {
        id: 17,
        organisation: 'Glasgow Foot Clinic',
        title: 'Ms.',
        firstName: 'Fiona',
        lastName: 'Stewart',
        email: 'f.stewart@glasgowfoot.com',
        phoneNumber: '+44 141 496 0568',
        role: 'Coordinator',
        status: 'Active',
        confections: 0
      },
      // Newcastle Podiatry users
      {
        id: 18,
        organisation: 'Newcastle Podiatry',
        title: 'Dr.',
        firstName: 'Dr. Alan',
        lastName: 'Richardson',
        email: 'a.richardson@newcastlepod.com',
        phoneNumber: '+44 191 496 0669',
        role: 'Manager',
        status: 'Active',
        confections: 19
      },
      {
        id: 19,
        organisation: 'Newcastle Podiatry',
        title: 'Ms.',
        firstName: 'Rachel',
        lastName: 'Turner',
        email: 'r.turner@newcastlepod.com',
        phoneNumber: '+44 191 496 0670',
        role: 'Practitioner',
        status: 'Desactivated',
        confections: 12
      },
      // Oxford Medical Centre users
      {
        id: 20,
        organisation: 'Oxford Medical Centre',
        title: 'Dr.',
        firstName: 'Dr. Philip',
        lastName: 'Harrison',
        email: 'p.harrison@oxfordmed.com',
        phoneNumber: '+44 1865 496 0771',
        role: 'Manager',
        status: 'Active',
        confections: 24
      },
      {
        id: 21,
        organisation: 'Oxford Medical Centre',
        title: 'Ms.',
        firstName: 'Catherine',
        lastName: 'Bell',
        email: 'c.bell@oxfordmed.com',
        phoneNumber: '+44 1865 496 0772',
        role: 'Coordinator',
        status: 'Active',
        confections: 0
      }
    ]);
  }

  // Patients - Only clinic organisations (excluding Algeos and Printing Portal)
  // Patients - Only business partner organisations (excluding Algeos and Printing Portal)
  getPatients(): Observable<Patient[]> {
    return of([
      // London Podiatry Centre patients
      {
        id: 1,
        firstName: 'Emily',
        lastName: 'Watson',
        dateOfBirth: '1985-03-15',
        businessPartner: 'London Podiatry Centre',
        numberOfConfections: 3,
        patientId: 'LPC-2024-001'
      },
      {
        id: 2,
        firstName: 'James',
        lastName: 'Mitchell',
        dateOfBirth: '1978-11-22',
        businessPartner: 'London Podiatry Centre',
        numberOfConfections: 1,
        patientId: 'LPC-2024-002'
      },
      {
        id: 3,
        firstName: 'Sophie',
        lastName: 'Clarke',
        dateOfBirth: '1992-07-08',
        businessPartner: 'London Podiatry Centre',
        numberOfConfections: 2,
        patientId: 'LPC-2024-003'
      },
      // Manchester Foot Clinic patients
      {
        id: 4,
        firstName: 'Michael',
        lastName: 'Roberts',
        dateOfBirth: '1980-05-14',
        businessPartner: 'Manchester Foot Clinic',
        numberOfConfections: 4,
        patientId: 'MFC-2024-001'
      },
      {
        id: 5,
        firstName: 'Sarah',
        lastName: 'Thompson',
        dateOfBirth: '1975-09-30',
        businessPartner: 'Manchester Foot Clinic',
        numberOfConfections: 2,
        patientId: 'MFC-2024-002'
      },
      {
        id: 6,
        firstName: 'David',
        lastName: 'Evans',
        dateOfBirth: '1988-12-03',
        businessPartner: 'Manchester Foot Clinic',
        numberOfConfections: 1,
        patientId: 'MFC-2024-003'
      },
      // Birmingham Medical Centre patients
      {
        id: 7,
        firstName: 'Rachel',
        lastName: 'Green',
        dateOfBirth: '1983-04-18',
        businessPartner: 'Birmingham Medical Centre',
        numberOfConfections: 5,
        patientId: 'BMC-2024-001'
      },
      {
        id: 8,
        firstName: 'Thomas',
        lastName: 'Baker',
        dateOfBirth: '1970-08-25',
        businessPartner: 'Birmingham Medical Centre',
        numberOfConfections: 3,
        patientId: 'BMC-2024-002'
      },
      {
        id: 9,
        firstName: 'Lisa',
        lastName: 'White',
        dateOfBirth: '1995-01-12',
        businessPartner: 'Birmingham Medical Centre',
        numberOfConfections: 1,
        patientId: 'BMC-2024-003'
      },
      // Leeds Sports Medicine patients
      {
        id: 10,
        firstName: 'Andrew',
        lastName: 'Taylor',
        dateOfBirth: '1987-06-20',
        businessPartner: 'Leeds Sports Medicine',
        numberOfConfections: 2,
        patientId: 'LSM-2024-001'
      },
      {
        id: 11,
        firstName: 'Jennifer',
        lastName: 'Brown',
        dateOfBirth: '1991-10-07',
        businessPartner: 'Leeds Sports Medicine',
        numberOfConfections: 4,
        patientId: 'LSM-2024-002'
      },
      // Edinburgh Foot Care patients
      {
        id: 12,
        firstName: 'Robert',
        lastName: 'Wilson',
        dateOfBirth: '1982-02-28',
        businessPartner: 'Edinburgh Foot Care',
        numberOfConfections: 3,
        patientId: 'EFC-2024-001'
      },
      {
        id: 13,
        firstName: 'Amanda',
        lastName: 'Davis',
        dateOfBirth: '1976-12-15',
        businessPartner: 'Edinburgh Foot Care',
        numberOfConfections: 2,
        patientId: 'EFC-2024-002'
      },
      {
        id: 14,
        firstName: 'Christopher',
        lastName: 'Miller',
        dateOfBirth: '1989-09-11',
        businessPartner: 'Edinburgh Foot Care',
        numberOfConfections: 1,
        patientId: 'EFC-2024-003'
      },
      // Bristol Foot Clinic patients
      {
        id: 15,
        firstName: 'Victoria',
        lastName: 'Jones',
        dateOfBirth: '1984-07-04',
        businessPartner: 'Bristol Foot Clinic',
        numberOfConfections: 2,
        patientId: 'BFC-2024-001'
      },
      {
        id: 16,
        firstName: 'Daniel',
        lastName: 'Anderson',
        dateOfBirth: '1993-03-22',
        businessPartner: 'Bristol Foot Clinic',
        numberOfConfections: 1,
        patientId: 'BFC-2024-002'
      },
      // Cardiff Medical Centre patients
      {
        id: 17,
        firstName: 'Catherine',
        lastName: 'Moore',
        dateOfBirth: '1981-11-08',
        businessPartner: 'Cardiff Medical Centre',
        numberOfConfections: 4,
        patientId: 'CMC-2024-001'
      },
      {
        id: 18,
        firstName: 'Matthew',
        lastName: 'Jackson',
        dateOfBirth: '1986-05-16',
        businessPartner: 'Cardiff Medical Centre',
        numberOfConfections: 3,
        patientId: 'CMC-2024-002'
      },
      // Glasgow Foot Clinic patients
      {
        id: 19,
        firstName: 'Helen',
        lastName: 'Martin',
        dateOfBirth: '1979-08-13',
        businessPartner: 'Glasgow Foot Clinic',
        numberOfConfections: 2,
        patientId: 'GFC-2024-001'
      },
      {
        id: 20,
        firstName: 'Paul',
        lastName: 'Lee',
        dateOfBirth: '1990-04-29',
        businessPartner: 'Glasgow Foot Clinic',
        numberOfConfections: 1,
        patientId: 'GFC-2024-002'
      },
      // Newcastle Podiatry patients
      {
        id: 21,
        firstName: 'Karen',
        lastName: 'Harris',
        dateOfBirth: '1977-12-01',
        businessPartner: 'Newcastle Podiatry',
        numberOfConfections: 3,
        patientId: 'NP-2024-001'
      },
      {
        id: 22,
        firstName: 'Steven',
        lastName: 'Clark',
        dateOfBirth: '1985-06-18',
        businessPartner: 'Newcastle Podiatry',
        numberOfConfections: 2,
        patientId: 'NP-2024-002'
      },
      // Oxford Medical Centre patients
      {
        id: 23,
        firstName: 'Michelle',
        lastName: 'Lewis',
        dateOfBirth: '1988-10-25',
        businessPartner: 'Oxford Medical Centre',
        numberOfConfections: 1,
        patientId: 'OMC-2024-001'
      },
      {
        id: 24,
        firstName: 'Richard',
        lastName: 'Walker',
        dateOfBirth: '1974-01-14',
        businessPartner: 'Oxford Medical Centre',
        numberOfConfections: 4,
        patientId: 'OMC-2024-002'
      }
    ]);
  }

  // Confections for patients
  getConfectionsByPatientId(patientId: number): Observable<Confection[]> {
    const allConfections: Confection[] = [
      // Emily Watson (Patient ID: 1) - 3 confections
      {
        id: 1,
        patientId: 1,
        date: '2024-12-15',
        madeBy: 'Dr. Robert Thompson', // Prescribed by
        status: 'received',
        confectionId: 'LPC-CONF-001'
      },
      {
        id: 2,
        patientId: 1,
        date: '2024-11-20',
        madeBy: 'Helen Anderson', // Prescribed by
        status: 'ordered',
        confectionId: 'LPC-CONF-002'
      },
      {
        id: 3,
        patientId: 1,
        date: '2024-10-10',
        madeBy: 'Dr. Robert Thompson', // Prescribed by
        status: 'received',
        confectionId: 'LPC-CONF-003'
      },
      // James Mitchell (Patient ID: 2) - 1 confection
      {
        id: 4,
        patientId: 2,
        date: '2024-12-01',
        madeBy: 'Helen Anderson', // Prescribed by
        status: 'in cart',
        confectionId: 'LPC-CONF-004'
      },
      // Sophie Clarke (Patient ID: 3) - 2 confections
      {
        id: 5,
        patientId: 3,
        date: '2024-11-25',
        madeBy: 'Dr. Robert Thompson', // Prescribed by
        status: 'ordered',
        confectionId: 'LPC-CONF-005'
      },
      {
        id: 6,
        patientId: 3,
        date: '2024-09-15',
        madeBy: 'Helen Anderson', // Prescribed by
        status: 'received',
        confectionId: 'LPC-CONF-006'
      },
      // Michael Roberts (Patient ID: 4) - 4 confections
      {
        id: 7,
        patientId: 4,
        date: '2024-12-20',
        madeBy: 'Dr. David Wilson', // Prescribed by
        status: 'draft',
        confectionId: 'MFC-CONF-001'
      },
      {
        id: 8,
        patientId: 4,
        date: '2024-11-30',
        madeBy: 'Sarah Taylor', // Prescribed by
        status: 'received',
        confectionId: 'MFC-CONF-002'
      },
      {
        id: 9,
        patientId: 4,
        date: '2024-10-25',
        madeBy: 'Dr. David Wilson', // Prescribed by
        status: 'received',
        confectionId: 'MFC-CONF-003'
      },
      {
        id: 10,
        patientId: 4,
        date: '2024-09-10',
        madeBy: 'Sarah Taylor', // Prescribed by
        status: 'received',
        confectionId: 'MFC-CONF-004'
      },
      // Sarah Thompson (Patient ID: 5) - 2 confections
      {
        id: 11,
        patientId: 5,
        date: '2024-12-05',
        madeBy: 'Dr. David Wilson', // Prescribed by
        status: 'ordered',
        confectionId: 'MFC-CONF-005'
      },
      {
        id: 12,
        patientId: 5,
        date: '2024-08-20',
        madeBy: 'Sarah Taylor', // Prescribed by
        status: 'received',
        confectionId: 'MFC-CONF-006'
      },
      // David Evans (Patient ID: 6) - 1 confection
      {
        id: 13,
        patientId: 6,
        date: '2024-11-15',
        madeBy: 'Dr. David Wilson', // Prescribed by
        status: 'in cart',
        confectionId: 'MFC-CONF-007'
      },
      // Rachel Green (Patient ID: 7) - 5 confections
      {
        id: 14,
        patientId: 7,
        date: '2024-12-18',
        madeBy: 'Mark Johnson', // Prescribed by
        status: 'draft',
        confectionId: 'BMC-CONF-001'
      },
      {
        id: 15,
        patientId: 7,
        date: '2024-11-28',
        madeBy: 'Claire Smith', // Prescribed by
        status: 'ordered',
        confectionId: 'BMC-CONF-002'
      },
      {
        id: 16,
        patientId: 7,
        date: '2024-10-30',
        madeBy: 'Mark Johnson', // Prescribed by
        status: 'received',
        confectionId: 'BMC-CONF-003'
      },
      {
        id: 17,
        patientId: 7,
        date: '2024-09-25',
        madeBy: 'Claire Smith', // Prescribed by
        status: 'received',
        confectionId: 'BMC-CONF-004'
      },
      {
        id: 18,
        patientId: 7,
        date: '2024-08-15',
        madeBy: 'Mark Johnson', // Prescribed by
        status: 'received',
        confectionId: 'BMC-CONF-005'
      },
      // Thomas Baker (Patient ID: 8) - 3 confections
      {
        id: 19,
        patientId: 8,
        date: '2024-12-10',
        madeBy: 'Claire Smith', // Prescribed by
        status: 'in cart',
        confectionId: 'BMC-CONF-006'
      },
      {
        id: 20,
        patientId: 8,
        date: '2024-10-20',
        madeBy: 'Mark Johnson', // Prescribed by
        status: 'received',
        confectionId: 'BMC-CONF-007'
      },
      {
        id: 21,
        patientId: 8,
        date: '2024-07-30',
        madeBy: 'Claire Smith', // Prescribed by
        status: 'received',
        confectionId: 'BMC-CONF-008'
      },
      // Lisa White (Patient ID: 9) - 1 confection
      {
        id: 22,
        patientId: 9,
        date: '2024-11-10',
        madeBy: 'Mark Johnson', // Prescribed by
        status: 'ordered',
        confectionId: 'BMC-CONF-009'
      },
      // Andrew Taylor (Patient ID: 10) - 2 confections
      {
        id: 23,
        patientId: 10,
        date: '2024-12-08',
        madeBy: 'Dr. Sophie Brown', // Prescribed by
        status: 'draft',
        confectionId: 'LSM-CONF-001'
      },
      {
        id: 24,
        patientId: 10,
        date: '2024-09-05',
        madeBy: 'Dr. Sophie Brown', // Prescribed by
        status: 'received',
        confectionId: 'LSM-CONF-002'
      },
      // Jennifer Brown (Patient ID: 11) - 4 confections
      {
        id: 25,
        patientId: 11,
        date: '2024-12-22',
        madeBy: 'Dr. Sophie Brown', // Prescribed by
        status: 'in cart',
        confectionId: 'LSM-CONF-003'
      },
      {
        id: 26,
        patientId: 11,
        date: '2024-11-18',
        madeBy: 'Dr. Sophie Brown', // Prescribed by
        status: 'ordered',
        confectionId: 'LSM-CONF-004'
      },
      {
        id: 27,
        patientId: 11,
        date: '2024-10-12',
        madeBy: 'Dr. Sophie Brown', // Prescribed by
        status: 'received',
        confectionId: 'LSM-CONF-005'
      },
      {
        id: 28,
        patientId: 11,
        date: '2024-08-28',
        madeBy: 'Dr. Sophie Brown', // Prescribed by
        status: 'received',
        confectionId: 'LSM-CONF-006'
      },
      // Robert Wilson (Patient ID: 12) - 3 confections
      {
        id: 29,
        patientId: 12,
        date: '2024-12-12',
        madeBy: 'Dr. Anna Martinez', // Prescribed by
        status: 'ordered',
        confectionId: 'EFC-CONF-001'
      },
      {
        id: 30,
        patientId: 12,
        date: '2024-10-18',
        madeBy: 'Peter Wilson', // Prescribed by
        status: 'received',
        confectionId: 'EFC-CONF-002'
      },
      {
        id: 31,
        patientId: 12,
        date: '2024-08-22',
        madeBy: 'Dr. Anna Martinez', // Prescribed by
        status: 'received',
        confectionId: 'EFC-CONF-003'
      },
      // Amanda Davis (Patient ID: 13) - 2 confections
      {
        id: 32,
        patientId: 13,
        date: '2024-11-22',
        madeBy: 'Peter Wilson', // Prescribed by
        status: 'in cart',
        confectionId: 'EFC-CONF-004'
      },
      {
        id: 33,
        patientId: 13,
        date: '2024-09-08',
        madeBy: 'Dr. Anna Martinez', // Prescribed by
        status: 'received',
        confectionId: 'EFC-CONF-005'
      },
      // Christopher Miller (Patient ID: 14) - 1 confection
      {
        id: 34,
        patientId: 14,
        date: '2024-12-03',
        madeBy: 'Peter Wilson', // Prescribed by
        status: 'draft',
        confectionId: 'EFC-CONF-006'
      }
    ];

    return of(allConfections.filter(confection => confection.patientId === patientId));
  }

  // Products (formerly Other Products)
  getOtherProducts(): Observable<Product[]> {
    return of([
      // Insoles - Only PA11 Custom Insole (Full Length removed from main products)
      {
        id: 1,
        name: 'PA11 Custom Insole',
        code: 'PA11-CUST-001',
        productType: 'Insoles',
        description: 'Premium custom-molded insole for maximum comfort and support',
        stock: 150,
        status: 'Active',
        price: 89.99,
        options: [
          {
            id: 'full-length',
            name: 'Full Length',
            enabled: true,
            price: 10.00,
            description: 'Option only available when designing a custom insole. Cannot be ordered alone.'
          }
        ]
      },
      // New Leathertec products - all Top Cover type
      {
        id: 2,
        name: 'Leathertec Vive',
        code: 'LT-VIVE',
        productType: 'Top Cover',
        description: 'Propulsive cushioning designed for sporting activities. Absorbs repeated impact, improves energy return and resists compression over time.',
        stock: 85,
        status: 'Active',
        price: 12.99
      },
      {
        id: 3,
        name: 'Leathertec Performance 4000',
        code: 'LT-P4000',
        productType: 'Top Cover',
        description: 'Ideal for daily wear. Balances support, durability and comfort for walking, standing and casual activities.',
        stock: 120,
        status: 'Active',
        price: 14.50
      },
      {
        id: 4,
        name: 'Leathertec Performance XRD',
        code: 'LT-XRD',
        productType: 'Top Cover',
        description: 'Advanced impact protection. Recommended for safety footwear and high impact activities. Flexible until impact, then instantly hardens to protect.',
        stock: 95,
        status: 'Active',
        price: 14.99
      },
      {
        id: 5,
        name: 'Leathertec Medical Hindfoot Zone',
        code: 'LT-HFZ',
        productType: 'Top Cover',
        description: 'Offloading comfort for heels and plantar support.',
        stock: 75,
        status: 'Active',
        price: 11.25
      },
      {
        id: 6,
        name: 'Leathertec Medical Forefoot Zone',
        code: 'LT-FFZ',
        productType: 'Top Cover',
        description: 'Soft cushioning for metatarsal zone and toe off comfort.',
        stock: 110,
        status: 'Active',
        price: 10.75
      }
    ]);
  }

  // Orders - Only clinic organisations, with tracking and timeline data
  getOrders(): Observable<Order[]> {
    return of([
      {
        id: 1,
        orderNumber: 'ORD-2025-001',
        orderedBy: 'Dr. Robert Thompson',
        businessPartner: 'London Podiatry Centre',
        dateCreated: '2025-01-08',
        status: 'Send',
        orderPrice: 189.98,
        insoles: 2,
        topCovers: 4,
        trackingNumber: 'LP2025001TRK',
        timeline: {
          order: { date: '2025-01-08', completed: true },
          printing: { date: '2025-01-09', completed: false },
          shipping: { date: '2025-01-12', completed: false },
          delivery: { date: '2025-01-15', completed: false }
        }
      },
      {
        id: 2,
        orderNumber: 'ORD-2025-002',
        orderedBy: 'Dr. David Wilson',
        businessPartner: 'Manchester Foot Clinic',
        dateCreated: '2025-01-07',
        status: 'Shipped',
        orderPrice: 114.99,
        insoles: 1,
        topCovers: 2,
        trackingNumber: 'MFC2025002TRK',
        timeline: {
          order: { date: '2025-01-07', completed: true },
          printing: { date: '2025-01-08', completed: true },
          shipping: { date: '2025-01-09', completed: true },
          delivery: { date: '2025-01-12', completed: false }
        }
      },
      {
        id: 3,
        orderNumber: 'ORD-2025-003',
        orderedBy: 'Mark Johnson',
        businessPartner: 'Birmingham Medical Centre',
        dateCreated: '2025-01-06',
        status: 'Delivered',
        orderPrice: 307.47,
        insoles: 3,
        topCovers: 6,
        trackingNumber: 'BMC2025003TRK',
        timeline: {
          order: { date: '2025-01-06', completed: true },
          printing: { date: '2025-01-07', completed: true },
          shipping: { date: '2025-01-08', completed: true },
          delivery: { date: '2025-01-10', completed: true }
        }
      },
      {
        id: 4,
        orderNumber: 'ORD-2025-004',
        orderedBy: 'Dr. Sophie Brown',
        businessPartner: 'Leeds Sports Medicine',
        dateCreated: '2025-01-05',
        status: 'Shipped',
        orderPrice: 102.49,
        insoles: 1,
        topCovers: 2,
        trackingNumber: 'LSM2025004TRK',
        timeline: {
          order: { date: '2025-01-05', completed: true },
          printing: { date: '2025-01-06', completed: true },
          shipping: { date: '2025-01-07', completed: true },
          delivery: { date: '2025-01-11', completed: false }
        }
      },
      {
        id: 5,
        orderNumber: 'ORD-2025-005',
        orderedBy: 'Dr. Anna Martinez',
        businessPartner: 'Edinburgh Foot Care',
        dateCreated: '2025-01-04',
        status: 'Delivered',
        orderPrice: 204.98,
        insoles: 2,
        topCovers: 4,
        trackingNumber: 'EFC2025005TRK',
        timeline: {
          order: { date: '2025-01-04', completed: true },
          printing: { date: '2025-01-05', completed: true },
          shipping: { date: '2025-01-06', completed: true },
          delivery: { date: '2025-01-09', completed: true }
        }
      },
      {
        id: 6,
        orderNumber: 'ORD-2025-006',
        orderedBy: 'Dr. Robert Thompson',
        businessPartner: 'London Podiatry Centre',
        dateCreated: '2025-01-03',
        status: 'Send',
        orderPrice: 89.99,
        insoles: 1,
        topCovers: 0,
        trackingNumber: 'LP2025006TRK',
        timeline: {
          order: { date: '2025-01-03', completed: true },
          printing: { date: '2025-01-04', completed: false },
          shipping: { date: '2025-01-07', completed: false },
          delivery: { date: '2025-01-10', completed: false }
        }
      },
      {
        id: 7,
        orderNumber: 'ORD-2025-007',
        orderedBy: 'Dr. David Wilson',
        businessPartner: 'Manchester Foot Clinic',
        dateCreated: '2025-01-02',
        status: 'Shipped',
        orderPrice: 156.75,
        insoles: 0,
        topCovers: 12,
        trackingNumber: 'MFC2025007TRK',
        timeline: {
          order: { date: '2025-01-02', completed: true },
          printing: { date: '2025-01-03', completed: true },
          shipping: { date: '2025-01-04', completed: true },
          delivery: { date: '2025-01-08', completed: false }
        }
      },
      {
        id: 8,
        orderNumber: 'ORD-2025-008',
        orderedBy: 'Mark Johnson',
        businessPartner: 'Birmingham Medical Centre',
        dateCreated: '2025-01-01',
        status: 'Delivered',
        orderPrice: 245.50,
        insoles: 2,
        topCovers: 5,
        trackingNumber: 'BMC2025008TRK',
        timeline: {
          order: { date: '2025-01-01', completed: true },
          printing: { date: '2025-01-02', completed: true },
          shipping: { date: '2025-01-03', completed: true },
          delivery: { date: '2025-01-06', completed: true }
        }
      }
    ]);
  }

  // Invoices/Finances - Updated structure with numberOfOrders field
  getInvoices(): Observable<Invoice[]> {
    return of([
      {
        id: 'INV-2025-001',
        dateIssued: '2025-01-08',
        businessPartner: 'London Podiatry Centre',
        amount: 379.96,
        invoicedTo: 'Dr. Robert Thompson'
      },
      {
        id: 'INV-2025-002',
        dateIssued: '2025-01-07',
        businessPartner: 'Manchester Foot Clinic',
        amount: 271.74,
        invoicedTo: 'Dr. David Wilson'
      },
      {
        id: 'INV-2025-003',
        dateIssued: '2025-01-06',
        businessPartner: 'Birmingham Medical Centre',
        amount: 552.97,
        invoicedTo: 'Mark Johnson'
      },
      {
        id: 'INV-2025-004',
        dateIssued: '2025-01-05',
        businessPartner: 'Leeds Sports Medicine',
        amount: 102.49,
        invoicedTo: 'Dr. Sophie Brown'
      },
      {
        id: 'INV-2025-005',
        dateIssued: '2025-01-04',
        businessPartner: 'Edinburgh Foot Care',
        amount: 204.98,
        invoicedTo: 'Dr. Anna Martinez'
      },
      {
        id: 'INV-2024-156',
        dateIssued: '2024-12-15',
        businessPartner: 'Bristol Foot Clinic',
        amount: 156.75,
        invoicedTo: 'Dr. James Wilson'
      },
      {
        id: 'INV-2024-155',
        dateIssued: '2024-12-10',
        businessPartner: 'Cardiff Medical Centre',
        amount: 789.50,
        invoicedTo: 'Dr. Sarah Evans'
      },
      {
        id: 'INV-2024-154',
        dateIssued: '2024-12-05',
        businessPartner: 'Glasgow Foot Clinic',
        amount: 345.25,
        invoicedTo: 'Dr. Ian MacLeod'
      },
      {
        id: 'INV-2024-153',
        dateIssued: '2024-11-28',
        businessPartner: 'Newcastle Podiatry',
        amount: 467.85,
        invoicedTo: 'Dr. Alan Richardson'
      },
      {
        id: 'INV-2024-152',
        dateIssued: '2024-11-20',
        businessPartner: 'Oxford Medical Centre',
        amount: 89.99,
        invoicedTo: 'Dr. Philip Harrison'
      }
    ]);
  }

  // Carriers
  getCarriers(): Observable<Carrier[]> {
    return of([
      {
        id: 1,
        name: 'Royal Mail',
        trackingUrl: 'https://www.royalmail.com/track-your-item#/tracking-results/{tracking_number}',
        deliveryOptionsCount: 3,
        status: 'Active'
      },
      {
        id: 2,
        name: 'DX',
        trackingUrl: 'https://www.dx.co.uk/track/{tracking_number}',
        deliveryOptionsCount: 2,
        status: 'Active'
      },
      {
        id: 3,
        name: 'UPS',
        trackingUrl: 'https://www.ups.com/track?loc=en_GB&tracknum={tracking_number}',
        deliveryOptionsCount: 1,
        status: 'Active'
      }
    ]);
  }

  // Delivery Options
  getDeliveryOptions(): Observable<DeliveryOption[]> {
    return of([
      // Royal Mail delivery options
      {
        id: 1,
        carrierId: 1,
        deliveryTypeName: 'First Class',
        estimatedDeliveryTime: '2 days',
        price: 1.25,
        geographicZone: 'UK Mainland',
        status: 'Activated'
      },
      {
        id: 2,
        carrierId: 1,
        deliveryTypeName: 'Second Class',
        estimatedDeliveryTime: '3 days',
        price: 0.85,
        geographicZone: 'UK Mainland',
        status: 'Activated'
      },
      {
        id: 3,
        carrierId: 1,
        deliveryTypeName: 'Special Delivery',
        estimatedDeliveryTime: '1 day',
        price: 6.95,
        geographicZone: 'UK Mainland',
        status: 'Activated'
      },
      // DX delivery options
      {
        id: 4,
        carrierId: 2,
        deliveryTypeName: 'Next Day',
        estimatedDeliveryTime: '1 day',
        price: 8.50,
        geographicZone: 'UK Mainland',
        status: 'Activated'
      },
      {
        id: 5,
        carrierId: 2,
        deliveryTypeName: '48 Hour',
        estimatedDeliveryTime: '2 days',
        price: 5.75,
        geographicZone: 'UK Mainland',
        status: 'Activated'
      },
      // UPS delivery option
      {
        id: 6,
        carrierId: 3,
        deliveryTypeName: 'Ireland Standard',
        estimatedDeliveryTime: '5 days',
        price: 12.99,
        geographicZone: 'Ireland',
        status: 'Activated'
      }
    ]);
  }

  // Export Options
  getExportOptions(): Observable<ExportOption[]> {
    return of([
      {
        id: 'orders',
        title: 'Orders Export',
        description: 'Export all order data with detailed information',
        icon: 'bi-cart-check'
      },
      {
        id: 'users',
        title: 'Users Export',
        description: 'Export user and clinic information',
        icon: 'bi-people'
      },
      {
        id: 'finances',
        title: 'Financial Export',
        description: 'Export invoices and payment data',
        icon: 'bi-currency-pound'
      },
      {
        id: 'products',
        title: 'Products Export',
        description: 'Export product catalog and inventory',
        icon: 'bi-box'
      },
      {
        id: 'analytics',
        title: 'Analytics Export',
        description: 'Export performance metrics and analytics',
        icon: 'bi-graph-up'
      }
    ]);
  }
}