import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsurancePolicyService } from '../../../services/insurance-policy.service';

@Component({
  selector: 'app-edit-policy',
  templateUrl: './edit-policy.component.html',
  styleUrls: ['./edit-policy.component.scss']
})
export class EditPolicyComponent implements OnInit {
  userId!: number;
  policyId: number;
  policyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private insurancePolicyService: InsurancePolicyService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.policyId = 0;
    this.policyForm = this.fb.group({
      policyNumber: ['', Validators.required],
      insuranceAmount: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.policyId = Number(this.route.snapshot.paramMap.get('policyId'));
    this.insurancePolicyService.getPolicies(this.userId).subscribe((policies) => {
      const policy = policies.find(p => p.id === this.policyId);
      this.policyForm.patchValue(policy);
    });
  }

  updatePolicy(): void {
    if (this.policyForm.valid) {
      this.insurancePolicyService.updatePolicy(this.userId, this.policyId, this.policyForm.value).subscribe(() => {
        this.router.navigate(['/user-details', this.userId]);
      });
    }
  }
}
