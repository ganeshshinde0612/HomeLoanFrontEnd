import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router:Router, private home:HomeComponent)
  {

  }

  toEmiCalc()
  {
      this.home.disableInquiry(false)
      this.home.disableLogin(false)
      this.router.navigateByUrl('home')
      document.getElementById("emicalc").scrollIntoView({behavior:'smooth'});
     
  }

  toTestimonial()
  {
    this.home.disableInquiry(false)
    this.home.disableLogin(false)
    this.router.navigateByUrl('home')
    document.getElementById("testimonial").scrollIntoView({behavior:'smooth'});
  }

  toAbout()
  {
    this.home.disableInquiry(false)
    this.home.disableLogin(false)
    this.router.navigateByUrl('home')
    document.getElementById("aboutus").scrollIntoView({behavior:'smooth'});
  }

  toContact()
  {
    this.home.disableInquiry(false)
    this.home.disableLogin(false)
    this.router.navigateByUrl('home')
    document.getElementById("contactus").scrollIntoView({behavior:'smooth'});
  }

  onInquiry()
  {
    this.home.enableInquiry(true)
  }

  onLogin()
  {
    this.home.enableLogin(true)
  }
  
}
