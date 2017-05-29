import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import TodosCollection from '../collections/todosCollection';
import todoView from '../views/todoView.js';


export const todos = new TodosCollection();

export default class TodosView extends Backbone.View {

  constructor() {
    super();
    this.model = todos;
    this.$el = $('.here');
    this.template = $('#todos-list-template').html();

    this.listenTo(this.model, 'add', this.render);
    this.listenTo(this.model, 'reset', this.render);
  }

  render() {
    this.$el.html('');
    _.each(this.model.toArray(), (todo) => {
      this.$el.append((new todoView(todo)).render().$el);

      return this;
    });
  }

}

