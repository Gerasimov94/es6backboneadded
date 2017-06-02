import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import todoView from '../views/todoView.js';

export default class TodosView extends Backbone.View {

  constructor(options) {
    super(options);
    this.listenTo(this.collection, 'filter', this.render);
    //this.listenTo(this.collection, 'sort', this.render);
    //this.listenTo(this.collection, 'change', () => this.collection.sort());
    
  }

  get template() {
    return _.template([
      '<div id="todos-item"></div>'
    ].join(''));
  }

  renderItem = (todo) => {
    this.$('#todos-item').append((new todoView({model: todo})).render().$el);
    //console.log(this.collection.pluck('priority').sort())
}

  render(filterValue = '') {
    this.$el.html(this.template);
    this.$('#todos-item').html('');
     _.chain(this.collection.models)
      .filter((model) => (model.get('todo').includes(filterValue)))
      .each(this.renderItem);        
  }

}

