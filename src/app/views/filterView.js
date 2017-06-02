import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Filter from '../models/filterModel';
import todosCollection from '../collections/todosCollection.js';
import todosView from '../views/todosView';

export default class filterView extends Backbone.View {

  constructor(options) {
    super(options);
    this.model = new Filter();
    this.listenTo(this.collection, 'add', this.search);
  }

  get events() {
    return {
      'keyup #filter': 'search',
      'click #clear__filter': 'dropFilter',
    };
  }

  get template() {
    return _.template('<input type="search" id="filter" placeholder="Введите текст для поиска..."> <button class="btn btn-danger" id="clear__filter">Очистить фильтр</button>');
  }

  render() {
    this.$el.html(this.template);
    return this;
  }

  /*search(event) {
    const filtered = new todosCollection();
    this.model.set('filter', $('#filter').val());
    console.log(`Значение фильтра,${this.model.get('filter')}`);
    if (this.model.get('filter') !== '') {
      this.collection.forEach((model) => {
        if (model.get('todo').includes(this.model.get('filter'))) {
          model.set('isfiltered', true);
          console.log(model.toJSON());
          filtered.add(model);
        } else {
          model.set('isfiltered', false);
          console.log(model.toJSON());
        }
      });
      console.log(filtered);
      if (filtered.length > 0) {
        var tempView = new todosView({ collection: filtered, el: this.$('#todos-list') }).render();
      } else {
        new todosView({ collection: this.collection, el: this.$('#todos-list') }).render();
      }
    }
  }*/

  search(event){
    if ($('#filter').val() !== ''){
    this.model.set('filter', $('#filter').val());
    this.collection.trigger('filter', this.model.get('filter'))
  }
  else{
    this.model.set('filter', '');
    this.collection.trigger('filter', this.model.get('filter'))
  }
    
    console.log('filtered')
  }


  dropFilter() {
    this.model.set('filter', '');
    console.log(this.model.get('filter'));
  }


}
