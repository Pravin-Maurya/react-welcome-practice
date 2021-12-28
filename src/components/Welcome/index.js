// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribe: true,
  }

  OnSubscribe = () => {
    this.setState({isSubscribe: false})
  }

  OnSubscribed = () => {
    this.setState({isSubscribe: true})
  }

  render() {
    const {isSubscribe} = this.state
    let btnDetails
    if (isSubscribe === true) {
      btnDetails = (
        <button
          className="subscribe-button"
          type="button"
          onClick={this.OnSubscribe}
        >
          Subscribe
        </button>
      )
    } else {
      btnDetails = (
        <button
          className="subscribe-button"
          type="button"
          onClick={this.OnSubscribed}
        >
          Subscribed
        </button>
      )
    }
    return (
      <div className="bg-container">
        <h1 className="heading-welcome">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {btnDetails}
      </div>
    )
  }
}

export default Welcome
