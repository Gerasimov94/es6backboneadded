import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import appView from '../views/appView.js';
import startView from '../views/startView.js';
import todosCollection from '../collections/todosCollection.js'; 
import Filter from '../models/filterModel';

class Router extends Backbone.Router {

  constructor() {
    super();

    this.routes = {
      '': 'start',
      list: 'list',
    };
    this.collection = new todosCollection();
    this.filterModel= new Filter();
    this._bindRoutes();
  }


  start() {
    console.log('Route#start was called!');
    const view = new startView();
    $('.container').html(view.render().$el);
  }


  list() {
    console.log('Route#list was called!');
    const view = new appView({collection: this.collection,model : this.filterModel});
    $('.container').html(view.render().$el);
  }


}
export default Router;
