import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = ' http://localhost:5000/tasks'; //direccion del servidor de bbdd
  constructor(private http: HttpClient) {}

  public getTasks(): Observable<Task[]> {
    //asincronico, por eso observable
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
