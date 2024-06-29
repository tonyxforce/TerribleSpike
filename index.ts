import { BaseWindow, BrowserWindow, app, ipcMain } from "electron";
import { SerialPort } from "serialport";
import path from "path";

app.on("ready", () => {
    var win = new BrowserWindow({
			width: 800,
			height: 600,
			backgroundColor: "#ccc",
			webPreferences: {
					nodeIntegration: false, // to allow require
					contextIsolation: true, // allow use with Electron 12+
					preload: path.join(__dirname, 'preload.js')
			}
	});
    win.loadFile("public/index.html");
    win.title = "GYÁJ TE";
    win.webContents.openDevTools();
    win.show();
});


ipcMain.handle("list", async(a)=>{
	return await SerialPort.list();
})