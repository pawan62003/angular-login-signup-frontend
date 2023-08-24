import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', component:RegistrationComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
