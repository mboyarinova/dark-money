import React, { Component } from 'react'

class Popup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      flipped: false,
      currentPage: 0
    }
  }

  handleClose = () => {
    this.setState({
      flipped: false,
      currentPage: 0
    })
    document.getElementsByClassName("popup")[0].style.display = "none"
    document.getElementsByClassName("main-body")[0].style.display = "block"
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

  render() {

    var material

    switch(this.props.type) {
      case 'onePage':
        material =
          <div className="popup-material">
            <div>
              <img
                className="popup-img"
                alt=""
                src={require("./materials/" + this.props.material[0])}
              />
            </div>
          </div>
        break
      case 'flier':
        material =
          <div className="popup-material">
            <div>
              <img
                className="popup-img"
                alt=""
                src={require("./materials/" + this.props.material[Number(this.state.flipped)])}
              />
            </div>
            <button
              className="flip-button"
              onClick={this.handleFlip}
            >
              <div className="rotate">
                &#8635;
              </div>
            </button>
          </div>
        break
      case 'nPages':

        var prevButton =
          <div className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</div>
        var nextButton =
          <div className="next" onClick={() => this.plusSlides(1)}>&#10095;</div>

        switch(this.state.currentPage) {
          case 0:
            prevButton = null
            break
          case (this.props.numPages-1):
            nextButton = null
            break
          default:
            break
        }

        material =
          <div className="popup-material">
            <div>
              <img
                className="popup-img"
                alt=""
                src={require("./materials/" + this.props.material[this.state.currentPage])}
              />
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
        >
        &times;
        </button>
        {material}
      </div>
    )
  }
}

export default Popup
