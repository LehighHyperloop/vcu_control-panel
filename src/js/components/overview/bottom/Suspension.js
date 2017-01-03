import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class TopPod extends Component {

  render() {

    const { subsystem } = this.props
    const color = subsystem.getSubsystemState().getColor()
    const shapeStyle = {
      mixBlendMode: 'overlay'
    }

    return (
      <g id="SUSPENSION" transform="translate(29.000000, 226.000000)">
        <g id="Rectangle-20">
          <use fill="#111111" fillRule="evenodd" xlinkHref="#path-19"></use>
          <use fill="url(#pattern-20)" fillRule="evenodd" xlinkHref="#path-19"></use>
          <use fill={color} fillRule="evenodd" style={shapeStyle} xlinkHref="#path-19"></use>
          <use stroke={color} mask="url(#mask-22)" strokeWidth="4" xlinkHref="#path-19"></use>
        </g>
        <g id="Rectangle-20">
          <use fill="#111111" fillRule="evenodd" xlinkHref="#path-23"></use>
          <use fill="url(#pattern-24)" fillRule="evenodd" xlinkHref="#path-23"></use>
          <use fill={color} fillRule="evenodd" style={shapeStyle} xlinkHref="#path-23"></use>
          <use stroke={color} mask="url(#mask-26)" strokeWidth="4" xlinkHref="#path-23"></use>
        </g>
        <g id="Rectangle-20">
          <use fill="#111111" fillRule="evenodd" xlinkHref="#path-27"></use>
          <use fill="url(#pattern-28)" fillRule="evenodd" xlinkHref="#path-27"></use>
          <use fill={color} fillRule="evenodd" style={shapeStyle} xlinkHref="#path-27"></use>
          <use stroke={color} mask="url(#mask-30)" strokeWidth="4" xlinkHref="#path-27"></use>
        </g>
        <g id="Rectangle-20">
          <use fill="#111111" fillRule="evenodd" xlinkHref="#path-31"></use>
          <use fill="url(#pattern-32)" fillRule="evenodd" xlinkHref="#path-31"></use>
          <use fill={color} fillRule="evenodd" style={shapeStyle} xlinkHref="#path-31"></use>
          <use stroke={color} mask="url(#mask-34)" strokeWidth="4" xlinkHref="#path-31"></use>
        </g>
      </g>
    )
  }

}

export default TopPod
