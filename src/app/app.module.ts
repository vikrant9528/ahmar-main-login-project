import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MaincomComponent } from './maincom/maincom.component';
import { ContantComponent } from './contant/contant.component';
import { UserComponent } from './user/user.component';
import { Signup2Component } from './signup2/signup2.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SignUpComponent,
    MaincomComponent,
    ContantComponent,
    UserComponent,
    Signup2Component,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
