import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerLogin } from '../model/customer-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  registerCustomer(registrationData:CustomerLogin)
  {
    return this.http.post("http://localhost:9091/customer/login/register",registrationData)
  }

  loginCustomer(username:string, password:string)
  {  
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)

      return this.http.post("http://localhost:9091/customer/login/check_login", {}, {params})
  }
}
