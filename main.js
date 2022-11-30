const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.setMenu(null);
    win.loadFile('./application/index.html');

}

app.whenReady().then(() => {
    app.commandLine.appendSwitch('no-sandbox');
    createWindow();
})