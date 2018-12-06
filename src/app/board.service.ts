import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './registration-page/user.type';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private headers;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  }

  public getBoard(id): any {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get(`http://localhost:3000/board/info/${id}`,
      {
        headers: this.headers,
        withCredentials: true,
        observe: 'response',
      }).pipe(tap(), catchError(err => throwError(err)));
  }

}
