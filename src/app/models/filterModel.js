import $ from 'jquery';
import { Model } from 'backbone';
import _ from 'underscore';


export default class Filter extends Model {

  defaults() {
    return {
      filter: '',
      filter_priority: 0,
    };
  }

}

