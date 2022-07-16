import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { TASKS } from '../../mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss'],
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task = TASKS[0];

  @Output() borrarTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor() {}

  ngOnInit() {}

  public onDelete(task: Task) {
    this.borrarTask.emit(task);
    console.log(task);
  }
}
