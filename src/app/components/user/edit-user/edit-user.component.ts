import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId: number;
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.userId = 0;
    this.userForm = this.fb.group({
      name: [''],
      email: ['']
    });
  }

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(this.userId).subscribe((user) => {
      this.userForm.patchValue(user);
    });
  }

  onSubmit(): void {
    this.userService.updateUser(this.userId, this.userForm.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
