import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  currentUser = {
    name: 'Sarah Johnson'
  };

  constructor(private router: Router) {}

  navigateToMyAccount(): void {
    this.router.navigate(['/settings']);
  }
}