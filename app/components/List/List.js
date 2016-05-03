import React, { Component } from 'react'
import Item from './Item'
import styles from './List.scss'

export default class List extends Component {
  render() {
    const { monitors } = this.props

    return (
      <div className={styles.list}>
        {monitors.map(monitor => <Item key={monitor.id} monitor={monitor} />)}
      </div>
    )
  }
}
