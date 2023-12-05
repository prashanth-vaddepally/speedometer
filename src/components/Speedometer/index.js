import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAaccelerating = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onBraking = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="thebackground">
        <h1 className="theheading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="imagesettings"
          alt="speedometer"
        />
        <h1>Speed is {count}mph</h1>
        <p className="thepara">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="bothbuttons">
          <buttons className="acc" onClick={this.onAccelerating}>
            Accelerate
          </buttons>
          <buttons className="brake" onClick={this.onBraking}>
            Apply Brake
          </buttons>
        </div>
      </div>
    )
  }
}
export default Speedometer
