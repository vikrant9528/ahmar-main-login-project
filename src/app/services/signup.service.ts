import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http:HttpClient) { }

  getLoginDetails():Observable<any>{
    return this._http.get('http://localhost:3000/login');
  }
  addUser(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/login',data)
  }
  getposts():Observable<any>{
    return this._http.get('https://dummyjson.com/posts');
  }
  deleteuser(id:any):Observable<any>{
    return this._http.delete(`http://localhost:3000/login/${id}`);
  }
}
