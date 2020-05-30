const { ipcRenderer } = require('electron');
import setList from './setList';
import readCurrentWord from './readCurrentWord';

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

export function selectNext(getReversed) {
    const selectedNode = document.querySelector('.word-item.selected');
    const num = parseInt(selectedNode.dataset['num'] || '1');
    const nextNode = document.querySelector(`.word-item[data-num="${1 + num}"]`);
    if (selectWord(nextNode)) {
        readCurrentWord(getReversed);
    }
}

export default function ({ words = [], lastLine = 0, voices = ['Allison', 'Milena'] }, getReversed) {
    setList(words, lastLine);
    scrollToSelected(true);

    setTimeout(function() {
        document.querySelector('.app-container').classList.remove('loading');
    }, 10);

    document.getElementById('loadFile').addEventListener('click', async function() {
        const value = '-';
        ipcRenderer.send('asynchronous-message', `loadFile||${value}`);

    });

    document.getElementById('lines').addEventListener('click', function(e) {
        console.log(e.target.parentNode, e.target);
        const node = e.target.classList.contains('word-item') ? e.target : e.target.parentNode;
        if (node.classList.contains('word-item')) {
            console.log(node);
            selectWord(node);
            readCurrentWord(getReversed);
        }
    });

    document.getElementById('next').addEventListener('click', function() {
        selectNext(getReversed);
    });
};

