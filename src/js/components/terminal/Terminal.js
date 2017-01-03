import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Message from './Message'
import Prompt from './Prompt'

@observer
class Terminal extends Component {

  render() {
    const messages = this.props.messages.map(msg => (
      <Message key={msg.id} time={msg.time} source={msg.source} body={msg.body} />
    ))

    return (
      <div>
        <div id="terminal">
          {messages}
        </div>
        <Prompt />
      </div>
    )
  }

}

export default Terminal
