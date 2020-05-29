constructor(props) {
  super(props)
  this.state = {
    rightHover: false,
    leftHover: false
  }
}

handleRightHover = () => {
  this.setState({
    rightHover: !this.state.rightHover
  })
}

handleLeftHover = () => {
  this.setState({
    leftHover: !this.state.leftHover
  })
}


onMouseEnter={this.handleLeftHover}
onMouseLeave={this.handleLeftHover}


{
  this.state.leftHover &&
  <div className="hover-label">Cases</div>
}
