const { ipcRenderer } = require('electron');

export default function() {
    const node = document.querySelector('.word-item.selected');
    if (node) {
        const original = node.dataset['orig'];
        const translation = node.dataset['trans'];
        ipcRenderer.send('asynchronous-message', `readWord||["${original}", "${translation}"]`);
    }
};