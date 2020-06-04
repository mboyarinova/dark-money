import React, { Component } from 'react'

class FactSheet extends Component {

  render() {
    return (
      <div className="page" id="fact-sheet">
        <h1 className="page-title">Fact Sheet</h1>
        <div className="main-body">
          {this.props.text}
          <div
            className="prev"
            onClick={() => this.props.action("intro")}
          >
            &#10094;
            <div className="label">Introduction</div>
          </div>
          <div
            className="next"
            onClick={() => this.props.action("voter-materials")}
          >
            &#10095;
            <div className="label">Voter Materials</div>
          </div>
      </div>
      </div>
    )
  }
}

export default FactSheet
