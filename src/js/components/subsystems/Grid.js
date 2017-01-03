import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Subsystem from './Subsystem'

@observer
class Grid extends Component {

  render() {

    const subsystems = this.props.subsystems.map(sys => (
      <Subsystem key={sys.id} sysName={sys.name} sysState={sys.currentState}/>
    ))

    return (
      <div className="row">
        {subsystems}
      </div>
    )
  }

}

export default Grid
