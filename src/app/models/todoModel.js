import $ from 'jquery';
import { Model } from 'backbone';
import _ from 'underscore';


export default class Todo extends Model {

  defaults() {
    return {
      priority: 2,
      todo: '',
      done: false,
    };
  }

}

