import $ from 'jquery';
import { View } from 'backbone';
import _ from 'underscore';
import Todo from '../models/todoModel';
import todosView from '../views/todosView';





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
      '<a id="showdone" >Показать невыполненные</a>',
      '<div id="todos-list"></div></div></div>'].join(''));
  }


  initialize() {
    this.listenTo(this.collection, 'add', this.render);
  }

  render() {
    this.$el.html((this.template));
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
    const newtodo = new Todo({ todo: $('#todo-textarea').val() });
     //console.log(newtodo.toJSON())
    this.collection.add(newtodo);
    console.log(this.collection);
  }
}

