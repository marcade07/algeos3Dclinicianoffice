import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  activeSection: string = 'roles';
  
  // My Account form data
  accountData = {
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@algeos.com',
    phoneNumber: '+44 20 7946 0958',
    role: 'Administrator'
  };
  
  // Password change form data
  passwordData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
  
  // Form states
  isEditingAccount = false;
  isSavingAccount = false;
  isSavingPassword = false;

  // View permissions method - read-only functionality
  viewPermissions(roleName: string): void {
    console.log(`Viewing permissions for role: ${roleName}`);
    alert(`Viewing permissions for ${roleName} role. This feature will display read-only permission details.`);
  }
  
  // My Account methods
  editAccount(): void {
    this.isEditingAccount = true;
  }
  
  cancelAccountEdit(): void {
    this.isEditingAccount = false;
    // Reset form data to original values
    this.accountData = {
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.johnson@algeos.com',
      phoneNumber: '+44 20 7946 0958',
      role: 'Administrator'
    };
  }
  
  saveAccountChanges(): void {
    if (!this.accountData.firstName.trim() || !this.accountData.lastName.trim() || !this.accountData.email.trim()) {
      alert('First name, last name, and email are required.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.accountData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    this.isSavingAccount = true;
    
    // Simulate API call
    setTimeout(() => {
      this.isSavingAccount = false;
      this.isEditingAccount = false;
      console.log('Account updated:', this.accountData);
      alert('Account information updated successfully!');
    }, 1000);
  }
  
  changePassword(): void {
    // Validation
    if (!this.passwordData.currentPassword || !this.passwordData.newPassword || !this.passwordData.confirmPassword) {
      alert('All password fields are required.');
      return;
    }
    
    if (this.passwordData.newPassword !== this.passwordData.confirmPassword) {
      alert('New password and confirm password do not match.');
      return;
    }
    
    if (this.passwordData.newPassword.length < 8) {
      alert('New password must be at least 8 characters long.');
      return;
    }
    
    this.isSavingPassword = true;
    
    // Simulate API call
    setTimeout(() => {
      this.isSavingPassword = false;
      // Clear password fields
      this.passwordData = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      };
      console.log('Password changed successfully');
      alert('Password changed successfully!');
    }, 1000);
  }
}