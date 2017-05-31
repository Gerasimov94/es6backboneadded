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
      'change #todo__priority': 'updatePriority',
    };
  }

  initialize() {
    this.template = _.template([
      '<div id="block-update">',
      '<input type="text" class="form-control" id="mytodo-update" value=  <%= todo %> >',
      '<select id="todo__priority">',
      '<optgroup label="Приоритет задачи">',
      '<option value="r1" >Высокий : 1 </option>',
      '<option value="r2" selected >Средний : 2 </option>  ',
      '<option value="r3" >Низкий : 3 </option>',
      '</optgroup></select>',
      '<button class="btn btn-success" id="update-button">Обновить</button>',
      '<button class="btn btn-danger" id="cancel-button">Отмена</button></td>',
      '</div>',
    ].join(''));

    this.listenTo(this, 'destroy', this.remove);
    this.listenTo(this, 'change', this.render);
    this.listenTo(this.model, 'change', this.render);
  }

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

  update() {
    this.model.set('todo', $('#mytodo-update').val());
  }

  updatePriority(event) {
    const id = event.target.value;
    switch (id) {
      case 'r1':
        this.model.set('priority', 1);
        console.log(this.model.get('priority'));
        console.log(this.model);
        break;
      case 'r2':
        this.model.set('priority', 2);
        console.log(this.model.get('priority'));
        console.log(this.model);
        break;
      case 'r3':
        this.model.set('priority', 3);
        console.log(this.model.get('priority'));
        console.log(this.model);
        break;
      default:
        console.log('мимо');
    }
  }


}
