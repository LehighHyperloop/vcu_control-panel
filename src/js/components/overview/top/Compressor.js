import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Compressor extends Component {

  render() {

    const shapeStyle = {
      mixBlendMode: 'overlay'
    }

    return (
      <g id="COMPRESSOR">
          <use fill="#111111" fillRule="evenodd" xlinkHref="#path-7"></use>
          <use fill="url(#pattern-8)" fillRule="evenodd" xlinkHref="#path-7"></use>
          <use fill="#00FF00" fillRule="evenodd" style={shapeStyle} xlinkHref="#path-7"></use>
          <use stroke="#00FF00" mask="url(#mask-10)" strokeWidth="4" xlinkHref="#path-7"></use>
      </g>
    )
  }

}

export default Compressor
