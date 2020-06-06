import React, {Component} from 'react'

const withPopup = WrappedComponent => {

  class WithPopup extends Component {

    constructor(props) {
      super(props)
      this.state = {
        material: './materials/MGN/Missoulian.png'
      }
    }

    popupHandler = newMaterial => {
      this.setState({
        material: newMaterial
      })
      document.getElementsByClassName("main-body")[0].style.display = "none"
      document.getElementsByClassName("popup")[0].style.display = "block"
    }

    render() {
      return <WrappedComponent
               material={this.state.material}
               popupHandler={this.popupHandler}
               {... this.props}
             />
    }

  }
  return WithPopup

}

export default withPopup
