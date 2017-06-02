import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import  appView  from '../views/appView.js';
import  Todo  from '../models/todoModel.js';

export default class TodosCollection extends Backbone.Collection{
constructor(options){
    super(options);
    this.comparator = 'priority'
    this.listenTo(this,'change', () => this.sort())
}

}


