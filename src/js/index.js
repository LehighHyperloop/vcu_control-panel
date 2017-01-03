import React from "react"
import ReactDOM from "react-dom"

import terminalStore from './stores/TerminalStore'
import subsystemStore from './stores/SubsystemStore'

import HyperloopApp from "./components/HyperloopApp"

String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

ReactDOM.render(
  <HyperloopApp terminalStore={terminalStore} subsystemStore={subsystemStore} />,
  document.getElementById("app")
)

// simulation

// subsystemStore.updateSubsystem("compressor", "COMPRESSOR_STARTING")
