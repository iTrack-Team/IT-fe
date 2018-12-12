import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Task, moveTask } from './_types/task.type';
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

  public addTask(body: Task, id: string): any {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post(`http://localhost:3000/board/add-task/${id}`,
      body,
      {
        headers: this.headers,
        withCredentials: true,
        observe: 'response',
      }).pipe(tap(), catchError(err => throwError(err)));
  }

  public deleteColumn(id: string): any {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post(`http://localhost:3000/board/delete-column/${id}`,
      {
        headers: this.headers,
        withCredentials: true,
        observe: 'response',
      }).pipe(tap(), catchError(err => throwError(err)));
  }

  public putTask(task: Task, id: string): any {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post(`http://localhost:3000/board/task-edit/${id}`,
      task,
      {
        headers: this.headers,
        withCredentials: true,
        observe: 'response',
      }).pipe(tap(), catchError(err => throwError(err)));
  }

  public putColumnName(name: string, id: string): any {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post(`http://localhost:3000/board/column-edit/${id}`,
      { name },
      {
        headers: this.headers,
        withCredentials: true,
        observe: 'response',
      }).pipe(tap(), catchError(err => throwError(err)));
  }

  public addColumn(name: string): any {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post(`http://localhost:3000/board/add-column`,
      { name },
      {
        headers: this.headers,
        withCredentials: true,
        observe: 'response',
      }).pipe(tap(), catchError(err => throwError(err)));
  }

  public deleteTask(columnId: string, taskId: string): any {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post(`http://localhost:3000/board/delete-task/${columnId}/${taskId}`,
      {
        headers: this.headers,
        withCredentials: true,
        observe: 'response',
      }).pipe(tap(), catchError(err => throwError(err)));
  }

  public changeBoardName(name: string): any {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    return this.http.post(`http://localhost:3000/board/board-edit`,
      { name },
      {
        headers: this.headers,
        withCredentials: true,
        observe: 'response',
      }).pipe(tap(), catchError(err => throwError(err)));
  }

  public moveTask(moveInfo: moveTask, taskId: string): any {
    this.headers.append('Access-Control-Allow-Methods', 'POST');
    console.log(moveInfo);
    console.log(taskId);
    return this.http.post(`http://localhost:3000/board/move/${taskId}`,
      moveInfo,
      {
        headers: this.headers,
        withCredentials: true,
        observe: 'response',
      }).pipe(tap(), catchError(err => throwError(err)));
  }

}
