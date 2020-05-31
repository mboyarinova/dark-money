import React, { Component } from 'react'

class Solution extends Component {

  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0
    }
  }

  handleDots = index => {
    var dots = document.getElementsByClassName("dot")
    for (var i = 0; i < 3; i++) {
      dots[i].className = dots[i].className.replace(" active", "")
    }
    dots[index].className += " active"
  }

  plusSlides = i => {
    this.setState(prevState => {
      var index = prevState.slideIndex + i
      this.handleDots(index)
      return {slideIndex: index}
    })
  }

  currentSlide = index => {
    this.handleDots(index)
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
      <div className="page" id="solution">
        <h1 className="page-title">Solution</h1>
        <div className="slide-container">
          {ruleText}
          {prevButton}
          {nextButton}
        </div>
        <button
          onClick={() => this.props.action("voter-materials")}
          style={{top: "88%", left: "15%"}}
        >
          See Materials
        </button>
        <button
          onClick={() => this.props.action("cases")}
          style={{top: "88%", right: "15%"}}
        >
          Play New Game
        </button>
        <div class="carousel-dots">
          <span class="dot active" onClick={() => this.currentSlide(0)}></span>
          <span class="dot" onClick={() => this.currentSlide(1)}></span>
          <span class="dot" onClick={() => this.currentSlide(2)}></span>
        </div>
      </div>
    )
  }
}

export default Solution
