import React, { Component } from 'react'
import ansi from 'ansi-html'

export default class Output extends Component {
  render() {
    const { output } = this.props

    return (
      <div className="output">
        {output.map(item => (
          <div key={item._uid}>
            {ansi(item.line)}
          </div>
        ))}
      </div>
    )
  }
}
