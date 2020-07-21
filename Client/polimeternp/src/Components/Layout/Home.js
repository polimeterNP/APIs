import React from "react";
import "../Styles/Home.css";
import DisplayData from "./DisplayData";

class Home extends React.Component {
  render() {
    return (
      <div className="fluid parent container-style">
        <img className="image1" src={"/images/logo.png"} alt="logo" />
        <img className="image2" src={"/images/bg01.jpg"} alt="background" />
      </div>
    );
  }
}

export default Home;
