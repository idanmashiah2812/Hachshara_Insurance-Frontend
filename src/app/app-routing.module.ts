import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { UserPoliciesComponent } from './components/user/user-policies/user-policies.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddPolicyComponent } from './components/insurance-policy/add-policy/add-policy.component';
import { EditPolicyComponent } from './components/insurance-policy/edit-policy/edit-policy.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'user-policies/:id', component: UserPoliciesComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'add-policy/:userId', component: AddPolicyComponent },
  { path: 'edit-policy/:userId/:policyId', component: EditPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
