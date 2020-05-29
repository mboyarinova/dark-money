import React, { Component } from 'react'

class Options extends Component {
  render() {
    return (
      <div>
        <button
          className="mid-button"
          onClick={() => this.props.action("solution")}
          style={{top: "50%"}}
        >
          Read Solution
        </button>
      </div>
    )
  }
}

export default Options
