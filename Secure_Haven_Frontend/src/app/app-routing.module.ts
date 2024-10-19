import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './templates/home/home.component';
import { AboutComponent } from './templates/about/about.component';
import { ContactComponent } from './templates/contact/contact.component';
import { EmiCalComponent } from './templates/emi-cal/emi-cal.component';
import { EnquiryComponent } from './includs/enquiry/enquiry.component';
import { LoginComponent } from './includs/login/login.component';
import { TestimonialComponent } from './templates/testimonial/testimonial.component';


const routes: Routes = [
  {
    path:'',redirectTo:'home', pathMatch:'full'
  },
  {
    path:'home', component:HomeComponent, children:[
      
    ]
  },
  {
    path:'loanmodule', loadChildren:()=>import('./modules/customer-loan-app/customer-loan-app.module').then(file=>file.CustomerLoanAppModule)
  },
  {
    path:'adminmodule', loadChildren:()=>import('./modules/admin-panel/admin-panel.module').then(file=>file.AdminPanelModule)
  }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
