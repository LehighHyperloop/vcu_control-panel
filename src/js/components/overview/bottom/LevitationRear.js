import React, { Component } from 'react'
import { observer } from 'mobx-react'

// air bearing

@observer
class LevitationRear extends Component {

  render() {

    const { subsystem } = this.props
    const color = subsystem.getSubsystemState().getColor()
    const shapeStyle = {
      mixBlendMode: 'overlay'
    }

    return (
        <g id="AIR-BEARING-R" transform="translate(18.000000, 612.000000)">
          <g id="AIR-BEARING-R-L">
            <g id="AIR-BEARING">
              <use fill="#111111" fillRule="evenodd" xlinkHref="#path-11"></use>
              <use fill="url(#pattern-12)" fillRule="evenodd" xlinkHref="#path-11"></use>
              <use fill={color} fillRule="evenodd" style={shapeStyle} xlinkHref="#path-11"></use>
              <use stroke={color} mask="url(#mask-14)" strokeWidth="4" xlinkHref="#path-11"></use>
            </g>
          </g>
          <g id="AIR-BEARING-R-R" transform="translate(132.000000, 0.000000)">
            <g id="AIR-BEARING">
              <use fill="#111111" fillRule="evenodd" xlinkHref="#path-15"></use>
              <use fill="url(#pattern-16)" fillRule="evenodd" xlinkHref="#path-15"></use>
              <use fill={color} fillRule="evenodd" style={shapeStyle} xlinkHref="#path-15"></use>
              <use stroke={color} mask="url(#mask-18)" strokeWidth="4" xlinkHref="#path-15"></use>
            </g>
          </g>
        </g>
    )
  }

}

export default LevitationRear
