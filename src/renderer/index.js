const { ipcRenderer } = require('electron');
import pageActions, { selectNext } from './initPage';
import readCurrentWord from './readCurrentWord';
import setVoicesList from './setVoicesList';
import setList from './setList';
const path = require("path");
const initPage = pageActions;

import './css/main.css';
import './assets/css/all.css';

const parseCommand = arg => {
    const [command, data] = arg.split('||');
    return [
        command,
        JSON.parse(data),
    ];
}

let isPlaying = false;
let isReversed = false;
let voicesList = [];

const getReversed = () => isReversed;

const mainCss = document.createElement('link');
mainCss.rel = 'stylesheet';
mainCss.href = path.resolve(__dirname, 'css', 'main.css');
document.head.appendChild(mainCss);

const fontCss = document.createElement('link');
fontCss.rel = 'stylesheet';
fontCss.href = path.resolve(__dirname, 'assets', 'css', 'all.css');
document.head.appendChild(fontCss);


document.addEventListener("DOMContentLoaded", function() {
    let config = {
        words: [],
        lastLine: 0,
        voices: ['Allison', 'Milena'],
    };

    document.getElementById('play').addEventListener('click', function() {
        console.log('play btn clicked');
        isPlaying = !isPlaying;
        const i = this.querySelector('i');
        i.classList.remove('fa-play-circle');
        i.classList.remove('fa-pause-circle');
        i.classList.add(!isPlaying ? 'fa-play-circle' : 'fa-pause-circle');
        isPlaying && readCurrentWord(getReversed);
    });

    document.getElementById('reverse').addEventListener('click', function() {
        console.log('reversing');
        isReversed = !isReversed;
        document.getElementById('lines').classList.toggle('reversed', isReversed);
        document.getElementById('dirArrow').classList.toggle('reversed', isReversed);  
    });

    const voiceBox1 = document.getElementById('voice1');
    const voiceBox2 = document.getElementById('voice2');
    function changeVoice() {
        const voices = JSON.stringify([voiceBox1.value, voiceBox2.value]);
        ipcRenderer.send('asynchronous-message', `setVoices||${voices}`);
    }
    voiceBox1.addEventListener('change', changeVoice);
    voiceBox2.addEventListener('change', changeVoice);


    ipcRenderer.on('asynchronous-reply', function(event, arg) {
        const [command, data] = parseCommand(arg);
        switch(command) {
            case 'initData': {
                console.log('init data received', data);
                config = data;
                initPage(data, getReversed);
                break;
            }
            case 'wordsUpdated': {
                setList(data, config.lastLine);
                break;
            }
            case 'wordPlayed': {
                if (isPlaying) {
                    setTimeout(() => selectNext(getReversed), 1000);
                }
                break;
            }
            case 'voicesList': {
                voicesList = data;
                setVoicesList(voicesList, config.voices);
                break;
            }
            default: return;
        }
      });
    ipcRenderer.send('asynchronous-message', 'getInitData');
    ipcRenderer.send('asynchronous-message', 'getVoicesList');
});