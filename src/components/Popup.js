import React, { Component } from 'react'

class Popup extends Component {

  handleClose = () => {
    document.getElementsByClassName("popup")[0].style.display = "none"
    document.getElementsByClassName("main-body")[0].style.display = "block"
  }

  render() {
    return (
      <div className="popup">
        <button
          className="close-button"
          onClick={this.handleClose}
        >
        &times;
        </button>
        <div className="popup-material">
          <div>
            <img
              className="popup-img"
              alt=""
              src={require('./materials/MGN/Missoulian Article.png')}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Popup
