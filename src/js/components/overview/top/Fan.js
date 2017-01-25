import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Fan extends Component {

  render() {

    const shapeStyle = {
      mixBlendMode: 'overlay'
    }

    return (
      <g id="FAN">
          <use fill="#111111" fillRule="evenodd" xlinkHref="#path-3"></use>
          <use fill="url(#pattern-4)" fillRule="evenodd" xlinkHref="#path-3"></use>
          <use fill="#FF0000" fillRule="evenodd" style={shapeStyle} xlinkHref="#path-3"></use>
          <use stroke="#FF0000" mask="url(#mask-6)" strokeWidth="4" xlinkHref="#path-3"></use>
      </g>
    )
  }

}

export default Fan
