import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      name: [''],
      email: ['']
    });
  }

  onSubmit(): void {
    this.userService.addUser(this.userForm.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
