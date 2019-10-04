import { geolocation } from 'geolocation';

let prevPosition;
let successListeners = [];
let errorListeners = [];

var watchID = geolocation.watchPosition(locationSuccess, locationError, {
  enableHighAccuracy: true,
});

export function onLocationSuccess(locationSuccess) {
  successListeners.push(locationSuccess);
}

export function onLocationError(locationError) {
  errorListeners.push(locationError);
}

function locationSuccess(position) {
  successListeners.forEach(x => x(position, prevPosition));
  prevPosition = position;
}

function locationError(error) {
  errorListeners.forEach(x => x(error));
}
