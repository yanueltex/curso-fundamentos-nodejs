const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', createWindow);

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        heihgt: 600,
    });

    mainWindow.loadFile('index.html');
}