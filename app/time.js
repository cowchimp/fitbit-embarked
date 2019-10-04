import clock from 'clock';
import { setText } from './screens';
import { onLocationSuccess } from './location';

clock.granularity = 'minutes';

clock.ontick = function(evt) {
  setText('watch-time-data', formatTime(evt.date));
};

onLocationSuccess(function(position) {
  setText('gps-time-data', formatTime(new Date(position.timestamp), true));
});

function formatTime(date, showSeconds = false) {
  const parts = [
    date
      .getHours()
      .toString()
      .padStart(2, '0'),
    date
      .getMinutes()
      .toString()
      .padStart(2, '0'),
  ];
  if (showSeconds) {
    parts.push(
      date
        .getSeconds()
        .toString()
        .padStart(2, '0'),
    );
  }
  return parts.join(':');
}
