const { app, BrowserWindow } = require('electron')
const cp = require("child_process");
const util = require("util");
const fs = require("fs");
const path = require("path")
const execFileSync = util.promisify(cp.execFile);

function findPython() {
  const possibilities = [
    // In packaged app
    
    path.join(process.resourcesPath, "python", "python.exe"),
    // In development
    path.join(__dirname, "python", "python.exe"),
  ];
  for (const path of possibilities) {
    if (fs.existsSync(path)) {
      return path;
    }
  }
  console.log("Could not find python3, checked", possibilities);
  app.quit();
}

const createWindow = () => {
    findPython()
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