import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FinancesComponent } from '../finances/finances.component';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-medical-center',
  standalone: true,
  imports: [CommonModule, FormsModule, FinancesComponent, UsersComponent],
  templateUrl: './medical-center.component.html',
  styleUrl: './medical-center.component.scss'
})
export class MedicalCenterComponent {
  activeTab: 'invoices' | 'address' | 'team' | 'carrier' | 'payment-modalities' = 'invoices';

  setActiveTab(tab: 'invoices' | 'address' | 'team' | 'carrier' | 'payment-modalities') {
    this.activeTab = tab;
  }
}