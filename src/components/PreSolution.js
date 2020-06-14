import React, {Component} from 'react'

class PreSolution extends Component {
  render() {
    return (
      <div className="page" id="pre-solution">
        <h2 style={{position: "absolute", top: "30%",
                    width: "100%", fontSize: "5vh"}}>
          Where do you think the funding is coming from?
        </h2>
        <button
          className="stack-button"
          onClick={() => this.props.action("voter-materials")}
          onKeyPress={() => this.props.action("voter-materials")}
          style={{top: "48%"}}
        >
          Review Materials Again
        </button>
        <button
          className="stack-button"
          onClick={() => this.props.action("solution-choices")}
          onKeyPress={() => this.props.action("solution-choices")}
          style={{top: "62%"}}
        >
          See Possible Solutions
        </button>
        <button
          className="stack-button"
          onClick={() => this.props.action("solution")}
          onKeyPress={() => this.props.action("solution")}
          style={{top: "76%"}}
        >
          Read Solution
        </button>
      </div>
    )
  }
}

export default PreSolution
