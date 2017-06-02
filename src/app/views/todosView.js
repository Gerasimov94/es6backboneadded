import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import todoView from '../views/todoView.js';

export default class TodosView extends Backbone.View {

  constructor(options) {
    super(options);
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.collection, 'sort', this.render);
    //this.listenTo(this.collection, 'change', () => this.collection.sort());
    
  }

  get template() {
    return _.template([
      '<div id="todos-item"></div>'
    ].join(''));
  }

  renderItem = (todo) => {
    this.$('#todos-item').append((new todoView({model: todo})).render().$el);
}

  render() {
/*Условие рендера*/
    this.$el.html(this.template);
    this.$('#todos-item').html('');
     _.chain(this.collection.models)
      .filter((model) => model.get('title').includes(this.model.get('filter')))
      .each(this.renderItem);        
  }

}

