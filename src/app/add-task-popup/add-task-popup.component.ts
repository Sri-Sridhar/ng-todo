import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../todo';

@Component({
  selector: 'app-add-task-popup',
  templateUrl: './add-task-popup.component.html',
  styleUrls: ['./add-task-popup.component.css']
})
export class AddTaskPopupComponent implements OnInit {

  todo: Todo = new Todo();
  todoContent = '';

  constructor(public matDialogRef: MatDialogRef<AddTaskPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo) {
    if (data) {
      this.todoContent = data.content;
    }
  }

  ngOnInit() {
  }

  onClose(): Todo {
    this.todo.content = this.todoContent;
    return this.todo;
  }

  onCancel(): void {
    this.matDialogRef.close();
  }

}
