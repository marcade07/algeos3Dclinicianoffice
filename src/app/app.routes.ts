import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FinancesComponent as InvoicesComponent } from './components/finances/finances.component';
import { DataExportComponent } from './components/data-export/data-export.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PatientsComponent } from './components/patients/patients.component';
import { ConfectionsComponent } from './components/confections/confections.component';
import { CustomersComponent } from './components/customers/customers.component';
import { MedicalCenterComponent } from './components/medical-center/medical-center.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: '/medical-center', pathMatch: 'full' },
  { path: 'medical-center', component: MedicalCenterComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'prescriptions', component: ConfectionsComponent },
  { path: 'confections', redirectTo: '/prescriptions', pathMatch: 'full' },
  { path: 'business-partners', component: CustomersComponent },
  { path: 'customers', redirectTo: '/business-partners', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'account-information', component: SettingsComponent },
  { path: 'settings', redirectTo: '/account-information', pathMatch: 'full' },
  { path: 'cart', component: CartComponent }
];