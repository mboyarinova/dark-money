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
            onKeyPress={() => this.props.action("intro")}
            tabIndex="0"
          >
            &#10094; <br/> Introduction
          </div>
          <div
            className="next"
            onClick={() => this.props.action("voter-materials")}
            onKeyPress={() => this.props.action("voter-materials")}
            tabIndex="0"
          >
            &#10095; <br/> Voter Materials
          </div>
      </div>
      </div>
    )
  }
}

export default FactSheet
