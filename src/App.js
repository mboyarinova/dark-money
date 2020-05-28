import React, {Component} from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Rules from './components/Rules'
import Cases from './components/Cases'
import Montana from './components/Montana'
import Neighborhood from './components/Neighborhood'

class App extends Component {

  constructor(props) {
    super(props)

    this.pageHandler = this.pageHandler.bind(this)

    this.state = {
      page: "welcome" //should be initialized to "welcome"
    }
  }

  pageHandler(newPage) {
    this.setState({
      page: newPage
    })
  }

  render() {
    var page
    switch(this.state.page) {
      case "welcome":
        page = <Welcome action={this.pageHandler} />
        break
      case "rules":
        page = <Rules action={this.pageHandler} />
        break
      case "cases":
        page = <Cases action={this.pageHandler} />
        break
      case "montana-case":
        page = <Montana action={this.pageHandler} />
        break
      case "neighborhood-case":
        page = <Neighborhood action={this.pageHandler} />
        break
      default:
        break
    }
    console.log(this.state.page)
    return <div className="App">{page}</div>
  }
}

export default App;
