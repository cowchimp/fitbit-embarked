import document from 'document';
import { monoDigits } from './monoDigits';

const screens = document.getElementsByClassName('screen');
const spinner = document.getElementById('spinner');

export function setActiveScreen(name) {
  spinner.state = name === 'loading' ? 'enabled' : 'disabled';

  const activeScreen = screens.filter(x => x.id === name)[0];
  activeScreen.style.display = 'inline';

  const inactiveScreens = screens.filter(x => x.id !== name);
  inactiveScreens.forEach(x => {
    x.style.display = 'none';
  });
}

export function setText(elementId, text) {
  document.getElementById(elementId).text = monoDigits(text);
}
