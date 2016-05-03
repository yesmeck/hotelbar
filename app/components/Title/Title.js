import React, { Component } from 'react'
import styles from './Title.scss'

export default class Title extends Component {
  render() {
    return (
      <div className={styles.title}>
        <div className={styles.arrow}></div>
      </div>
    )
  }
}
