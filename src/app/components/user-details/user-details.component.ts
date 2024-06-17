import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { InsurancePolicyService } from '../../services/insurance-policy.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userId!: number;
  user: any;
  policies: any[];
  filterForm: FormGroup;

  constructor(
    private userService: UserService,
    private insurancePolicyService: InsurancePolicyService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private navigationService: NavigationService
  ) {
    this.policies = [];
    this.filterForm = this.fb.group({
      startDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(this.userId).subscribe((user) => {
      this.user = user;
    });
    this.refreshPolicies();
  }

  refreshPolicies(): void {
    this.insurancePolicyService.getPolicies(this.userId).subscribe((policies) => {
      this.policies = policies;
    });
  }

  addPolicy(): void {
    this.navigationService.navigateToAddPolicy(this.userId);
  }

  editPolicy(policyId: number): void {
    this.navigationService.navigateToEditPolicy(this.userId, policyId);
  }

  deletePolicy(policyId: number): void {
    this.insurancePolicyService.deletePolicy(this.userId, policyId).subscribe(() => {
      this.refreshPolicies();
    });
  }

  filterPolicies(): void {
    const startDateControl = this.filterForm.get('startDate');
    if (startDateControl) {
      const startDate = startDateControl.value;
      if (startDate) {
        this.policies = this.policies.filter(policy => new Date(policy.startDate) >= new Date(startDate));
      } else {
        this.refreshPolicies();
      }
    }
  }
}
