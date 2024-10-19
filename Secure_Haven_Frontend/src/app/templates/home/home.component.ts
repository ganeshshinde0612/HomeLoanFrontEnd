import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  constructor(private activateroute:ActivatedRoute)
  {

  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  }

  hide:boolean=false
  hideInquiry:boolean=false
  hideLogin:boolean=false
  
  enableInquiry(value:boolean)
  {
      this.hideInquiry=value
      this.hide=value
      this.hideLogin=false
  }

  disableInquiry(value:boolean)
  {
    this.hideInquiry=value
    document.getElementById("emicalc").scrollIntoView({behavior:'smooth'});
  }

  
  enableLogin(value:boolean)
  {
    this.hide=value
    this.hideLogin=value
    this.hideInquiry=false
  }

  disableLogin(value:boolean)
  {
    this.hideLogin=value
    this.hide=value
    this.hideInquiry=false
  }

 
}
