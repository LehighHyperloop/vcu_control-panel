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

var client = mqtt.connect("ws://192.168.0.100:9883/")
client.subscribe("#")

var topic_to_subsystem = {
  "remote_subsystem/suspension": "Suspension",
  "sensor/suspension/distance": "Suspension",
  "sensor/all/pressure": "SENSOR_PRESSURE",
  "subsystem/braking": "Braking",
  "subsystem/compressor": "Compressor",
  "subsystem/fan": "Fan",
  "subsystem/inverters": "Inverters",
  "subsystem/lateral_control": "LateralControl",
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
    var extra = undefined

    if (mapping == "Inverters") {
      extra = (parseFloat(payload_json["inverters"]["0"]["voltage"]) / 1000).toFixed(2) + "V " +
              (parseFloat(payload_json["inverters"]["0"]["wattage"]) / 1000).toFixed(2) + "kW " +
              (parseFloat(payload_json["inverters"]["0"]["temp"]) / 100 - 273).toFixed(2) + "C " +
              (parseFloat(payload_json["inverters"]["1"]["voltage"]) / 1000).toFixed(2) + "V " +
              (parseFloat(payload_json["inverters"]["1"]["wattage"]) / 1000).toFixed(2) + "kW " +
              (parseFloat(payload_json["inverters"]["1"]["temp"]) / 100 - 273).toFixed(2) + "C"
    }
    if (mapping == "Suspension" && topic.endsWith("distance")) {
      console.log(payload_json)
      extra = "FL: " + (parseFloat(payload_json["fl"]) * 100).toFixed(1) + "mm " +
              "FR: " + (parseFloat(payload_json["fr"]) * 100).toFixed(1) + "mm " +
              "RL: " + (parseFloat(payload_json["rl"]) * 100).toFixed(1) + "mm " +
              "RR: " + (parseFloat(payload_json["rr"]) * 100).toFixed(1) + "mm"
    }

    if (mapping == "SENSOR_PRESSURE") {
      subsystemStore.updateExtra("Levitation", parseFloat(payload_json["levitation"]).toFixed(2) + " psi");
      subsystemStore.updateExtra("Braking", parseFloat(payload_json["pneumatics"]).toFixed(2) + " psi");
    }

    if (payload_json["state"] != undefined) {
      subsystemStore.updateSubsystem(mapping, payload_json["state"], extra);
    }
    if (extra != undefined) {
      subsystemStore.updateExtra(mapping, extra)
    }
  }
})
