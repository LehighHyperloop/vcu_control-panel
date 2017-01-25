import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Inverter1 extends Component {

  render() {

    const shapeStyle = {
      mixBlendMode: 'overlay'
    }

    return (
      <g id="INVERTER1">
          <use fill="#111111" fillRule="evenodd" xlinkHref="#path-15"></use>
          <use fill="url(#pattern-16)" fillRule="evenodd" xlinkHref="#path-15"></use>
          <use fill="#FF0000" fillRule="evenodd" style={shapeStyle} xlinkHref="#path-15"></use>
          <use stroke="#FF0000" mask="url(#mask-18)" strokeWidth="4" xlinkHref="#path-15"></use>
      </g>
    )
  }

}

export default Inverter1
