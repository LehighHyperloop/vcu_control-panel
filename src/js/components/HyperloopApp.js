import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Terminal from './terminal/Terminal'
import Grid from './subsystems/Grid'
import TopPod from './overview/top/TopPod'
import BottomPod from './overview/bottom/BottomPod'

@observer
class HyperloopApp extends Component {

  render() {
    const { terminalStore } = this.props

    return (
      <div className="container-fluid">
        <div className="col-md-6">
          <div className="col-md-6">
            <BottomPod subsystemStore={subsystemStore} />
          </div>
          <div className="col-md-6">
            <TopPod subsystemStore={subsystemStore} />
          </div>
        </div>
        <div className="col-md-6">
          <Terminal messages={terminalStore.messages}/>
          <Grid subsystems={subsystemStore.subsystems}/>
        </div>
      </div>
    )
  }

}

export default HyperloopApp
