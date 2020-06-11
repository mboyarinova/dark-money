import React, {Component} from 'react'

const withPopup = WrappedComponent => {

  class WithPopup extends Component {

    constructor(props) {
      super(props)
      this.state = {
        material: ['blank.jpg'],
        popupType: 'turn'
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

    render() {
      return <WrappedComponent
               material={this.state.material}
               popupType={this.state.popupType}
               popupHandler={this.popupHandler}
               unmountMe={this.handlePopupUnmount}
               {... this.props}
             />
    }

  }
  return WithPopup

}

export default withPopup
