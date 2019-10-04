import { onLocationSuccess } from './location';
import { setText } from './screens';
import getRhumbLineBearing from 'geolib/es/getRhumbLineBearing';
import getCompassDirection from 'geolib/es/getCompassDirection';

onLocationSuccess(function(position, prevPosition) {
  if (prevPosition) {
    const bearingDeg = getRhumbLineBearing(
      prevPosition.coords,
      position.coords,
    );
    const bearingCompass = getCompassDirection(
      prevPosition.coords,
      position.coords,
    );
    setText('bearing-data', formatBearing(bearingDeg, bearingCompass)); // monoDigits('180° NSW');
  }
});

function formatBearing(deg, compass) {
  return `${Math.round(deg)}° ${compass}`;
}
