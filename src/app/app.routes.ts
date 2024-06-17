import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { InsurancePolicyFormComponent } from './components/insurance-policy-form/insurance-policy-form.component';
import { CoursesComponent } from './components/courses/courses.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'experience', component: UserDetailsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'contact', component: InsurancePolicyFormComponent },
  { path: '*', redirectTo: '' }
];
