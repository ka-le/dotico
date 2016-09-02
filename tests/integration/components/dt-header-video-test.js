import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('dt-header-video', 'Integration | Component | dt header video', {
  integration: true
})

test('Layout', function (assert) {
  this.render(hbs`{{dt-header-video}}`)
  var $component = this.$()
  var $container = $component.find('.video-container')

  assert.ok(!!$container.length, 'Video container found')
  assert.ok(!!$container.find('video').length, 'Video found')
})
