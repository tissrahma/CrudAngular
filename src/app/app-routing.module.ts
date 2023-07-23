import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DetailsUserComponent } from './details-user/details-user.component';

const routes: Routes = [
  { path: '', component: MainPageComponent }, // Set the main page as the default route
  { path: 'add-user', component: UserFormComponent },
  { path: 'user-list', component: UserListComponent }, 
  { path: 'update-user/:_id', component: UpdateUserComponent },
  { path: 'details-user/:_id', component: DetailsUserComponent }
  // Add a route for the UserFormComponent
  // Add a route for the UserFormComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
