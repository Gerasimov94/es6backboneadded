import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Filter from '../models/filterModel';
import todosCollection from '../collections/todosCollection.js';

export default class filterView extends Backbone.View {

  constructor(options) {
    super(options);
    this.model = new Filter();
    this.listenTo(this.collection, 'add', console.log(this.collection));
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.model, 'change', this.search);
    
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

  search(event) {
        const filtered = new todosCollection();
        this.model.set('filter', $('#filter').val());
        console.log(`Значение фильтра,${this.model.get('filter')}`);
        if (this.model.get('filter') !== '') {
        this.collection.forEach((model) => {
          if (model.get('todo').includes(this.model.get('filter'))) {
            filtered.add(model);
          }
            this.collection.reset(filtered.models)
        }); 
  }
  
}


  dropFilter() {
    this.model.set('filter', '');
    console.log(this.model.get('filter'))
  }


}
