import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-policies',
  templateUrl: './user-policies.component.html',
  styleUrls: ['./user-policies.component.css']
})
export class UserPoliciesComponent implements OnInit {
  userId!: number;
  policies: any[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.policies = [];
  }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(this.userId).subscribe((user) => {
      this.policies = user.policies; // Assuming user object has a policies array
    });
  }
}
