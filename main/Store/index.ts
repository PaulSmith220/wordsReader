import { nativeTheme } from 'electron';
import Store from './Store';

const store = new Store({
  configName: 'words-data',
  defaults: {
    words: [],
    lastLine: 0,
    voices: ['Allison', 'xMilena'],
    darkMode: nativeTheme.shouldUseDarkColors,
  },
});

export default store;