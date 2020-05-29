import React, { Component } from 'react'

class Intro extends Component {

  render() {
    return (
      <div className="page" id="intro">
        <h1 className="page-title">Introduction</h1>
        <div className="main-body">
          {this.props.text}
          <a
            className="prev"
            onClick={() => this.props.action("cases")}
          >
            &#10094;
            <div className="label">Cases</div>
          </a>
          <a
            className="next"
            onClick={() => this.props.action("fact-sheet")}
          >
            &#10095;
            <div className="label">Fact Sheet</div>
          </a>
        </div>
      </div>
    )
  }
}

export default Intro
