import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import * as fs from 'fs';

import store from './Store';
import EventsManager from './EventsManager';

const eventsManager = new EventsManager(store);

let mainWindow: Electron.BrowserWindow | null;

process.on('uncaughtException', function (err) {
  console.log(err);
})

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
  });

  eventsManager.subscribe();

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL(`http://localhost:8000/build`);
  } else {
    mainWindow.loadFile(
      path.join('./build/index.html')

    );
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);
app.allowRendererProcessReuse = true;