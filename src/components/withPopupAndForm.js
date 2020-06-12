import React, {Component} from 'react'

const withPopupAndForm = WrappedComponent => {

  class withPopupAndForm extends Component {

    constructor(props) {
      super(props)
      this.state = {
        material: ['blank.jpg'],
        popupType: 'turn',
        selectedOption: -1
      }
    }

    handlePopupUnmount = () => {
      this.setState({
        material: ['blank.jpg']
      })
    }

    popupHandler = (newMaterial, newPopupType) => {
      this.setState({
        material: newMaterial,
        popupType: newPopupType
      })
      document.getElementsByClassName("main-body")[0].style.display = "none"
      document.getElementsByClassName("popup")[0].style.display = "block"
    }

    handleClick = event => {
      var options = document.getElementsByClassName("option")
      for (var i = 0; i < options.length; i++) {
        options[i].style.visibility = "hidden"
      }
      this.setState({
        selectedOption: event.target.value
      })
    }

    handleClickAway = () => {
      this.setState({
        selectedOption: -1
      })
    }

    handleSubmit = event => {
      event.preventDefault()
      var index = this.state.selectedOption
      if (index === -1) {
        alert("You need to pick an answer first!")
      } else {
        var options = document.getElementsByClassName("option")
        options[index].style.visibility = "visible"
      }
    }

    render() {
      return <WrappedComponent
               material={this.state.material}
               popupType={this.state.popupType}
               popupHandler={this.popupHandler}
               unmountMe={this.handlePopupUnmount}
               handleClick={this.handleClick}
               handleClickAway={this.handleClickAway}
               handleSubmit={this.handleSubmit}
               {... this.props}
             />
    }

  }
  return withPopupAndForm

}

export default withPopupAndForm
