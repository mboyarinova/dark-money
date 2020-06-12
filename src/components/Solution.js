import React, { Component } from 'react'
import withSlides from './withSlides'

class Solution extends Component {

  render() {

    const {slideIndex, plusSlides, currentSlide} = this.props

    var ruleText
    var playButton = null
    var prevButton =
      <div
        className="prev"
        onClick={() => plusSlides(-1)}
        onKeyPress={() => plusSlides(-1)}
        tabIndex="0"
      >
        &#10094;
      </div>
    var nextButton =
      <div
        className="next"
        onClick={() => plusSlides(1)}
        onKeyPress={() => plusSlides(1)}
        tabIndex="0"
      >
        &#10095;
      </div>

    switch(slideIndex) {
      case 0:
        ruleText = this.props.text[0]
        prevButton = null
        break
      case 1:
        ruleText = this.props.text[1]
        break
      case 2:
        ruleText =
          <div className="slide-text">
            <p>
              This game is intended to be fun, challenging, and informative. As
              realistic as we strived to make it, tracing these scenarios in
              real life is significantly more difficult. In this case players
              were warned to be on the lookout for special interests, and have
              materials presented to close in on the source. In real life the
              voter doesn’t necessarily know they should be looking, and they
              are inundated with hundreds of materials making different
              arguments. This case was solvable. Most are not.
            </p>
          </div>
        nextButton = null
        playButton =
          <button
            onClick={() => this.props.back("cases")}
            onKeyPress={() => this.props.back("cases")}
            style={{top: "88%", right: "15%"}}
          >
            Play New Game
          </button>
        break
      default:
        break
    }

    return (
      <div className="page" id="solution">
        <h1 className="page-title">Solution</h1>
        <div className="slide-container">
          {ruleText}
          {prevButton}
          {nextButton}
        </div>
        <button
          onClick={() => this.props.action("voter-materials")}
          onKeyPress={() => this.props.action("voter-materials")}
          style={{top: "88%", left: "15%"}}
        >
          See Materials
        </button>
        {playButton}
        <div className="carousel-dots">
          <span
            className="dot active"
            onClick={() => currentSlide(0)}
            onKeyPress={() => currentSlide(0)}
            tabIndex="0"
          />
          <span
            className="dot"
            onClick={() => currentSlide(1)}
            onKeyPress={() => currentSlide(1)}
            tabIndex="0"
          />
          <span
            className="dot"
            onClick={() => currentSlide(2)}
            onKeyPress={() => currentSlide(2)}
            tabIndex="0"
          />
        </div>
      </div>
    )
  }
}

export default withSlides(Solution)
