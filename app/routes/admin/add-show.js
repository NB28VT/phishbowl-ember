import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.createRecord('show');
  },

  actions: {
    saveShow(newShow) {
      newShow.save().then(() => this.transitionTo('admin.shows')); 
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }    
  }
});
