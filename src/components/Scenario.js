import React, { Component } from 'react'

import Intro from './Intro'
import FactSheet from './FactSheet'
import VoterMaterials from './VoterMaterials'
import Solution from './Solution'

class Scenario extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: "intro",
    }
  }

  pageHandler = newPage => {
    this.setState({
      page: newPage
    })
  }

  render() {
    var page
    switch(this.state.page) {
      case "intro":
        page = <Intro text={this.props.intro} action={this.pageHandler} />
        break
      case "fact-sheet":
        page =
          <FactSheet text={this.props.factSheet} action={this.pageHandler} />
        break
      case "voter-materials":
        page = <VoterMaterials
                  text={this.props.voterMaterials}
                  action={this.pageHandler}
                />
        break
      case "solution":
        page = <Solution action={this.pageHandler} />
        break
      case "cases":
        this.props.action("cases")
        break
      default:
        break
    }

    return (
      <div>{page}</div>
    )
  }
}

export default Scenario
