import { remote } from 'electron'
import React, { Component } from 'react'
import shell from 'shell'
import cx from 'classnames'
import { Link } from 'react-router'
import { API_HOST } from '../../constants'
import styles from './List.scss'

const servers = remote.require('hotel/lib/cli/servers')

function isRunning(status) {
  console.debug(status)
  return status === 'running'
}

function start(id) {
  fetch(`${API_HOST}/servers/${id}/start`, { method: 'POST' })
}

function stop(id) {
  fetch(`${API_HOST}/servers/${id}/stop`, { method: 'POST' })
}

export default class Item extends Component {
  open = ({ id }) => event => {
    event.preventDefault()
    shell.openExternal(`http://${id}.dev`)
  }

  toggle = ({ id, status }) => event => {
    event.preventDefault()
    isRunning(status) ? stop(id) : start(id)
  }

  remove = ({ id }) => event => {
    event.preventDefault()
    servers.rm(id)
  }

  render() {
    const { monitor } = this.props

    return (
      <div className={styles.item}>
        <a
          title={`${monitor.cwd}$ ${monitor.command[2]}`}
          className={styles.monitor}
          href="#"
          onClick={this.open(monitor)}
        >
          {monitor.id}<span className={styles.status}> - {monitor.status}</span>
        </a>

        <div className="controller">
          <a
            className={cx(styles.toggle, isRunning(monitor.status) ? styles.on : styles.off)}
            href="#"
            onClick={this.toggle(monitor)}
          >
            <i className={cx('fa', isRunning(monitor.status) ? 'fa-toggle-on' : 'fa-toggle-off')} />
          </a>
          <a
            href="#"
            className={styles.remove}
            onClick={this.remove(monitor)}
          >
            <i className="fa fa-remove" />
          </a>
        </div>
      </div>
    )
  }
}
