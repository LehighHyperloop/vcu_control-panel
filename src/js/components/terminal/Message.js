import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Message extends Component {

  // autoscroll the textbox
  componentDidMount() {
    var terminalBox = document.getElementById('terminal')
    terminalBox.scrollTop = terminalBox.scrollHeight
  }

  render() {



    const { time, source, body} = this.props
    return (
      <div className="terminal-message">
        ⏱<span className="message-time">{time}</span>
        {' '}
        📟 <span className="message-source">{source}</span>
        {' '}
        👉
        {' '}
        <span className="message-body">"{body}"</span>
      </div>
    )
  }

}

export default Message
