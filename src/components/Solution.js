import React, { Component } from 'react'

class Solution extends Component {
  render() {
    return (
      <div className="page" id="solution">
        <h1 classNam="solution-title">Solution</h1>
        <div className="solution-body">
          {this.props.text}
          <p className="main-text">
            {/*This game is intended to be fun, challenging, and informative. As
            realistic as we strived to make it, tracing these scenarios in real
            life is significantly more difficult. In this case players were
            warned to be on the lookout for special interests, and have materials
            presented to close in on the source. In real life the voter doesn’t
            necessarily know they should be looking, and they are inundated with
            hundreds of materials making different arguments. This case was
            solvable. Most are not.*/}
          </p>
        </div>
        <button
          onClick={() => this.props.action("voter-materials")}
          style={{top: "90%", left: "15%"}}
        >
          See Materials
        </button>
        <button
          onClick={() => this.props.action("cases")}
          style={{top: "90%", right: "15%"}}
        >
          Play New Game
        </button>
      </div>
    )
  }
}

export default Solution
