import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { addTask, Task } from './_types/task.type';
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

  public getBoard(): any {
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    return this.http.get(`http://localhost:3000/board/info`,
      {
        headers: this.headers,
        withCredentials: true,
        observe: 'response',
      }).pipe(tap(), catchError(err => throwError(err)));
  }

  public addTask(body: addTask): any {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post(`http://localhost:3000/board/task`,
      body,
      {
        headers: this.headers,
        withCredentials: true,
        observe: 'response',
      }).pipe(tap(), catchError(err => throwError(err)));
  }

  public deleteColumn(id: string): any {
    this.headers.append('Access-Control-Allow-Methods', 'DELETE');
    return this.http.delete(`http://localhost:3000/board/column?id=${id}`,
      {
        headers: this.headers,
        withCredentials: true,
        observe: 'response',
      }).pipe(tap(), catchError(err => throwError(err)));
  }

  public putTask(task: Task): any {
    this.headers.append('Access-Control-Allow-Methods', 'PUT');
    return this.http.put(`http://localhost:3000/board/task`,
      task,
      {
        headers: this.headers,
        withCredentials: true,
        observe: 'response',
      }).pipe(tap(), catchError(err => throwError(err)));
  }

}
