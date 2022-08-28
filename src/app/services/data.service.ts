import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {  }


  register(uname:any,uid:any,pswd:any){
    const data={
      uname,
      uid,
      pswd
    }
    //asynchronous
    return this.http.post('http://localhost:3000/register',data)


  }


  }

