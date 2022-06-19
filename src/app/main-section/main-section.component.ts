import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { AddTaskPopupComponent } from '../add-task-popup/add-task-popup.component';
import { DeletedSnackbarComponent } from '../deleted-snackbar/deleted-snackbar.component';
import { Todo } from '../todo';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

  todoList: Todo[] = [];
  todoListBackup: Todo[] = [];
  doneTodoList: Todo[] = [];
  isLight: boolean = false;

  constructor(private _dialog: MatDialog, private _snackbar: MatSnackBar) {
  }

  ngOnInit(): void { }

  addTodo(): void {
    const addTaskPopup = this._dialog.open(AddTaskPopupComponent, { disableClose: true });
    addTaskPopup.afterClosed().subscribe(todo => {
      console.log('got the content --> ' + todo.content);
      console.log('got the status --> ' + todo.isDone);
      this.todoList.push(todo);
    });
  }

  editTodo(todo: Todo): void {
    this.todoListBackup = this.todoList;
    const editTaskPopup = this._dialog.open(AddTaskPopupComponent, { data: todo, disableClose: true });
    editTaskPopup.afterClosed().subscribe(etodo => {
      console.log('got the edited content --> ' + etodo.content);
      this.todoList.push(etodo);
      this.todoList = this.todoList.filter(entry => entry != todo);
    });
  }

  deleteTodo(todo: Todo, el: HTMLElement): void {
    // el.style.display = 'none';
    const snackRef = this._snackbar.open('Todo Deleted', 'Undo');
    snackRef._dismissAfter(5000);
    snackRef.onAction().subscribe(() => {
      console.log('undo clicked');
      // el.style.display = 'block';
      this._snackbar.open('feature is limited to pro users 🥰','',{ duration: 1000 });
    });

    if (this.doneTodoList.includes(todo) && todo.isDone == true) {
      this.doneTodoList = this.doneTodoList.filter(entry => entry != todo);
    } else {
      this.todoList = this.todoList.filter(entry => entry != todo);
    }
  }

  todoChecked(todo: Todo): void {
    if (!todo.isDone) {
      this.todoList = this.todoList.filter(entry => entry != todo);
      todo.isDone = !todo.isDone;
      this.doneTodoList.push(todo);
    } else {
      this.doneTodoList = this.doneTodoList.filter(entry => entry != todo);
      todo.isDone = !todo.isDone;
      this.todoList.push(todo);
    }
  }

  toggleTheme() {
    if (document.body.classList.contains("my-light-theme")) {
      document.body.classList.replace("my-light-theme", "theme");
      this.isLight = !this.isLight;
    } else {
      document.body.classList.replace("theme", "my-light-theme");
      this.isLight = !this.isLight;
    }
  }
}
