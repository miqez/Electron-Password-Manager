const { contextBridge, ipcRenderer } = require('electron');

const send = [
  'file-upload',
];

const receive = [
  'file-upload-success',
  'file-upload-cancel',
  'file-upload-read-failure',
  'file-upload-dialog-failure',
];

const invoke = [];

contextBridge.exposeInMainWorld('electron', {
  send: (channel, args) => {
    const isIncluded = send.includes(channel);

    if (!isIncluded) return;

    ipcRenderer.send(channel, args);
  },
  receive: (channel, listener) => {
    const isIncluded = receive.includes(channel);

    if (!isIncluded) return;

    ipcRenderer
      .on(channel, (_, ...args) => listener(
        ...args,
      ));
  },
  invoke: (channel, args) => {
    const isIncluded = invoke.includes(channel);

    if (!isIncluded) return;

    return ipcRenderer.invoke(channel, args);
  },
});