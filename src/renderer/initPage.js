const { ipcRenderer } = require('electron');
import setList from './setList';
// import Dialogs from 'dialogs';
import readCurrentWord from './readCurrentWord';

// const dialogs = Dialogs();

export function selectWord(nextNode) {
    if (nextNode) {
        const selectedNode = document.querySelector('.word-item.selected');
        selectedNode.classList.remove('selected');
        nextNode.classList.add('selected');
        scrollToSelected();
        ipcRenderer.send('asynchronous-message', `selectLine||${nextNode.dataset['num']}`);
        return true;
    }
    return false;
}

function scrollToSelected(jump = false) {
    const selectedNode = document.querySelector('.word-item.selected');
    if (selectedNode) {
        const vOffset = selectedNode.offsetTop - parseInt(window.innerHeight / 2);
        window.scrollTo({
            top: vOffset,
            left: 0,
            behavior: jump ? 'instant' : 'smooth'
        });
    }
}

export function selectNext() {
    const selectedNode = document.querySelector('.word-item.selected');
    const num = parseInt(selectedNode.dataset['num'] || '1');
    const nextNode = document.querySelector(`.word-item[data-num="${1 + num}"]`);
    if (selectWord(nextNode)) {
        readCurrentWord();
    }
}

export default function ({ words = [], lastLine = 0, }) {
    setList(words, lastLine);
    scrollToSelected(true);

    setTimeout(function() {
        document.querySelector('.app-container').classList.remove('loading');
    }, 10);

    document.getElementById('loadFile').addEventListener('click', function() {
        // dialogs.prompt('What is your languages delimiter?', ' - ', function(value) {
        //     if (value) {
            const value=' - ';
                ipcRenderer.send('asynchronous-message', `loadFile||${value}`);
        //     } else {
        //         console.log('user cancelled');
        //     }
        // });

    });

    document.getElementById('lines').addEventListener('click', function(e) {
        if (e.target.classList.contains('word-item')) {
            selectWord(e.target);
            readCurrentWord();
        }
    });

    document.getElementById('next').addEventListener('click', function() {
        selectNext();
    });
};

