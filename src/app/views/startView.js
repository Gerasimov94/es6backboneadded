import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Router from '../routers/router';


export default class startView extends Backbone.View {

 get events() {
     return{
            'click #start-button': 'showAlert',
         
     }
 }
 
        
initialize() {
    this.template = $('#start-template').html();

    this.listenTo(this, 'destroy', this.remove);
    
}

render() {
    this.$el.html(_.template(this.template));
    return this;
}

showAlert(){
    let hiddenRoute = new Router()
    hiddenRoute.navigate("list",{trigger:true})
    this.remove()
}

clear(){
   
}

    
}