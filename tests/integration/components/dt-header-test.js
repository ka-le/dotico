import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dt-header', 'Integration | Component | dt header', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{dt-header}}`);

  var $component = this.$();

  assert.ok(!!($component.find('.dt-header').length), 'Header found');

  var $navigation = $component.find('.nav');
  assert.ok(!!$navigation.length, 'Main navigation');
  assert.equal($navigation.find('li').length, 4, 'Only 4 main nav links');
  assert.ok(!!($navigation.find('.home').length), 'Home link');
  assert.ok(!!($navigation.find('.posiciones').length), 'Posiciones link');
  assert.ok(!!($navigation.find('.reglamento').length), 'Reglamento link');
  assert.ok(!!($navigation.find('.acerca').length), 'Acerca de link');

  var $social = $component.find('.social');
  assert.ok(!!$social.length, 'Social navigation');
  assert.equal($social.find('li').length, 2, 'Only 2 social links');
  assert.ok(!!($social.find('.facebook').length), 'Facebook link');
  assert.ok(!!($social.find('.twitter').length), 'Twitter link');
});
