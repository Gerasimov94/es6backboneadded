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
      '<input type="checkbox" id="isdone" name="option1" value="a1"',
      '<td><span id="mytodo"><%= todo %></span></td>',
      '<div id="block-control">',
      '<td><button class="btn btn-warning" id="edit-button">Изменить</button>',
      '<button class="btn btn-danger" id="delete-button">Удалить</button></div>'].join(''));
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
    if (this.model.get('done') == false)
    {
      this.model.set('done', true);
      $('#isdone').attr('checked', 'checked');
      console.log(this.model.get('done'));
    }
    else if (this.model.get('done') == true)
    {
      this.model.set('done', false);
      $('#isdone').removeAttr('checked');
      console.log(this.model.get('done'));
    }
  }

  cancel() {
    this.render();
  }

  delete() {
    this.model.destroy();
    this.remove();
  }


}
