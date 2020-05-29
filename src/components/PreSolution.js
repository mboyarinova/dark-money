import React, {Component} from 'react'

class PreSolution extends Component {
  render() {
    return (
      <div className="page" id="pre-solution">
        <h2 className="middle-title">
          Where do you think the funding is coming from?
        </h2>
        <button
          className="mid-button"
          onClick={() => this.props.action("voter-materials")}
          style={{top: "48%"}}
        >
          Review Materials Again
        </button>
        <button
          className="mid-button"
          onClick={() => this.props.action("options")}
          style={{top: "60%"}}
        >
          See Options
        </button>
        <button
          className="mid-button"
          onClick={() => this.props.action("solution")}
          style={{top: "72%"}}
        >
          Read Solution
        </button>
      </div>
    )
  }
}

export default PreSolution
