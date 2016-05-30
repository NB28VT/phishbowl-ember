import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('shows');

  this.route('admin', function() {
    this.route('shows');
    this.route('add-show');
  });
});

export default Router;
