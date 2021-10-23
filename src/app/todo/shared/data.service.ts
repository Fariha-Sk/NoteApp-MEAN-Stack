import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[]=[
     new Todo('this is test'),
  ]


  constructor() { }

getAllTodos(){
  return this.todos
}

addTodo(todo:Todo){
  
  this.todos.push(todo)
}








}
