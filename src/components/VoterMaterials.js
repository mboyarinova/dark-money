import React, { Component } from 'react'

class VoterMaterials extends Component {

  render() {
    return (
      <div className="page" id="voter-materials">
        <h1 className="page-title">Voter Materials</h1>
        <div className="main-body">
          {this.props.text}
          <a
            className="prev"
            onClick={() => this.props.action("fact-sheet")}
          >
            &#10094;
            <div className="hover-label">Fact Sheet</div>
          </a>
          <a
            className="next"
            onClick={() => this.props.action("pre-solution")}
          >
            &#10095;
          </a>
        </div>
      </div>
    )
  }
}

export default VoterMaterials
