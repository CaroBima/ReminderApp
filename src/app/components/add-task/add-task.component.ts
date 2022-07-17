import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output() addTask: EventEmitter<Task> = new EventEmitter();

  text: string;
  day: string;
  reminder: boolean;
  constructor() {
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

  ngOnInit() {}

  public onSubmit() {
    if (this.text.length === 0) {
      alert('Please add a task!');
      return;
    }

    const { text, day, reminder } = this;
    const newTask = { text, day, reminder };
    this.addTask.emit(newTask);
  }
}
