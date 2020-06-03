import React, { Component } from 'react'

class SolutionChoices extends Component {
  render() {
    return (
      <div>
        <div className="main-body">
          {this.props.text}
        </div>
        <button
          onClick={() => this.props.action("voter-materials")}
          style={{top: "88%", left: "15%"}}
        >
          Review Materials Again
        </button>
        <button
          onClick={() => this.props.action("solution")}
          style={{top: "88%", right: "15%"}}
        >
          Read Solution
        </button>
      </div>
    )
  }
}

export default SolutionChoices
