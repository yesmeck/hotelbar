import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { watchOutput } from '../actions/monitors'
import Output from '../components/Output'
import { Link } from 'react-router'

class OutputPage extends Component {
  componentWillMount() {
    this.props.watchOutput(this.props.params.id)
  }

  render() {
    const { output, params: { id } } = this.props

    return (
      <div>
        <Link to="/">{id}</Link>
        <Output output={output} />
      </div>
    )
  }
}

OutputPage = connect(
  state => ({
    output: state.monitors.output
  }),
  dispatch => bindActionCreators({ watchOutput }, dispatch)
)(OutputPage)

export default OutputPage
