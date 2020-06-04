import React, {Component} from 'react'

const withSlides = WrappedComponent => {

  class WithSlides extends Component {

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
      return <WrappedComponent
               slideIndex={this.state.slideIndex}
               plusSlides={this.plusSlides}
               currentSlide={this.currentSlide}
               {... this.props}
             />
    }

  }

  return WithSlides
}

export default withSlides
