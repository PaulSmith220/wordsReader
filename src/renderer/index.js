const { ipcRenderer } = require('electron');
const path = require("path");
const pageActions = require(path.resolve('src/renderer/initPage'));
const setList = require(path.resolve('src/renderer/setList'));

const initPage = pageActions.default;

const parseCommand = arg => {
    const [command, data] = arg.split('||');
    return [
        command,
        JSON.parse(data),
    ];
}

let config = {
    words: [],
    lastLine: 0,
};

let isPlaying = false;

const mainCss = document.createElement('link');
mainCss.rel = 'stylesheet';
mainCss.href = path.resolve(__dirname, 'css', 'main.css');
document.head.appendChild(mainCss);

const fontCss = document.createElement('link');
fontCss.rel = 'stylesheet';
fontCss.href = path.resolve(__dirname, 'assets', 'css', 'all.css');
document.head.appendChild(fontCss);


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('play').addEventListener('click', function() {
        isPlaying = !isPlaying;
        const i = this.querySelector('i');
        i.classList.remove('fa-play-circle');
        i.classList.remove('fa-pause-circle');
        i.classList.add(!isPlaying ? 'fa-play-circle' : 'fa-pause-circle');
        isPlaying && pageActions.readCurrentWord();
    });


    ipcRenderer.on('asynchronous-reply', (event, arg) => {
        const [command, data] = parseCommand(arg);
        switch(command) {
            case 'initData': {
                console.log('init data received', data);
                config = data;
                initPage(data);
                break;
            }
            case 'wordsUpdated': {
                setList(data, config.lastLine);
                break;
            }
            case 'wordPlayed': {
                if (isPlaying) {
                    setTimeout(() => {
                        pageActions.selectNext();
                    }, 1000);
                }
                break;
            }
            default: return;
        }
      });
    ipcRenderer.send('asynchronous-message', 'getInitData');
});