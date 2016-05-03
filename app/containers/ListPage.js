import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { watchMonitors, start, stop } from '../actions/monitors'
import List from '../components/List'

class ListPage extends Component {
  static propTypes = {
    monitors: PropTypes.array.isRequired,
    watchMonitors: PropTypes.func.isRequired
  }

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
