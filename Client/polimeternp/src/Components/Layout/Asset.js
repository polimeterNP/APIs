import React, { Component } from "react";
const rectangle = {
  height: "100%",
  width: "100%",
  color: "#1942bf"

};
export default class Asset extends Component {
  render() {
    return <div style={rectangle}>ASSET DISCLOSURE(AS OF MMM-YYY)</div>;
  }
}
