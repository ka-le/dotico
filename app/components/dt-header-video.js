import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['dt-header-video'],
  didRender: function () {
    let moveTop = -this.$('video').height() * 20 / 100
    this.$('video').css({
      'top': moveTop + 'px'
    })
    this.$().css({
      'height': (this.$('video').height() + moveTop * 2) + 'px'
    })
  }
})
