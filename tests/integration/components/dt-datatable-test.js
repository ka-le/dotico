import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('dt-datatable', 'Integration | Component | dt datatable', {
  integration: true
})

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('headers', [{
    title: 'header1',
    name: 'h1'
  }, {
    title: 'header1',
    name: 'h1'
  }])

  this.set('objects', [{
    h1: 'value1'
  }, {
    h1: 'value2'
  }, {
    h1: 'value3'
  }])

  this.render(hbs`{{dt-datatable headers=headers objects=objects}}`)

  var $component = this.$()

  var $datatable = $component.find('.dt-datatable .datatable')
  assert.ok(!!$datatable.length, 'Found datatable')

  assert.equal($datatable.find('thead th').length, 2, 'Should only show 2 headers')
  assert.equal($datatable.find('tbody tr').length, 3, 'Should only show 3 rows')
})
