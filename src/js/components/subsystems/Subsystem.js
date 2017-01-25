import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Subsystem extends Component {

  render() {

    const { sysName } = this.props
    const stateName = this.props.sysState.name
    const stateLevel = this.props.sysState.level

    let cardClass
    let iconClass

    switch(stateLevel) {
      case "ok":
        cardClass = "success"
        iconClass = "fa-check"
        break;

      case "stopped":
        cardClass = "danger"
        iconClass = "fa-pause-circle"
        break;

      case "error":
        cardClass = "warning"
        iconClass = "fa-exclamation-triangle faa-flash animated"
        break

      case "progress":
        cardClass = "info"
        iconClass = "fa-refresh fa-spin"
        break

      case "info":
        cardClass = "success"
        iconClass = "fa-refresh fa-spin"
        break

      default:
        cardClass = "danger"
        iconClass = "fa-question-circle faa-shake animated"
    }

    return (
      <div className="col-md-4">
        <div className={"card card-inverse card-"+ cardClass +" text-xs-center"}>
          <div className="card-block">
            <i className={"fa " + iconClass + " fa-3x"}></i>
            <h4 className="card-title">{sysName.capitalizeFirstLetter()}</h4>
            <p className="card-title">{stateName.toUpperCase()}</p>
          </div>
        </div>
      </div>
    )
  }

}

export default Subsystem
