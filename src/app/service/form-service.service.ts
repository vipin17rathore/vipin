import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})

export class FormServiceService {

  constructor(private http:HttpClient) { }
  _url = 'http://localhost:8181/formData';
  
  formData(user : User){  
    return this.http.post<any>(this._url,user);
  }
}
