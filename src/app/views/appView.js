import $ from 'jquery';
import { View } from 'backbone';
import _ from 'underscore';
import Todo from '../models/todoModel';
import todosView from '../views/todosView';
import filterView from '../views/filterView';

export default class appView extends View {


  get tagName() { return 'tr'; }

  get events() {
    return {
      'click #new-todo': 'addhandler',
      'click #back': 'clear',

    };
  }

  get template() {
    return _.template([
      '<div id="todolist">',
      '<div class="view">',
      '<textarea class="form-control" id="todo-textarea"></textarea>',
      '<button class="btn btn-danger" id="new-todo">Добавить запись</button>',
      '<a id="back" href="#">Назад,на стартовую страницу</a>',
      '<div id="filter-box"></div>',
      '<div id="todos-list"></div></div></div>'].join(''));
  }


  initialize() {
    this.listenTo(this.collection, 'add', this.render);
  }

  render() {
    this.$el.html((this.template));
    new filterView({el: this.$('#filter-box')}).render();
    new todosView({collection: this.collection, el: this.$('#todos-list')}).render();
    return this;
  }

  edit() {
    const todo = this.$('#todo-textarea').html();
  }

  clear() {
    this.remove();
    this.collection.reset();
  }


  addhandler() {
    if ($('#todo-textarea').val() !== ''){
        const newtodo = new Todo({ todo: $('#todo-textarea').val() });
        this.collection.add(newtodo);
    }
    else{
        alert('Заметка не может быть пустой!')
    }
    
    
  }
}

