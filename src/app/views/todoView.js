import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import updateTodo from '../views/updateView';

export default class todoView extends Backbone.View {

  constructor(options) {
    super(options);
    this.listenTo(this.model, 'change', this.render);
  }

  get tagName() { return 'tr'; }

  get template() {
    return _.template([
      '<div id="thisel">',
      '<input type="checkbox" id ="isdone" name="option1" value="a1" <%= done ?  "checked" : "" %> <%= done ?  "class=isChecked"   : "" %> >',
      '<td><span style="background-color: <%= this.getColorForTodo(priority) %>" id="mytodo"><%= todo %></span>',
      '<div id="block-control">',
      '<button class="btn btn-warning" id="edit-button">Изменить</button>',
      '<button class="btn btn-danger" id="delete-button">Удалить</button></div></div></td>'].join(''));
  }

  get events() {
    return {
      'click #edit-button': 'edit',
      'click #isdone': 'done',
      'click #update-button': 'update',
      'click #cancel-button': 'cancel',
      'click #delete-button': 'delete',
    };
  }


  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

  edit() {
    const edit = new updateTodo({ model: this.model });
    this.$('#block-control').remove();
    this.$('#mytodo').html(edit.render().$el);
  }

  done() {
    this.model.set('done', !this.model.get('done'));
    console.log(this.model.get('done'));
  }


  cancel() {
    this.render();
  }

  delete() {
    this.model.destroy();
    this.remove();
  }

  getColorForTodo = (priority) => {
    if (priority === 1) {
      return 'red';
    }
    if (priority === 2) {
      return 'orange';
    }
    return 'green';
  }
}
