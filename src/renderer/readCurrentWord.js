const { ipcRenderer } = require('electron');

export default function (getReversed, suppressCallback = false) {
    const node = document.querySelector('.word-item.selected');
    if (node) {
        const original = node.dataset['orig'];
        const translation = node.dataset['trans'];
        const reversed = getReversed();
        if (suppressCallback) {
            ipcRenderer.send('asynchronous-message', `readWordOnce||["${original}", "${translation}", ${reversed}]`);
        } else {
            ipcRenderer.send('asynchronous-message', `readWord||["${original}", "${translation}", ${reversed}]`);
        }
    }
};