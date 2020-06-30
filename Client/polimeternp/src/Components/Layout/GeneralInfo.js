import React from "react";
import "../../App.css";

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const info = this.props.representativeInfo;
    console.log(info);
    return <div className="info">{JSON.stringify(info)}</div>;
  }
}

export default GeneralInfo;
