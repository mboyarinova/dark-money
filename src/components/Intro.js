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
            onKeyPress={() => this.props.back("cases")}
            tabIndex="0"
          >
            &#10094; <br /> Cases
          </div>
          <div
            className="next"
            onClick={() => this.props.action("fact-sheet")}
            onKeyPress={() => this.props.action("fact-sheet")}
            tabIndex="0"
          >
            &#10095; <br/> Fact Sheet
          </div>
        </div>
      </div>
    )
  }
}

export default Intro
