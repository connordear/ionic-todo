import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Todo } from '../../app/todo.js';
/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoServiceProvider {
  todosUrl = "api/todos";

  constructor(public http: HttpClient) {
    console.log('Hello TodoServiceProvider Provider');
  }

  load(): Observable<Todo[]> {
    return this.http.get<Todo>(this.todosUrl)
                    .catch(err => this.handleError(err));

  }

  handleError(error) {
    console.error(error);
    return Observable.throw( error || 'Server error');
  }

}
