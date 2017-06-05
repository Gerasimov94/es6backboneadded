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
      '<option value="0"selected>Все</option>',
      '<option value="1" >Высокий : 1 </option>',
      '<option value="2" >Средний : 2 </option>  ',
      '<option value="3" >Низкий : 3 </option>',
      '</optgroup></select>',
      '</div>',
    ].join(''));

  }

  render() {
    this.$el.html(this.template);
    return this;
  }
/*this targer value*/ 
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
          this.model.set('filter_priority', id);
    }
  }