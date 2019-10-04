import './polyfills';
import { display } from 'display';
import { me } from 'appbit';
import { onLocationSuccess, onLocationError } from './location';
import './speed';
import './bearing';
import './coordinates';
import './time';
import './stats';
import { setActiveScreen, setText } from './screens';

display.autoOff = false;
me.appTimeoutEnabled = false;
setActiveScreen('loading');

onLocationSuccess(function(position, prevPosition) {
  if (!prevPosition) {
    setActiveScreen('stats');
  }
});

onLocationError(function(error) {
  setActiveScreen('error');
  setText('error-code', error.code);
  setText('error-message', error.message);
});
