import React, {Component} from 'react'
import withSlides from './withSlides'

class Rules extends Component {

  render() {

    const {slideIndex, plusSlides, currentSlide} = this.props

    var ruleText
    var playButton = null
    var prevButton =
      <div className="prev" onClick={() => plusSlides(-1)}>&#10094;</div>
    var nextButton =
      <div className="next" onClick={() => plusSlides(1)}>&#10095;</div>

    switch(slideIndex) {
      case 0:
        ruleText =
          <div className="slide-text">
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
      case 1:
        ruleText =
          <div className="slide-text">
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
      case 2:
        ruleText =
          <div className="slide-text">
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
                You will have the option of viewing three multiple choice
                solutions to the case. You can either skip this part and move
                forward with your own theory, or view the multiple choice
                options and select one.
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
            style={{top: "88%", right: "15%"}}
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
        <div className="slide-container">
          {ruleText}
          {prevButton}
          {nextButton}
        </div>
        <button
          onClick={() => this.props.action("welcome")}
          style={{top: "88%", left: "15%"}}
        >
          Main Page
        </button>
        {playButton}
        <div className="carousel-dots">
          <span className="dot active" onClick={() => currentSlide(0)}></span>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
        </div>
      </div>
    )
  }
}

export default withSlides(Rules)
