import React, { Component } from 'react'

class Intro extends Component {

  render() {
    return (
      <div className="page" id="intro">
        <h1 className="page-title">Introduction</h1>
        <div className="main-body">
          {this.props.text}
          <div
            className="prev"
            onClick={() => this.props.back("cases")}
          >
            &#10094;
            <div className="label">Cases</div>
          </div>
          <div
            className="next"
            onClick={() => this.props.action("fact-sheet")}
          >
            &#10095;
            <div className="label">Fact Sheet</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro
