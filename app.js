const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let url
if (process.env.NODE_ENV === 'DEV') {
    url = 'http://localhost:8080/'
} else {
    url = `file://${process.cwd()}/dist/index.html`
}

app.on('ready', () => {
    let window = new BrowserWindow({width: 600, height: 600, minWidth: 400, maxWidth: 800, titleBarStyle: 'hiddenInset'})
    window.loadURL(url)
})