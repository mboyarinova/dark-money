import React, { Component } from 'react'

class Intro extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rightHover: false,
      leftHover: false
    }
  }

  handleRightHover = () => {
    this.setState({
      rightHover: !this.state.rightHover
    })
  }

  handleLeftHover = () => {
    this.setState({
      leftHover: !this.state.leftHover
    })
  }

  render() {
    return (
      <div className="intro">
        <h1 className="page-title">Introduction</h1>
        {this.props.text}
        <a
          className="prev"
          onMouseEnter={this.handleLeftHover}
          onMouseLeave={this.handleLeftHover}
          onClick={() => this.props.action("cases")}
        >
          &#10094;
        </a>
        {
          this.state.leftHover &&
          <div className="float-text" style={{left: "20%"}}>Cases</div>
        }
        <a
          className="next"
          onMouseEnter={this.handleRightHover}
          onMouseLeave={this.handleRightHover}
          onClick={() => this.props.action("fact-sheet")}
        >
          &#10095;
        </a>
        {
          this.state.rightHover &&
          <div className="float-text" style={{left: "75%"}}>Fact Sheet</div>
        }
      </div>
    )
  }
}

export default Intro
