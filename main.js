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

    // 多桌面下尽量在所有桌面可见（在某些系统/版本下生效）
    try {
        win.setVisibleOnAllWorkspaces(true);
    } catch (e) {
        // 某些平台可能不支持，不影响正常使用
    }

    win.loadFile('index.html');

    ipcMain.on('close-window', () => {
        win.close();
    });
});
