import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Autocomplete from './Autocomplete'

@observer
class Prompt extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cmd: ''
    }
  }

  onSubmit(e) {
    e.preventDefault()
    const cmd = this.state.cmd
    if(!cmd) {
      return
    }
    console.log(cmd)
    this.setState({ 'cmd': '' })
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ 'cmd': e.target.value })
  }

  render() {

    return (
        <div id="prompt">
          <Autocomplete cmd={this.state.cmd} />
          <form ref="promptForm" onSubmit={this.onSubmit.bind(this)} onChange={this.onChange.bind(this)}>
            <input type="text" ref="cmd" placeholder="Enter some command..." value={this.state.cmd} />
          </form>
        </div>
    )
  }

}

export default Prompt
