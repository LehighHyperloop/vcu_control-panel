import React, { Component } from 'react'
import { observer } from 'mobx-react'

// air bearing

@observer
class LevitationFront extends Component {

  render() {

    const { subsystem } = this.props
    const color = subsystem.getSubsystemState().getColor()
    const shapeStyle = {
      mixBlendMode: 'overlay'
    }

    return (
        <g id="AIR-BEARING-F" transform="translate(18.000000, 144.000000)">
          <g id="AIR-BEARING-F-L">
            <g id="AIR-BEARING">
              <use fill="#111111" fillRule="evenodd" xlinkHref="#path-3"></use>
              <use fill="url(#pattern-4)" fillRule="evenodd" xlinkHref="#path-3"></use>
              <use fill={color} fillRule="evenodd" style={shapeStyle} xlinkHref="#path-3"></use>
              <use stroke={color} mask="url(#mask-6)" strokeWidth="4" xlinkHref="#path-3"></use>
            </g>
          </g>
          <g id="AIR-BEARING-F-R" transform="translate(132.000000, 0.000000)">
            <g id="AIR-BEARING">
              <use fill="#111111" fillRule="evenodd" xlinkHref="#path-7"></use>
              <use fill="url(#pattern-8)" fillRule="evenodd" xlinkHref="#path-7"></use>
              <use fill={color} fillRule="evenodd" style={shapeStyle} xlinkHref="#path-7"></use>
              <use stroke={color} mask="url(#mask-10)" strokeWidth="4" xlinkHref="#path-7"></use>
            </g>
          </g>
        </g>
    )
  }

}

export default LevitationFront
