import { onLocationSuccess } from './location';
import { setText } from './screens';
import decimalToSexagesimal from 'geolib/es/decimalToSexagesimal';

onLocationSuccess(function(position) {
  setText(
    'latitude-data',
    formatCoordinates(position.coords.latitude, 'N', 'S'),
  );
  setText(
    'longitude-data',
    formatCoordinates(position.coords.longitude, 'E', 'W'),
  );
});

function formatCoordinates(dec, pos, neg) {
  return `${decimalToSexagesimal(dec)} ${dec >= 0 ? pos : neg}`;
}
