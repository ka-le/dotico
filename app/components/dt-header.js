import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
  classNames: ['dt-header'],
  navigationOptions: [
    {
      class: 'home',
      route: 'index',
      title: 'Home'
    },
    {
      class: 'posiciones',
      route: 'index',
      title: 'Posiciones'
    },
    {
      class: 'reglamento',
      route: 'index',
      title: 'Reglamento'
    },
    {
      class: 'acerca',
      route: 'index',
      title: 'Acerca de'
    }
  ],
  socialNavOptions: [
    {
      class: 'facebook',
      icon: 'facebook',
      url: ENV.SOCIAL.FACEBOOK
    },
    {
      class: 'twitter',
      icon: 'twitter',
      url: ENV.SOCIAL.TWITTER
    }
  ]
});
