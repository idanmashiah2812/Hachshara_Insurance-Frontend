import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { AddPolicyComponent } from './components/insurance-policy/add-policy/add-policy.component';
import { EditPolicyComponent } from './components/insurance-policy/edit-policy/edit-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    AddUserComponent,
    EditUserComponent,
    AddPolicyComponent,
    EditPolicyComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
