import React, { Component } from 'react'
import Popup from './Popup'

class VoterMaterials extends Component {

  render() {
    return (
      <div className="page" id="voter-materials">
        <h1 style={{marginTop:"4%"}}>Voter Materials</h1>
        <div className="main-body">
          {this.props.text}
          <div
            className="prev"
            onClick={() => this.props.action("fact-sheet")}
          >
            &#10094;
            <div className="label">Fact Sheet</div>
          </div>
          <div
            className="next"
            onClick={() => this.props.action("pre-solution")}
          >
            &#10095;
          </div>
        </div>

        <Popup />

      </div>
    )
  }
}

export default VoterMaterials
