import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './registration-page/user.type';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers;
  name: string;
  email: string;
  password: string;
  status: number;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  }

  signOut(): Observable<User> {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get<any>('http://localhost:3000/logout', { headers: this.headers, withCredentials: true });
  }

  public registrate(body) {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post('http://localhost:3000/auth/register',
      body, {
        headers: this.headers,
        observe: 'response',
        withCredentials: true
      }).pipe(catchError(err => throwError(err)));
  }
}
