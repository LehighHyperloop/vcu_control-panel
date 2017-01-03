import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Autocomplete extends Component {

  render() {

    const cmd = this.props.cmd

    if(!cmd) {
      return null
    }

    return (
      <div id="autocomplete" className="btn-group open">
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">shutdown levitation</a>
          {/* <div className="dropdown-divider"></div> */}
          <a className="dropdown-item" href="#">finish autocomplete</a>
          {/* <div className="dropdown-divider"></div> */}
          <a className="dropdown-item" href="#">There should be arrow-down</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Clear</a>
        </div>
      </div>
    )
  }

}

export default Autocomplete
