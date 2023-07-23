import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FormsModule } from '@angular/forms'; 

import { UpdateUserComponent } from './update-user/update-user.component';
import { DetailsUserComponent } from './details-user/details-user.component'; // Import FlexLayoutModule

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    MainPageComponent,
    UserListComponent,
    UpdateUserComponent,
    DetailsUserComponent,
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule , 
    AppRoutingModule ,
    FlexLayoutModule , 
    NgxFileDropModule  , 
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
