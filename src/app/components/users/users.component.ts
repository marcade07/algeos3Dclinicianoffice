import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { User } from '../../interfaces/common.interfaces';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';
  organisationFilter: string = '';
  roleFilter: string = '';
  statusFilter: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getBackofficeUsers().subscribe((users: User[]) => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearch = user.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           user.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           user.organisation.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesOrganisation = !this.organisationFilter || user.organisation === this.organisationFilter;
      const matchesRole = !this.roleFilter || user.role === this.roleFilter;
      const matchesStatus = !this.statusFilter || user.status === this.statusFilter;
      return matchesSearch && matchesOrganisation && matchesRole && matchesStatus;
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

  getUniqueOrganisations(): string[] {
    return [...new Set(this.users.map(user => user.organisation))].sort();
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
}