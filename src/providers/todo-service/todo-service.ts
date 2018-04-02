import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  todosUrl = "/api/todos";

  constructor(public http: HttpClient) {
    // console.log('Hello TodoServiceProvider Provider');
  }

  load(): Observable<Todo[]> {
    return this.http.get<Todo>(this.todosUrl)
                    .catch(err => this.handleError(err));

  }

  add(todo: string): Observable<Todo> {
    let body = JSON.stringify({description: todo});
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.todosUrl, body, {headers: headers})
                    .catch(err => this.handleError(err));
  }

  update(todo: Todo) {
    let url = `${this.todosUrl}/${todo._id}`;
    let body = JSON.stringify(todo);
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.put(url, body, {headers: headers})
                    .catch(err => this.handleError(err));
  }

  delete(todo: Todo) {
    let url = `${this.todosUrl}/${todo._id}`;
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.delete(url, {headers: headers})
                    .catch(err => this.handleError(err));
  }

  handleError(error) {
    console.log(error);
    return Observable.throw( error || 'Server error');
  }

}
