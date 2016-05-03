import React, { Component } from 'react'
import shell from 'shell'
import cx from 'classnames'

function isRunning(status) {
  return status === 'running'
}

export default class List extends Component {
  open = id => event => {
    event.preventDefault()
    shell.openExternal(`http://${id}.dev`)
  }

  render() {
    const { monitors } = this.props
    return (
      <div>
        <table>
          <tbody>
            {monitors.map(monitor => (
              <tr key={monitor.id}>
                <td>
                  <a
                    title={`${monitor.cwd}$ ${monitor.command[2]}`}
                    className={cx('monitor', monitor.status)}
                    href="#"
                    onClick={this.open(monitor.id)}
                  >
                    {monitor.id}<span className="status"> - {monitor.status}</span>
                  </a>
                </td>

                <td>
                  <a className={cx('toggle', isRunning(monitor.status) ? 'on' : 'off')}>
                    <i className={cx('fa', isRunning(monitor.status) ? 'fa-toggle-on' : 'fa-toggle-off')} />
                  </a>
                </td>

                <td>
                  <a title="logs" className="toggle-output">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!monitors.length && (
          <div>
            <p>Welcome, please enjoy your stay!</p>
            <p><em>Use hotel command-line to add servers</em></p>
          </div>
        )}
      </div>
    )
  }
}
