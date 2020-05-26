import url from "url";
import { app, BrowserWindow } from 'electron';
import path from 'path';
import initEvents from './src/main/eventsManager';
import Store from './src/main/store';

const store = new Store({
  configName: 'words-data',
  defaults: {
    words: [],
    lastLine: 0,
  },
});

function createWindow () {
  // Создаем окно браузера.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  initEvents(store, win);
  // and load the index.html of the app.
  win.loadFile('index.html'
    // url.format({
    //   pathname: 'index.html',
    //   protocol: "file:",
    //   slashes: true,
    // })
  );

  // Отображаем средства разработчика.
  // win.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Некоторые API могут использоваться только после возникновения этого события.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  app.quit();
})

app.on('activate', function() {
   // На MacOS обычно пересоздают окно в приложении,
   // после того, как на иконку в доке нажали и других открытых окон нету.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
});

