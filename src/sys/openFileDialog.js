const { dialog } = require('electron');

const options = {
    title: 'Open a file with words',
    buttonLabel: 'Load',
    filters: [
      { name: 'txt', extensions: ['txt'] }
    ],
    properties: ['openFile'],
    message: 'The text should be in "English word - Russian word" format',
  };

  module.exports = function() {
    return new Promise(async (resolve, reject) => {
        const { cancelled, filePaths } = await dialog.showOpenDialog(null, options);
        if (cancelled || !filePaths.length) {
            reject();
        } else {
            resolve(filePaths[0]);
        }
    });
  }