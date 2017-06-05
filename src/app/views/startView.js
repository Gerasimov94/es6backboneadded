import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Router from '../routers/router';


export default class startView extends Backbone.View {

  get events() {
    return {
      'click #start-button': 'start',
    };
  }

  get template() {
    return _.template(['<div class="view">',
      '<h1>To-do-application</h1>',
      '<button class="btn btn-success" id="start-button">Старт</button>'].join(''));
  }

  initialize() {
    this.listenTo(this, 'destroy', this.remove);
  }

  render() {
    this.$el.html(this.template);
    return this;
  }

  start() {
   Backbone.trigger('change_route');  
  }

}
