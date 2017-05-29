import $ from 'jquery';
import { View } from 'backbone';
import _ from 'underscore';
import todosCollection from '../collections/todosCollection';
import Todo from '../models/todoModel';
import todoView from '../views/todoView';
import TodosView from '../views/todosView';


import {todos} from '../views/todosView';


export default class appView extends View {



  get tagName () { "li" }

   get events() {
        return {
            'click #new-todo':  'addhandler',
            'click #back':      'clear',
            
            
        }
    }
  

initialize () {
    this.template = $('#todos-template').html();
    this.listenTo(this.model, 'add', this.render);

    }

    render () {
        this.$el.html(_.template(this.template));
        return this;
    }

  edit() {
    const todo = this.$('#todo-textarea').html();
    
  }

  clear() {
    this.remove();
  }


    addhandler() {
      
      var newtodo = new Todo({todo: $('#todo-textarea').val()})
     // console.log(newtodo.toJSON())
      todos.add(newtodo)
 
    }
}



