import { Component } from '@angular/core';
import { ItemSliding, Item } from 'ionic-angular';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';
import { Todo } from '../../app/todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ TodoServiceProvider ]
})
export class HomePage {

  public todos: Todo[];

  constructor(public todoService: TodoServiceProvider) {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.load()
        .subscribe(data => {
          this.todos = data;
        })

  }
}
