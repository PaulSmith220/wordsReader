const { ipcRenderer } = require('electron');

export default function(getReversed) {
    const node = document.querySelector('.word-item.selected');
    if (node) {
        const original = node.dataset['orig'];
        const translation = node.dataset['trans'];
        const reversed = getReversed();
        ipcRenderer.send('asynchronous-message', `readWord||["${original}", "${translation}", ${reversed}]`);
    }
};