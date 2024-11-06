const { app, BrowserWindow } = require('electron')
require('dotenv').config()
const createWindow = () => {
    const win = new BrowserWindow({
        resizable: false,
        autoHideMenuBar: true,
        fullscreen: true,
        backgroundColor: "#eeeeee",
        webPreferences: {
            // devTools: false,
        },
        title: process.env.PROJECT_NAME
    })
    win.loadFile("src/index.html")
}


app.whenReady().then(() => {
    createWindow()
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
    })
})