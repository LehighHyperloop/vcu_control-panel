import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Terminal from './terminal/Terminal'
import Grid from './subsystems/Grid'
import BatteryMonitor from './battery-monitor/BatteryMonitor'
import TopPod from './overview/top/TopPod'
import BottomPod from './overview/bottom/BottomPod'

@observer
class HyperloopApp extends Component {

  render() {
    const { terminalStore, subsystemStore, batteryStore } = this.props

    console.log(batteryStore.batteries)

    return (
      <div className="container-fluid">
        <div className="col-md-12">
          <Terminal messages={terminalStore.messages}/>
          <div className="col-md-12">
            <Grid subsystems={subsystemStore.subsystems}/>
          </div>
        </div>
      </div>
    )
  }

}

export default HyperloopApp
