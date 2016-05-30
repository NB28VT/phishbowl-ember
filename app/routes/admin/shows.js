import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.findAll('show');
  },

  actions: {
    deleteShow(show) {
      let confirmation = confirm("Are you sure?");

      if (confirmation) {
        show.destroyRecord();
      }
    // Delete show goes here


    }

  }
});
