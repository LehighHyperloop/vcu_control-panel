import React, { Component } from 'react'
import { observer } from 'mobx-react'

// wheels

@observer
class TopPod extends Component {

  render() {

    const shapeStyle = {
      mixBlendMode: 'overlay'
    }

    return (
      <g id="WHEELS" transform="translate(25.000000, 404.000000)">
        <g id="Oval-1">
          <use fill="#111111" fillRule="evenodd" xlinkHref="#path-35"></use>
          <use fill="url(#pattern-36)" fillRule="evenodd" xlinkHref="#path-35"></use>
          <use fill="#FF0000" fillRule="evenodd" style={shapeStyle} xlinkHref="#path-35"></use>
          <use stroke="#FF0000" mask="url(#mask-38)" strokeWidth="4" xlinkHref="#path-35"></use>
        </g>
        <g id="Oval-1">
          <use fill="#111111" fillRule="evenodd" xlinkHref="#path-39"></use>
          <use fill="url(#pattern-40)" fillRule="evenodd" xlinkHref="#path-39"></use>
          <use fill="#FF0000" fillRule="evenodd" style={shapeStyle} xlinkHref="#path-39"></use>
          <use stroke="#FF0000" mask="url(#mask-42)" strokeWidth="4" xlinkHref="#path-39"></use>
        </g>
        <g id="Oval-1">
          <use fill="#111111" fillRule="evenodd" xlinkHref="#path-43"></use>
          <use fill="url(#pattern-44)" fillRule="evenodd" xlinkHref="#path-43"></use>
          <use fill="#FF0000" fillRule="evenodd" style={shapeStyle} xlinkHref="#path-43"></use>
          <use stroke="#FF0000" mask="url(#mask-46)" strokeWidth="4" xlinkHref="#path-43"></use>
        </g>
        <g id="Oval-1">
          <use fill="#111111" fillRule="evenodd" xlinkHref="#path-47"></use>
          <use fill="url(#pattern-48)" fillRule="evenodd" xlinkHref="#path-47"></use>
          <use fill="#FF0000" fillRule="evenodd" style={shapeStyle} xlinkHref="#path-47"></use>
          <use stroke="#FF0000" mask="url(#mask-50)" strokeWidth="4" xlinkHref="#path-47"></use>
        </g>
      </g>
    )
  }

}

export default TopPod
