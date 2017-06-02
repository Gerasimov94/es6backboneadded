import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Router from '../routers/router';
import todosView from '../views/todosView';


class Application {

  constructor() {
    new Router();
    Backbone.history.start();
  }

}

$(() => {
  new Application();
});

