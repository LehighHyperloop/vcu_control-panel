import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Battery from './Battery'

@observer
class BatteryMonitor extends Component {

  render() {

    const batteries = this.props.batteries.map(b => (
      <Battery key={b.id} text={b.text} color={b.color} />
    ))

    return (
      <div className="row">
        {batteries}
      </div>
    )
  }

}

export default BatteryMonitor
