import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsurancePolicyService } from '../../../services/insurance-policy.service';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.scss']
})
export class AddPolicyComponent implements OnInit {
  userId: number;
  policyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private insurancePolicyService: InsurancePolicyService,
    private route: ActivatedRoute,
    private navigationService: NavigationService
  ) {
    this.userId = 0;
    this.policyForm = this.fb.group({
      policyNumber: ['', Validators.required],
      insuranceAmount: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));
  }

  addPolicy(): void {
    if (this.policyForm.valid) {
      this.insurancePolicyService.addPolicy(this.userId, this.policyForm.value).subscribe(() => {
        this.navigationService.navigateToUserDetails(this.userId);
      });
    }
  }
}
