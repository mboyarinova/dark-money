import React, { Component } from 'react'
import Intro from './Intro'
import FactSheet from './FactSheet'
import VoterMaterials from './VoterMaterials'
import PreSolution from './PreSolution'
import SolutionChoices from './SolutionChoices'
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
        page = <Intro
                  text={this.props.intro}
                  action={this.pageHandler}
                  back={this.props.action}
                />
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
      case "pre-solution":
        page = <PreSolution action={this.pageHandler} />
        break
      case "solution-choices":
        page = <SolutionChoices
                  text={this.props.solutionChoices}
                  action={this.pageHandler} />
        break
      case "solution":
        page = <Solution
                  text={this.props.solution}
                  action={this.pageHandler}
                  back={this.props.action}
                />
        break
      default:
        break
    }

    return <React.Fragment>{page}</React.Fragment>
  }
}

export default Scenario
