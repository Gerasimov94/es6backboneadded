import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

export default class filterView extends Backbone.View {

  constructor(options) {
    super(options);
    this.listenTo(this.model, 'change', this.render);
  }

  get template() {
    return _.template('<input id="filter" placeholder="Введите текст для поиска...">');
  }

  render() {
    this.$el.html(this.template);
    return this;
  }


}
