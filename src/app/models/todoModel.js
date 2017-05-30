import $ from 'jquery';
import { Model } from 'backbone';
import _ from 'underscore';


export default class Todo extends Model {

  defaults() {
    return {
      todo: '',
      completed: false,
    };
  }

  toggle() {
    this.save({
      completed: !this.get('completed'),
    });
  }

}

