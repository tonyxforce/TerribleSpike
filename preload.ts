/** @format */
import { ipcRenderer, contextBridge } from "electron";

window.addEventListener("DOMContentLoaded", () => {});

contextBridge.exposeInMainWorld('electronAPI', {
  list: () => ipcRenderer.invoke('list')
})