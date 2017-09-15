import { init } from 'protractor/built/launcher';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  currentItem: any;
  newTodo: string;
  todos: any;
  counter: any;
  constructor() {
    this.currentItem = (localStorage.getItem('currentItem') !== null) ? JSON.parse(localStorage.getItem('currentItem')) : [  ];
    this.todos = this.currentItem;
}

addTodo() {

  this.todos.push({
      newTodo: this.newTodo,
      done: false
  });
  this.newTodo = '';
  localStorage.setItem('currentItem', JSON.stringify(this.todos));

}

deleteTodo(task) {
   const arr = JSON.parse(localStorage.getItem('currentItem'));
   this.currentItem.splice(task , 1);
   localStorage.setItem('currentItem', JSON.stringify(this.currentItem));
}


checkdone(event: any, i: any) {

  const currentLocalStorage = JSON.parse(localStorage.getItem('currentItem'));
    // Change value
     currentLocalStorage[i].done = event.target.checked;
    // Save the new item with updated value
    localStorage.setItem('currentItem', JSON.stringify(currentLocalStorage));



 }
 remains() {
  this.counter = 0;
  for (let j = 0; j < this.currentItem.length; j++) {
    if ( this.currentItem[j].done === false ) {
      this.counter ++;
    }
 }
 return this.counter;
 }

 clearCompleted () {
  const valuesArr = [];
  for (let n = 0; n < this.currentItem.length; n++) {
    if ( this.currentItem[n].done === true ) {
      valuesArr.push(n);
    }
       }
     console.log(valuesArr);
     for (let i = valuesArr.length - 1 ; i >= 0; i--) {
      this.currentItem.splice(valuesArr[i], 1);
    }
       localStorage.setItem('currentItem', JSON.stringify(this.currentItem));
     }

     clearAll() {
      this.currentItem = [];
      localStorage.setItem('currentItem', JSON.stringify(this.currentItem));
      location.reload();
     }

}
