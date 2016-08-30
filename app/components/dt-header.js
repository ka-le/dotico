import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
  facebookUrl: ENV.SOCIAL.FACEBOOK,
  twitterUrl: ENV.SOCIAL.TWITTER
});
