import React, { Component } from 'react'

class Cases extends Component {
  render() {
    return (
      <div className="page" id="cases">
        <h1 className="page-title">Cases</h1>
        <p className="side-paragraph">
          The two cases in this game are: Montana Growth Network and
          Neighborhood Empowerment Coalition. Montana Growth Network is easier
          and should train you in what to look for so it is important to work
          through Montana Growth Network first.
        </p>
        <button
          onClick={() => this.props.action("montana-case")}
          onKeyPress={() => this.props.action("montana-case")}
          style={{top: "38%", right: "20%"}}
        >
          Montana Growth Network
        </button>
        <button
          onClick={() => this.props.action("neighborhood-case")}
          onKeyPress={() => this.props.action("neighborhood-case")}
          style={{top: "61%", right: "20%"}}
        >
          Neighborhood Empowerment Coalition
        </button>
        <button
          onClick={() => this.props.action("rules")}
          onKeyPress={() => this.props.action("rules")}
          style={{top: "83%", left: "15%"}}
        >
          Game Rules
        </button>
      </div>
    )
  }
}

export default Cases
