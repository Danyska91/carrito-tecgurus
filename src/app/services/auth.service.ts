import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwt : string = '';
  constructor(private http : HttpClient) { }

  login(username: string, password : string): Observable<any>{
    return this.http.post<any>('https://curso.tgconsulting.online/minipos/api/login', {password:password, username:username})
  }
}
