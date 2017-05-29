import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Router from '../routers/router';


export default class updatetView extends Backbone.View {

constructor(options){
    super(options);

    this.model = options
    this.el = this.$('#mytodo').html()
}

 get events() {
     return{
            'click #update-button': 'update',
     }
 }
 
        
initialize() {
    this.template = $('#update-template').html();

    this.listenTo(this, 'destroy', this.remove);
     this.listenTo(this, 'change', this.render());
    
}

render() {
    this.$el.html(_.template(this.template));
    return this;
}

update(){
    this.model.set('todo', $('#mytodo-update').val());
    var td = this.model.get('todo')
    
    
}

clear(){
   
}

    
}