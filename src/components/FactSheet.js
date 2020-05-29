import React, { Component } from 'react'

class FactSheet extends Component {

  render() {
    return (
      <div className="page" id="fact-sheet">
        <h1 className="page-title">Fact Sheet</h1>
        <div className="main-body">
          {this.props.text}
          <a
            className="prev"
            onClick={() => this.props.action("intro")}
          >
            &#10094;
            <div className="label">Introduction</div>
          </a>
          <a
            className="next"
            onClick={() => this.props.action("voter-materials")}
          >
            &#10095;
            <div className="label">Voter Materials</div>
          </a>
      </div>
      </div>
    )
  }
}

export default FactSheet
