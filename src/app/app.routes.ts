import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FinancesComponent as InvoicesComponent } from './components/finances/finances.component';
import { CarriersComponent } from './components/carriers/carriers.component';
import { DataExportComponent } from './components/data-export/data-export.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PatientsComponent } from './components/patients/patients.component';
import { ConfectionsComponent } from './components/confections/confections.component';
import { CustomersComponent } from './components/customers/customers.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'prescriptions', component: ConfectionsComponent },
  { path: 'confections', redirectTo: '/prescriptions', pathMatch: 'full' },
  { path: 'business-partners', component: CustomersComponent },
  { path: 'customers', redirectTo: '/business-partners', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'finances', redirectTo: '/invoices', pathMatch: 'full' },
  { path: 'couriers', component: CarriersComponent },
  { path: 'carriers', redirectTo: '/couriers', pathMatch: 'full' },
  { path: 'data-export', component: DataExportComponent },
  { path: 'settings', component: SettingsComponent }
];