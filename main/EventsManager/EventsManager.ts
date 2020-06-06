
import { ipcMain, IpcMainEvent } from 'electron';
import getVoices from './voiceList';
import Message from '../../common/Message';
import openFileDialog from './openFileDialog';
import parseFile from './parseFiles';
import readWord from './readWord';
import Store from '../Store/Store';
import { StoreData } from '../types';

type eventsList = {
  [key: string]: (event: IpcMainEvent, message: Message) => any,
};

const reply = (event: IpcMainEvent, message: Message) => event.reply('asynchronous-reply', message.toString());

export default class EventsManager {
  constructor(private store: Store) {}

  private events: eventsList = {
    getVoicesList: async (event) => {
      const voices = await getVoices();
      reply(event, new Message('voicesList', voices));
    },
    getInitData: (event) => {
      reply(event, new Message('initData', this.store.data));
    },
    loadFile: async (event, message) => {
      try {
        const filePath = await openFileDialog();
        const data = parseFile(filePath, message.argument);
        this.store.set('words', data);
        reply(event, new Message('wordsUpdated', data));
      }
      catch (e) {
        console.log('User cancelled file selection', e);
      }
    },
    readWord: async (event, message) => {
      const words = JSON.parse(message.argument);
      await readWord(words, this.store.get('voices') as string[]);
      console.log('Done reading word');
      reply(event, new Message('wordPlayed', {}));
    },
    'readWordOnce': async (event, message) => {
      const words = JSON.parse(message.argument);
      await readWord(words, this.store.get('voices') as string[]);
      console.log('Done reading word once');
    },
    selectLine: (event, message) => {
      const num = parseInt(message.argument || '0');
      this.store.set('lastLine', num);
    },
    setVoices: (event, message) => {
      const voices = JSON.parse(message.argument);
      this.store.set('voices', voices);
    },
  };

  private send(command: string, data: any = null) {
    const message = new Message(command, data);
    ipcMain.emit(message.toString());
  }

  public subscribe() {
    ipcMain.on('asynchronous-message', this.processEvent.bind(this));
  }

  private async processEvent(systemEvent: IpcMainEvent, event: string) {
    const message = Message.FromEvent(event);
    console.log('Event received: ', message.command);
    console.log(message.argument);
    if (!!this.events[message.command]) {
      this.events[message.command](systemEvent, message);
    }
  }
}