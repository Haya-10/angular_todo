import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todos!: Todo[];
  title ="angular todo"
  salogan="Simplify Your Day: Your Perfect Todo Partner"
  inputTodo:string = "";
  constructor() { }

  ngOnInit(): void {
    this.todos =  [
    
    ]
  }
 
  // Function to toggle the completion status of a todo item
  toggleDone (id:number) {
    this.todos.map((v,i) => {
      if (i==id) v.completed = !v.completed;

      return v;
    })
  }

   // Function to delete a todo item
  deleteTodo (id:number) {
    this.todos = this.todos.filter((v ,i) => i !== id);
  } 
   // Function to toggle editing mode of a todo item
  toggleEdit(todo: Todo) {
    todo.editing = !todo.editing;
  }
  // Function to save edited content of a todo item
  saveEdit(todo: Todo) {
    todo.editing = false;
  }

  // Function to add a new todo item
  addTodo () {
    this.todos.push({
      content:this.inputTodo,
      completed: false,
      editing:false,
    })
    this.inputTodo="";
  }
}

