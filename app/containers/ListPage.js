import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { watchMonitors, start, stop } from '../actions/monitors'
import List from '../components/List'

class ListPage extends Component {
  componentWillMount() {
    this.props.watchMonitors()
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
