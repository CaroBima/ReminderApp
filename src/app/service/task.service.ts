import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  public getTasks(): Observable<Task[]> {
    //asincronico, por eso observable
    const tasks = of(TASKS);
    return tasks;
  }
}
