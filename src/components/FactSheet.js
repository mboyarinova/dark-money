import React, { Component } from 'react'

class FactSheet extends Component {

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
      <div className="fact-sheet">
        <h1 className="page-title">Fact Sheet</h1>
        {this.props.text}
        <a
          className="prev"
          onMouseEnter={this.handleLeftHover}
          onMouseLeave={this.handleLeftHover}
          onClick={() => this.props.action("intro")}
        >
          &#10094;
        </a>
        {
          this.state.leftHover &&
          <div className="float-text" style={{left: "17%"}}>Introduction</div>
        }
        <a
          className="next"
          onMouseEnter={this.handleRightHover}
          onMouseLeave={this.handleRightHover}
          onClick={() => this.props.action("voter-materials")}
        >
          &#10095;
        </a>
        {
          this.state.rightHover &&
          <div className="float-text" style={{left: "75%"}}>Voter Materials</div>
        }
      </div>
    )
  }
}

export default FactSheet
