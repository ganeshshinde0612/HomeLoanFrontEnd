import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { HeaderComponent } from './templates/header/header.component';
import { AboutComponent } from './templates/about/about.component';
import { ContactComponent } from './templates/contact/contact.component';
import { EmiCalComponent } from './templates/emi-cal/emi-cal.component';
import { LoginComponent } from './includs/login/login.component';
import { EnquiryComponent } from './includs/enquiry/enquiry.component';
import { ReactiveFormsModule } from '@angular/forms';

import { TestimonialComponent } from './templates/testimonial/testimonial.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './includs/register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    EmiCalComponent,
    LoginComponent,
    EnquiryComponent,
    TestimonialComponent,
    RegisterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
