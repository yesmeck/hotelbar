import { app, BrowserWindow, Menu, crashReporter, shell } from 'electron';
import menubar from 'menubar'

let menu;
let template;

crashReporter.start();

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')();
}

const mb = menubar({
  index: `file://${__dirname}/app/app.html`,
  dir: __dirname + '/app',
  height: 300,
  width: 364
})
