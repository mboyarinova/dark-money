import React, { Component } from 'react'

class Welcome extends Component {

  render() {
    return (
      <div className="page" id="welcome">
        <h1 className="page-title">Welcome to "Dark Money: The Game"!</h1>
        <p className="side-paragraph">
          The purpose of this game is to show voters in the United States the
          way that special interests can become involved in local elections,
          and how our current campaign finance system works.
        </p>
        <button
          onClick={() => this.props.action("rules")}
          onKeyPress={() => this.props.action("rules")}
          style={{top: "40%", right: "20%"}}
        >
          Game Rules
        </button>
        <button
          onClick={() => this.props.action("cases")}
          onKeyPress={() => this.props.action("cases")}
          style={{top: "63%", right: "20%"}}
        >
          Play
        </button>
      </div>
    )
  }
}

export default Welcome
