import { onLocationSuccess } from './location';
import { setText } from './screens';
import getSpeed from 'geolib/es/getSpeed';

let maxSpeed = 0;

onLocationSuccess(function(position, prevPosition) {
  if (!prevPosition) {
    return;
  }
  const mS = calcSpeed(prevPosition, position); // 8;
  setText('speed-kmh-data', formatNum(mS, 3.6));
  setText('speed-knots-data', formatNum(mS, 1.944));

  if (typeof mS === 'number' && isFinite(mS) && mS > maxSpeed) {
    maxSpeed = mS;
    setText('max-speed-kmh-data', formatNum(mS, 3.6));
    setText('max-speed-knots-data', formatNum(mS, 1.944));
  }
});

function calcSpeed(prev, curr) {
  return getSpeed(
    {
      latitude: prev.coords.latitude,
      longitude: prev.coords.longitude,
      time: prev.timestamp,
    },
    {
      latitude: curr.coords.latitude,
      longitude: curr.coords.longitude,
      time: curr.timestamp,
    },
  );
}

function formatNum(num, multiplier = 1) {
  if (typeof num !== 'number' || !isFinite(num)) {
    return '...';
  }
  return (num * multiplier).toFixed(1).toString();
}
