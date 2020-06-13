import React, { Component } from 'react'
import Measure from 'react-measure'

class Popup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      flipped: false,
      currentPage: 0,
      imgHeight: 0
    }
  }

  handleClose = () => {
    this.setState({
      flipped: false,
      currentPage: 0
    })
    document.getElementsByClassName("popup")[0].style.display = "none"
    document.getElementsByClassName("main-body")[0].style.display = "block"
    this.props.unmountMe()
  }

  handleFlip = () => {
    this.setState(prevState => {
      return {flipped: !prevState.flipped}
    })
  }

  plusSlides = i => {
    this.setState(prevState => {
      return {currentPage: prevState.currentPage + i}
    })
  }

  handleResize = contentRect => {
    var obj = contentRect.entry
    if (obj) {
      this.setState({
        imgHeight: obj.height
      })
    }

  }

  render() {

    var material

    switch(this.props.type) {

      case 'flip':
        material =
          <div className="popup-material">
            <div style={{height: "100%"}}>
              <img
                className="flier"
                alt=""
                src={require("./materials/" +
                      this.props.material[Number(this.state.flipped)])}
              />
            </div>
            <button
              className="flip-button"
              onClick={this.handleFlip}
              onKeyPress={this.handleFlip}
            >
              <div className="rotate">
                &#8635;
              </div>
            </button>
          </div>
        break

      case 'turn':

        var terms = null
        var page = this.state.currentPage
        var style = {
          height: this.state.imgHeight
        }

        if (this.props.material[page] === 'MGN/Case-1.png') {

          terms =
            <div className="terms" style={style}>
              <div
                className="tooltip"
                style={{left:"30.5%", top:"25.8%", width: "9.5%"}}
              >
                <span className="tooltiptext">
                  a person who makes a formal application to a court for a
                  judicial action
                </span>
              </div>
              <div
                className="tooltip"
                style={{left:"43.8%", top:"25.8%", width: "9.5%"}}
              >
                <span className="tooltiptext">
                  a person who applies to a higher court for a reversal of the
                  decision of a lower court
                </span>
              </div>
              <div
                className="tooltip"
                style={{left:"30.5%", top:"46.2%", width: "12%"}}
              >
                <span className="tooltiptext">
                  persons sued or accused in a court of law
                </span>
              </div>
              <div
                className="tooltip"
                style={{left:"46.5%", top:"46.2%", width: "9.5%"}}
              >
                <span className="tooltiptext">
                  respondents in a case appealed to a higher court
                </span>
              </div>
              <div
                className="tooltip"
                style={{left:"30.5%", top:"56.3%", width: "20.5%"}}
              >
                <span className="tooltiptext">
                  individuals who make themselves part of a lawsuit by uniting
                  with the defendant
                </span>
              </div>
            </div>

        } else if (this.props.material[page] === 'MGN/Case-2.png') {
          terms =
            <div className="terms" style={style}>
              <div
                className="tooltip"
                style={{left:"46.5%", top:"25.5%", width: "9%"}}
              >
                <span className="tooltiptext">
                  a right to cross or otherwise use someone else’s land for a
                  specified purpose
                </span>
              </div>
            </div>
        }

        var prevButton =
          <div
            className="prev"
            onClick={() => this.plusSlides(-1)}
            onKeyPress={() => this.plusSlides(-1)}
            tabIndex="0"
          >
            &#10094;
          </div>
        var nextButton =
          <div
            className="next"
            onClick={() => this.plusSlides(1)}
            onKeyPress={() => this.plusSlides(1)}
            tabIndex="0"
          >
            &#10095;
          </div>

        if (page === 0) {
          prevButton = null
        }
        if (page === this.props.material.length - 1) {
          nextButton = null
        }

        material =
          <div className="popup-material">
            <div className="temp">
              <Measure onResize={this.handleResize}>
                {({contentRect, measureRef}) =>
                  <img ref={measureRef}
                    className="popup-img"
                    alt=""
                    src={require("./materials/" +
                         this.props.material[page])}
                  />}
              </Measure>
            {terms}
            </div>
            {prevButton}
            {nextButton}
          </div>
        break

      default:
        break
    }

    return (
      <div className="popup">
        <button
          className="close-button"
          onClick={this.handleClose}
          onKeyDown={this.handleClose}
        >
        &times;
        </button>
        {material}
      </div>
    )
  }
}

export default Popup
