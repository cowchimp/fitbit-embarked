import document from 'document';

const transitions = {
  down: 1,
  up: -1,
};

const modes = [
  {
    'watch-time-mode': 'inline',
    'gps-time-mode': 'none',
    'current-speed-mode': 'inline',
    'max-speed-mode': 'none',
  },
  {
    'watch-time-mode': 'none',
    'gps-time-mode': 'inline',
    'current-speed-mode': 'inline',
    'max-speed-mode': 'none',
  },
  {
    'watch-time-mode': 'inline',
    'gps-time-mode': 'none',
    'current-speed-mode': 'none',
    'max-speed-mode': 'inline',
  },
];

let selectedModeIndex = 0;
applyMode();

document.onkeypress = function(e) {
  if (Object.keys(transitions).indexOf(e.key) === -1) {
    return;
  }

  selectedModeIndex = (selectedModeIndex + transitions[e.key]) % modes.length;
  if (selectedModeIndex === -1) {
    selectedModeIndex = modes.length - 1;
  }

  applyMode();
};

function applyMode() {
  for (const [className, display] of Object.entries(modes[selectedModeIndex])) {
    const elements = document.getElementsByClassName(className);
    elements.forEach(x => {
      x.style.display = display;
    });
  }
}
