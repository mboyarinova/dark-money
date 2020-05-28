import React, { Component } from 'react'

class VoterMaterials extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rightHover: false,
      leftHover: false
    }
  }

  handleLeftHover = () => {
    this.setState({
      leftHover: !this.state.leftHover
    })
  }

  render() {
    return (
      <div className="voter-materials">
        <h1 className="page-title">Voter Materials</h1>
        {this.props.text}
        <a
          className="prev"
          onMouseEnter={this.handleLeftHover}
          onMouseLeave={this.handleLeftHover}
          onClick={() => this.props.action("fact-sheet")}
        >
          &#10094;
        </a>
        {
          this.state.leftHover &&
          <div className="float-text" style={{left: "17%"}}>Fact Sheet</div>
        }
        <a
          className="next"
          onClick={() => this.props.action("pre-solution")}
        >
          &#10095;
        </a>
      </div>
    )
  }
}

export default VoterMaterials
