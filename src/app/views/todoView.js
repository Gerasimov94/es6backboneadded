import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Router from '../routers/router';
import Todo from '../models/todoModel';
import updateTodo from '../views/updateView';
import todosView from '../views/todosView';
import {todos} from '../views/todosView';


export default class todoView extends Backbone.View{

constructor(options){
    super(options)
    this.model = options;

        this.listenTo(this.model, 'change', this.render);
}

get tagName() {return "tr"}

get template() {
     return _.template($('#todos-list-template').html())

     
}

 get events() {
     return{
            'click #edit-button':   'edit',
            'click #update-button': 'update',
            'click #cancel-button': 'cancel',
            'click #delete-button': 'delete'
     }
 }
 

 
    

    render () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

    edit() {
        
        let edit = new updateTodo(this.model)
        this.$('#block-control').remove()
        this.$('#mytodo').html(edit.render().$el);
    }

    cancel() {
		this.render()
	}

    delete () {
        this.model.destroy();
        this.remove();
        
	}


}