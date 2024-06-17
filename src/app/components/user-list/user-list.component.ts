import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[];

  constructor(private userService: UserService, private navigationService: NavigationService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  viewUserDetails(userId: number): void {
    this.navigationService.navigateToUserDetails(userId);
  }

  addUser(): void {
    this.navigationService.navigateToAddUser();
  }

  editUser(userId: number): void {
    this.navigationService.navigateToEditUser(userId);
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId);
  }

  updateUserList(): void {
    this.loadUsers();
  }
}
