import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Inverter2 extends Component {

  render() {

    const shapeStyle = {
      mixBlendMode: 'overlay'
    }

    return (
      <g id="INVERTER2">
          <use fill="#111111" fillRule="evenodd" xlinkHref="#path-19"></use>
          <use fill="url(#pattern-20)" fillRule="evenodd" xlinkHref="#path-19"></use>
          <use fill="#00FF00" fillRule="evenodd" style={shapeStyle} xlinkHref="#path-19"></use>
          <use stroke="#00FF00" mask="url(#mask-22)" strokeWidth="4" xlinkHref="#path-19"></use>
      </g>
    )
  }

}

export default Inverter2
