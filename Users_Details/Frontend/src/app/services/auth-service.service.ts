import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private htpp: HttpClient
  ) { }

  procedLogin = (data: any) => {
    // console.log("data");
    // console.log(data);
   return this.htpp.post("http://localhost:210/api/v1/users/login",data)
  }
  registation = (data: any)=>{
    console.log("data");
    console.log(data);
    return this.htpp.post("http://localhost:210/api/v1/users/reg",data)
  }

}
