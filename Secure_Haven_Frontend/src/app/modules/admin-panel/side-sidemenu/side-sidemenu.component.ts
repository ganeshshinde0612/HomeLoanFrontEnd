import { Component, OnInit } from '@angular/core';
import { AdminLogin } from '../../../model/admin-login';

@Component({
  selector: 'app-side-sidemenu',
  templateUrl: './side-sidemenu.component.html',
  styleUrl: './side-sidemenu.component.css'
})
export class SideSidemenuComponent implements OnInit{

  
  userType:string
  options :Array<any>

  ngOnInit(): void {
   this.userType =localStorage.getItem("userType")
  //  this.options = localStorage.getItem(options);
    this.options=AdminLogin.userPrevillages
  }
}
