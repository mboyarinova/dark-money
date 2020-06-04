import React, { Component } from 'react'

class VoterMaterials extends Component {

  render() {
    return (
      <div className="page" id="voter-materials">
        <h1 style={{marginTop:"4%"}}>Voter Materials</h1>
        <div className="main-body">
          {this.props.text}
          <a
            className="prev"
            onClick={() => this.props.action("fact-sheet")}
          >
            &#10094;
            <div className="label">Fact Sheet</div>
          </a>
          <a
            className="next"
            onClick={() => this.props.action("pre-solution")}
          >
            &#10095;
          </a>
        </div>
        {/*<div className="material-popup" style={{display: "none"}}>
          hello
        </div>*/}
      </div>
    )
  }
}

export default VoterMaterials
