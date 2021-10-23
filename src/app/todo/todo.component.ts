import { Component, OnInit, Output, } from '@angular/core';import { NgForm } from '@angular/forms';

;
import { DataService } from './shared/data.service';
import { Todo } from './shared/todo.model';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
 
})
export class TodoComponent implements OnInit {
  todos!: any[];
  name='';
  editable="false";
  editableIndex='';
  addButton="Add"




Delete(index: any): void{
  this.todos.splice(index,1);
}

Edit(item: string,index: any){
  this.editable="true";
  this.addButton="UPDATE";
  this.name=item;
  this.editableIndex=index;
}



  constructor(private dataService :DataService ){}

  ngOnInit(): void {

    this.todos= this.dataService.getAllTodos()
 }


onFormSubmit(form:NgForm){
  if(form.invalid) return alert("Please enter your ToDo List")

  this.dataService.addTodo(new Todo(form.value.text))

  form.reset()




}
}


