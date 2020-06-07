import React, {Component} from 'react'

const withPopup = WrappedComponent => {

  class WithPopup extends Component {

    constructor(props) {
      super(props)
      this.state = {
        material: ['MGN/Missoulian.png'],
        popupType: 'onePage',
        numPages: 1
      }
    }

    popupHandler = (newMaterial, newPopupType, newNumPages) => {
      this.setState({
        material: newMaterial,
        popupType: newPopupType,
        numPages: newNumPages
      })
      document.getElementsByClassName("main-body")[0].style.display = "none"
      document.getElementsByClassName("popup")[0].style.display = "block"
    }

    render() {
      return <WrappedComponent
               material={this.state.material}
               numPages={this.state.numPages}
               popupType={this.state.popupType}
               popupHandler={this.popupHandler}
               {... this.props}
             />
    }

  }
  return WithPopup

}

export default withPopup
