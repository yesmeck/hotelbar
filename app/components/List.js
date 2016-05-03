import React, { Component } from 'react'
import shell from 'shell'
import cx from 'classnames'
import { Link } from 'react-router'
import { API_HOST } from '../constants'

function isRunning(status) {
  return status === 'running'
}

function start(id) {
  fetch(`${API_HOST}/servers/${id}/start`, { method: 'POST' })
}

function stop(id) {
  fetch(`${API_HOST}/servers/${id}/stop`, { method: 'POST' })
}

export default class List extends Component {
  open = ({ id }) => event => {
    event.preventDefault()
    shell.openExternal(`http://${id}.dev`)
  }

  toggle = ({ id, status }) => event => {
    event.preventDefault()
    isRunning(status) ? stop(id) : start(id)
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
                    onClick={this.open(monitor)}
                  >
                    {monitor.id}<span className="status"> - {monitor.status}</span>
                  </a>
                </td>

                <td>
                  <a
                    className={cx('toggle', isRunning(monitor.status) ? 'on' : 'off')}
                    onClick={this.toggle(monitor)}
                  >
                    <i className={cx('fa', isRunning(monitor.status) ? 'fa-toggle-on' : 'fa-toggle-off')} />
                  </a>
                </td>

                <td>
                  <Link title="logs" className="toggle-output" to={`/output/${monitor.id}`}>
                    <i className="fa fa-angle-right"></i>
                  </Link>
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
