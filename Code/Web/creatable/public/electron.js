const electron = require('electron');
const path = require('path');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: { nodeIntegration: true, contextIsolation: false },
    });
    console.log(__dirname)
    mainWindow.loadFile(path.join(__dirname, '../build/index.html'))
}

app.on('ready', createWindow);