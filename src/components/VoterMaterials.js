import React, { Component } from 'react'

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
            onKeyPress={() => this.props.action("fact-sheet")}
            tabIndex="0"
          >
            &#10094; <br/> Fact Sheet
          </div>
          <div
            className="next"
            onClick={() => this.props.action("pre-solution")}
            onKeyPress={() => this.props.action("pre-solution")}
            tabIndex="0"
          >
            &#10095;
          </div>
        </div>
        {this.props.popup}
      </div>
    )
  }
}

export default VoterMaterials
