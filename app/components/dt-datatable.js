import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['dt-datatable'],
  didInsertElement: function () {
    this._super(...arguments)
    this.$('.datatable').DataTable()
  },

  headers: [],
  objects: []
})
