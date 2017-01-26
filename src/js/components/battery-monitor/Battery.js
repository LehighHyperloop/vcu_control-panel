import React, { Component } from 'react'
import { observer } from 'mobx-react'


@observer
class Battery extends Component {

  render() {

    const { text, color } = this.props

    const colorStyle = {
      backgroundColor: color
    }

    return (
      <div className="battery">
        <span className="tag tag-success" style={colorStyle} >{text}</span>
      </div>
    )
  }

}

export default Battery
