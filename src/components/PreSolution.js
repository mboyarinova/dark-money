import React, {Component} from 'react'

class PreSolution extends Component {
  render() {
    return (
      <div>
        <h2>Where do you think the funding is coming from?</h2>
        <button
          className="button"
          onClick={() => this.props.action("voter-materials")}
          style={{top: "40%", left: "30%"}}
        >
          Review Materials Again
        </button>
        <button
          className="button"
          onClick={() => this.props.action("solution")}
          style={{top: "40%", right: "30%"}}
        >
          Read Solution
        </button>
      </div>
    )
  }
}

export default PreSolution
