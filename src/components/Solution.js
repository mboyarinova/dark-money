import React, { Component } from 'react'

class Solution extends Component {
  render() {
    return (
      <div className="solution">
        <h1 className="page-title">Solution</h1>
        {this.props.text}
        <button
          className="button"
          onClick={() => this.props.action("voter-materials")}
          style={{top: "80%", left: "25%"}}
        >
          See Materials
        </button>
        <button
          className="button"
          onClick={() => this.props.action("cases")}
          style={{top: "80%", right: "25%"}}
        >
          Play New Game
        </button>
      </div>
    )
  }
}

export default Solution
