const { app, BrowserWindow, ipcMain, screen } = require('electron');
let win;

app.on('ready', () => {
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width } = primaryDisplay.workAreaSize;

    win = new BrowserWindow({
        width: 300,
        height: 290, // 原始高度 290
        x: width - 320,
        y: 20,
        frame: false,
        alwaysOnTop: true,
        transparent: false,
        resizable: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('index.html');

    ipcMain.on('close-window', () => {
        win.close();
    });
});
