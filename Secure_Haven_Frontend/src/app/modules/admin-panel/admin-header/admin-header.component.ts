import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent implements OnInit{


  usertype:string

  ngOnInit(): void {
    
    this.usertype=localStorage.getItem("type")
  }


}
