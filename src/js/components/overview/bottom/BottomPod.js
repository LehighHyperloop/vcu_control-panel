import React, { Component } from 'react'
import { observer } from 'mobx-react'

import BottomDefs from './BottomDefs'
import LevitationFront from './LevitationFront'
import LevitationRear from './LevitationRear'
import Propulsion from './Propulsion'
import Suspension from './Suspension'


@observer
class BottomPod extends Component {


  render() {

    const { subsystemStore } = this.props
    const shapeStyle = {
      mixBlendMode: 'overlay'
    }

    return (
      <div>lol</div>
    )

    return (
      // change size here
      <svg width="240px" height="962px" viewBox="210 74 240 962" version="1.1" xmlns="http://www.w3.org/2000/svg">

        <BottomDefs />

        <g id="BOTTOM-POD" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(210.000000, 74.000000)">
          <use id="BASE" stroke="#FFFFFF" mask="url(#mask-2)" strokeWidth="2" opacity="0.5" xlinkHref="#path-1"></use>

          <LevitationFront subsystem={subsystemStore.getSubsystem("levitation")} />
          <LevitationRear subsystem={subsystemStore.getSubsystem("levitation")} />

          <Suspension subsystem={subsystemStore.getSubsystem("suspension")} />

          <Propulsion subsystem={subsystemStore.getSubsystem("propulsion")} />
        </g>
      </svg>
    )
  }

}

export default BottomPod
