import React, {Component} from 'react'

import './appStyles.css'

class Rules extends Component {

  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 1
    }
  }

  plusSlides = index => {
    this.setState(prevState => {
      return {slideIndex: prevState.slideIndex + index}
    })
  }

  currentSlide = index => {
    this.setState({
      slideIndex: index
    })
  }

  render() {

    var ruleText
    var playButton = null
    var prevButton =
      <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
    var nextButton =
      <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>

    switch(this.state.slideIndex) {
      case 1:
        ruleText =
          <div className="rule-text">
            <p>
              The landmark Supreme Court decision Citizens United v. FEC
              ruled that corporate spending on political messaging (ex.
              advertisements advocating for policy positions or for certain
              candidates) could not be limited, so long as the spending is
              not coordinated with a political campaign. The reasoning behind
              that decision explained that the system has enough transparency
              regarding where the money is coming from that voters can make
              informed decisions about the motivations of the messengers.
            </p>
            <p>
              Federal election campaigns can cost millions of dollars, but
              local and state election campaigns usually cost less than
              $100,000. This means that local and state elections are easy
              targets for corporations or individuals trying to sway the
              election results, because a small investment can go a long way
              in altering the result of the election.
            </p>
          </div>
        prevButton = null
        break
      case 2:
        ruleText =
          <div className="rule-text">
            <p>
              You will be given two real life scenarios of organizations
              spending money to advocate for a candidate in a state or local
              election. You will have all of the real information a voter in
              the relevant electorate had access to in the weeks leading up
              to the election. It is your job to see if the Citizens United
              reasoning holds true; with the information provided, can you
              make an informed decision about the motivation of the
              messenger?
            </p>
          </div>
        break
      case 3:
        ruleText =
          <div className="rule-text">
            <h3>How to approach a case:</h3>
            <ol>
              <li>
                Read the Introduction to learn the background of the election
                and the candidates.
              </li>
              <li>
                Look at the Voter Materials to get a sense of what materials
                are available to you, and then read through the materials in
                any order.
              </li>
              <li>
                Look for key issues which might motivate outside spending.
              </li>
              <li>
                Develop a theory about where the funding is coming from based
                on the provided information and, if working with other people,
                discuss your ideas.
              </li>
              <li>
                When you feel ready, read the solution and see how it compares
                to your ideas.
              </li>
              <li>
                Consider: as a voter in this election, would I have been able
                to make an informed decision?
              </li>
            </ol>
          </div>
        nextButton = null
        playButton =
          <button
            onClick={() => this.props.action("cases")}
            style={{top: "83%", right: "15%"}}
          >
            Play
          </button>
        break
      default:
        break
    }

    return (
      <div className="page" id="rules">
        <h1 className="page-title">Background and Rules</h1>
        <div className="rules-container">
          {ruleText}
          {prevButton}
          {nextButton}
        </div>
        <button
          onClick={() => this.props.action("welcome")}
          style={{top: "83%", left: "15%"}}
        >
          Main Page
        </button>
        {playButton}
        <div class="carousel-dots" style={{top: "85%"}}>
          <span class="dot" id="dot1" onClick={() => this.currentSlide(1)}></span>
          <span class="dot" id="dot2" onClick={() => this.currentSlide(2)}></span>
          <span class="dot" id="dot3" onClick={() => this.currentSlide(3)}></span>
          {/*work on making dots active depending on slideIndex*/}
        </div>
      </div>
    )
  }
}

export default Rules
