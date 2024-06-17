import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  navigateToUserDetails(userId: number): void {
    this.router.navigate(['/user-details', userId]);
  }

  navigateToAddUser(): void {
    this.router.navigate(['/add-user']);
  }

  navigateToEditUser(userId: number): void {
    this.router.navigate(['/edit-user', userId]);
  }

  navigateToUserList(): void {
    this.router.navigate(['/user-list']);
  }

  navigateToAddPolicy(userId: number): void {
    this.router.navigate(['/add-policy', userId]);
  }

  navigateToEditPolicy(userId: number, policyId: number): void {
    this.router.navigate(['/add-policy', userId, policyId]);
  }
}
