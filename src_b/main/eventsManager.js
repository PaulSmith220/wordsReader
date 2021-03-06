import { ipcMain } from 'electron';
import getVoices from './voiceList';
import openFileDialog from './openFileDialog';
import parseFile from './parseFiles';
import readWord from './readWord';

const response = function(name, data = null) { return name + '||' + JSON.stringify(data) };


export default function(store, mainWindow) {
    ipcMain.on('asynchronous-message', async function(event, arg) {
        console.log('event recieved: ' + arg);
        const [command, args] = arg.split('||');
        switch(command) {
            case 'getVoicesList': {
                const voices = await getVoices();
                event.reply('asynchronous-reply', response('voicesList', voices));
                break;
            }
            case 'getInitData': {
                event.reply('asynchronous-reply', response('initData', store.data));
                break;
            }
            case 'loadFile': {
                try {
                    const filePath = await openFileDialog();
                    const data = parseFile(filePath, args);
                    store.set('words', data);
                    event.reply('asynchronous-reply', response('wordsUpdated', data));
                }
                catch(e) {
                    console.log('User cancelled file selection', e);
                }
            }
            case 'readWord': {
                const words = JSON.parse(args);
                await readWord(words, store.get('voices'));
                console.log('done');
                event.reply('asynchronous-reply', response('wordPlayed'));
                break;
            }
            case 'readWordOnce': {
                const words = JSON.parse(args);
                await readWord(words, store.get('voices'));
                console.log('done');
                break;
            }
            case 'selectLine': {
                const num = parseInt(args || '0');
                store.set('lastLine', num)
                break;
            }
            case 'setVoices': {
                const voices = JSON.parse(args);
                store.set('voices', voices);
                break;
            }
            default: return;
        }
    });
};