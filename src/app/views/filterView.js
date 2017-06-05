import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Filter from '../models/filterModel';
import todosCollection from '../collections/todosCollection.js';
import todosView from '../views/todosView';

export default class filterView extends Backbone.View {

  constructor(options) {
    super(options);
    this.listenTo(this.collection, 'add', this.search);
  }

  get events() {
    return {
      'keyup #filter': 'search',
      'click #clear__filter': 'dropFilter',
      'change #priority__filter': 'filterPriority',
    };
  }

  get template() {
    return _.template([
      '<input type="search" id="filter" placeholder="Введите текст для поиска...">',
      '<select id="priority__filter"> ',
      '<optgroup> label="Фильтр по приоритету"',
      '<option selected>Все</option>',
      '<option value="r1" >Высокий : 1 </option>',
      '<option value="r2" >Средний : 2 </option>  ',
      '<option value="r3" >Низкий : 3 </option>',
      '</optgroup></select>',
      '</div>',
    ].join(''));

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
  }
  else{
    this.model.set('filter', '');
  }
  }

   filterPriority(event) {
    const id = event.target.value;
    switch (id) {
      case 'r1':
        this.model.set('filter_priority', 1);
        break;
      case 'r2':
        this.model.set('filter_priority', 2);
        break;
      case 'r3':
        this.model.set('filter_priority', 3);
        break;
      default:
        this.model.set('filter_priority', 0);
        console.log('вся коллекция')
    }
  }


}
