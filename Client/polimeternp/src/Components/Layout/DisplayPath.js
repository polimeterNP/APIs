import React, { Component } from "react";

const pathStyle = {
  padding: "2px",
}
export default class DisplayPath extends Component {
  render() {
    return (
      <div>
       Political Profile &gt;{this.props.name}
       <hr/>
      </div>
    );
  }
}
