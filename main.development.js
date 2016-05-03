import { crashReporter } from 'electron';
import menubar from 'menubar'

crashReporter.start();

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')();
}

const mb = menubar({
  index: `file://${__dirname}/app/app.html`,
  dir: __dirname + '/app',
  icon: __dirname + '/app/icons/IconTemplate.png',
  height: 300,
  width: 250,
  transparent: true,
})

// mb.on('after-create-window', () => {
//   mb.window.openDevTools()
// })
