import React, { Component } from 'react'

class Cases extends Component {
  render() {
    return (
      <div className="cases-page">
        <h1 className="page-title">Cases</h1>
        <p className="side-paragraph" style={{fontSize: "20px", top: "35%"}}>
          The two cases in this game are: Montana Growth Network and
          Neighborhood Empowerment Coalition. Montana Growth Network is easier
          and should train you in what to look for so it is important to work
          through Montana Growth Network first.
        </p>
        <button
          className="button"
          onClick={() => this.props.action("montana-case")}
          style={{top: "40%", right: "20%"}}
        >
          Montana Growth Network
        </button>
        <button
          className="button"
          onClick={() => this.props.action("neighborhood-case")}
          style={{top: "60%", right: "20%", height: "12%"}}
        >
          Neighborhood Empowerment Coalition
        </button>
        <button
          className="button"
          onClick={() => this.props.action("rules")}
          style={{top: "83%", left: "15%"}}
        >
          Game Rules
        </button>
      </div>
    )
  }
}

export default Cases
