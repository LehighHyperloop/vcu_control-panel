import React, { Component } from 'react'
import { observer } from 'mobx-react'

import TopDefs from './TopDefs'
import Fan from './Fan'
import Compressor from './Compressor'
import Inverter1 from './Inverter1'
import Inverter2 from './Inverter2'

@observer
class TopPod extends Component {

  render() {

    const shapeStyle = {
      mixBlendMode: 'overlay'
    }

    return (

      <svg width="240px" height="894px" viewBox="500 44 240 894" version="1.1" xmlns="http://www.w3.org/2000/svg">

        <TopDefs />

        <g id="TOP-POD" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(500.000000, 44.000000)">
          <use id="BASE" stroke="#FFFFFF" mask="url(#mask-2)" strokeWidth="2" opacity="0.5" xlinkHref="#path-1"></use>

          <Fan />

          <Compressor />

          <g id="INVERTERS" transform="translate(22.000000, 633.000000)">
            <Inverter1 />
            <Inverter2 />
          </g>
        </g>
      </svg>
    )
  }

}

export default TopPod
