import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';


export default class updateView extends Backbone.View {

  constructor(options) {
    super(options);
    this.el = this.$('.mytodo').html();
  }

  get events() {
    return {
      'click #update-button': 'update',
      'change #todo__priority': 'updatePriority',
    };
  }

  get template() {
    return _.template([
      '<div id="block-update">',
      '<input  class="form-control" id="mytodo-update" value=  "<%= todo %> ">',
      '<select id="todo__priority">',
      '<option disabled selected >Выберите приоритет</option>',
      '<option value="r1" >Высокий : 1 </option>',
      '<option value="r2" >Средний : 2 </option>  ',
      '<option value="r3" >Низкий : 3 </option>',
      '</optgroup></select>',
      '<button class="btn btn-success" id="update-button">Обновить</button>',
      '<button class="btn btn-danger" id="cancel-button">Отмена</button></td>',
      '</div>',
    ].join(''))
;
  }

  initialize() {
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
        break;
      case 'r2':
        this.model.set('priority', 2);
        break;
      case 'r3':
        this.model.set('priority', 3);
        break;
      default:
        console.log('мимо');
    }
  }


}
