import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Router from '../routers/router';
import Todo from '../models/todoModel';

export default class tView extends Backbone.View{

constructor(options){
    super(options)
    this.model = options;
}

get tagName() {return "div"}

get template() {
     return _.template($('#todos-list-template').html())
}

 get events() {
     return{
            'click #start-button': 'showAlert',
            'dblclick label': 'edit',
            'click .destroy': 'clear',
            'keypress .edit': 'updateOnEnter',
            'keydown .edit': 'revertOnEscape',
            'blur .edit': 'close' 
     }
 }
 

    render () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }


}