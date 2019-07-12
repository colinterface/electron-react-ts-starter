import React from 'react';
import { IpcRenderer, IpcMessageEvent } from 'electron';
const electron = window.require('electron');  // require electron like this in all the files. Don't Use import from 'electron' syntax for importing IpcRender from electron.

let ipcRenderer: IpcRenderer = electron.ipcRenderer;

let dirs: string[] = [];
ipcRenderer.on('response', (event: IpcMessageEvent, args: any) => {
  console.log(args.asdf);
  dirs = args.asdf;
})


const App: React.FC = () => {
  console.log('dirs: ', dirs);
  return (
    <div>
      <React.Fragment>
        {dirs.map(dir => <h1>{dir}</h1>)}
      </React.Fragment>
      <button onClick={e => ipcRenderer.send('channel', { title: 'woo', content: 'yey' })} >
        Click me
      </button>
    </div>
  );
}

export default App;
