import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss'],
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task = TASKS[0];
  constructor() {}

  ngOnInit() {}
}
