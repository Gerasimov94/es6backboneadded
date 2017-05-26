import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import  appView  from '../views/appView.js';
import  Todo  from '../models/todoModel.js';
import  startView  from '../views/startView.js';


class Router extends Backbone.Router {
    
    constructor () {

    super();

        this.routes = {
            '': 'start',
            'list': 'list'
        };
        
        this._bindRoutes();
       
    }
    

  start() {
    console.log('Route#start was called!');
    const view = new startView();
    $('#start').html(view.render().$el);
    

  }


  list() {
    console.log('Route#list was called!');
    let view = new appView();
    $('#todolist').html(view.render().$el);
  }


}
export default Router;
