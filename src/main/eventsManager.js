const { ipcMain } = require('electron');
const getVoices = require('./voiceList');
const openFileDialog = require('./openFileDialog');
const parseFile = require('./parseFiles');
const readWord = require('./readWord');

const response = (name, data = null) => name + '||' + JSON.stringify(data);


module.exports = function(store, mainWindow) {
    ipcMain.on('asynchronous-message', async (event, arg) => {
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
                await readWord(words);
                event.reply('asynchronous-reply', response('wordPlayed'));
                break;
            }
            case 'selectLine': {
                const num = parseInt(args || '0');
                store.set('lastLine', num)
                break;
            }
            default: return;
        }
    });
};