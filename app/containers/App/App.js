import React, { Component, PropTypes } from 'react';
import Title from 'components/Title/Title'
import styles from './App.scss'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <Title />
        <div className={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
