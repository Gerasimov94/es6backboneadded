import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';


export default class updatetView extends Backbone.View {

  constructor(options) {
    super(options);
    this.el = this.$('#mytodo').html();
  }

  get events() {
    return {
      'click #update-button': 'update',
    };
  }

  initialize() {
    this.template = _.template([
      '<div id="block-update">',
      '<input type="text" class="form-control" id="mytodo-update" value=  <%= todo %> >',
      '<button class="btn btn-success" id="update-button">Обновить</button>',
      '<button class="btn btn-danger" id="cancel-button">Отмена</button></td>',
      '</div>',
    ].join(''));

    this.listenTo(this, 'destroy', this.remove);
    this.listenTo(this, 'change', this.render());
  }

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

  update() {
    this.model.set('todo', $('#mytodo-update').val());
    this.model.get('todo');
  }


}
