import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import todoView from '../views/todoView.js';

export default class TodosView extends Backbone.View {

  constructor(options) {
    super(options);
    this.listenTo(this.collection, 'add', this.renderItem);
    this.listenTo(this.collection, 'reset', this.render);
  }

  get template() {
    return _.template([
      '<div id="todos-item"></div>'
    ].join(''));
  }

  renderItem = (todo) => {
    this.$('#todos-item').append((new todoView({model: todo})).render().$el);
}

  checkrender = (todo) => {
     
  }


  render() {
    this.$el.html(this.template);
    this.$('#todos-item').html('');
    this.collection.each(this.renderItem);
  
  }

}

