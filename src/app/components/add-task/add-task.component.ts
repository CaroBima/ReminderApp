import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
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
    console.log('entra');
    if (this.text.length === 0) {
      alert('Please add a task!');
      return;
    }
  }
}
