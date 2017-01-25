import React from "react"
import ReactDOM from "react-dom"

import terminalStore from './stores/TerminalStore'
import subsystemStore from './stores/SubsystemStore'
import batteryStore from './stores/BatteryStore'

import HyperloopApp from "./components/HyperloopApp"

String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

ReactDOM.render(
  <HyperloopApp terminalStore={terminalStore} subsystemStore={subsystemStore} batteryStore={batteryStore} />,
  document.getElementById("app")
)

// subsystemStore.updateSubsystem("compressor", "COMPRESSOR_STARTING")

var client = mqtt.connect("ws://localhost:9883/")
client.subscribe("#")

var topic_to_subsystem = {
  "remote_subsystem/suspension": "Suspension",
  "subsystem/braking": "Braking",
  "subsystem/compressor": "Compressor",
  "subsystem/fan": "Fan",
//  "subsystem/inverters": "Inverters",
  "subsystem/levitation": "Levitation",
//  "subsystem/propulsion": "Propulsion",
  "subsystem/wheels": "Wheels"
}

client.on("message", function (topic, payload) {
  payload = String(payload);
  try {
    var payload_json = JSON.parse(payload);
  } catch(e) {
  }

  if (topic.startsWith("debug/")) {
    console.log(topic + ": " + payload);
    terminalStore.createMessage((new Date).toTimeString(), topic, payload);
  }

  var mapping = topic_to_subsystem[topic];
  if (mapping != undefined) {
    subsystemStore.updateSubsystem(mapping, payload_json["state"]);
  }
})
