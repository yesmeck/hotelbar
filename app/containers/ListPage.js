import { remote } from 'electron'
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { watchMonitors, start, stop } from '../actions/monitors'
import List from 'components/List/List'

class ListPage extends Component {
  componentWillMount() {
    this.props.watchMonitors()
  }

  componentDidUpdate() {
    const dom = ReactDOM.findDOMNode(this)
    const bw = remote.getCurrentWindow()
    bw.setSize(250, document.body.clientHeight + 10)
  }

  render() {
    const { monitors } = this.props

    return (
      <List monitors={monitors} />
    )
  }
}

ListPage = connect(
  state => ({
    monitors: state.monitors.data
  }),
  dispatch => bindActionCreators({ watchMonitors }, dispatch)
)(ListPage)

export default ListPage
