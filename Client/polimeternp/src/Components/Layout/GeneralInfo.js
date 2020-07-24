import React from "react";
import "../../App.css";
import "../Styles/generalInfo.css";

import { Badge, Image, Button } from "react-bootstrap";

const containerStyle = {
  float: "left",
  width: "65%",
};

const imageStyle = {
  width: "140px",
  height: "140px",
};

const badgeStyle = {
  display: "inline-block",
  width: "180px",
};

const rectangle = {
  height: "100%",
  width: "100%",
  background: "#555",
};

class GeneralInfo extends React.Component {
  render() {
    const info = this.props.representativeInfo;
    const daysInOffice = "90";
    const designation = "Prime Minister";
    const imagePath = "/images/kpOli.jpg";
    const tenure = "15-Feb-2018-Current";
    console.log(info);


    return (<div>
    <div className="row info-col">
          <div className="col col-sm-3">
            <Image style={imageStyle} src={imagePath} alt="pp" roundedCircle />
          </div>
          <div className="col col-sm-8">
            <h2>Khadga Prasad Oli</h2>
            <dl class=" row row-info">
              <dt class="col-sm-3 body">Gender</dt>
              <dd class="col-1">:</dd>
              <dd class="col-sm-5 body">Male</dd>
            </dl>
            <dl class="row row-info">
              <dt class="col-sm-3 body">Age</dt>
              <dd class="col-1">:</dd>
              <dd class="col-sm-5 body">68</dd>
            </dl>
             <dl class="row row-info">
              <dt class="col-sm-3 body">Education</dt>
              <dd class="col-1">:</dd>
              <dd class="col-sm-5 body">Intermediate</dd>
            </dl>
            <dl class="row row-info">
              <dt class="col-sm-3 body">Affiliation</dt>
              <dd class="col-1">:</dd>
              <dd class="col-sm-5 body">CPN-UML</dd>
            </dl>
            <dl class="row row-info">
              <dt class="col-sm-3 body">Address</dt>
              <dd class="col-1">:</dd>
              <dd class="col-sm-6 body">Baluwatar Pradhanmantri Niwas, Kathmandu</dd>
            </dl>
                 <dl class="row row-info">
              <dt class="col-sm-3 body">Marital Status</dt>
              <dd class="col-1">:</dd>
              <dd class="col-sm-5 body">Married(Spouse:xxx)</dd>
            </dl>
            <dl class="row row-info">
              <dt class="col-sm-3 body">No. of Children</dt>
              <dd class="col-1">:</dd>
              <dd class="col-sm-5 body">XXX</dd>
            </dl>
           
          </div>
          <div className="col col-sm-2">
            <ul>
              <li>
                <div
                  style={badgeStyle}
                  className="badge badge-secondary badge-warning"
                >
                  <span>
                    <li>{designation}</li>
                    <li>({tenure})</li>
                  </span>
                </div>
              </li>
              <li>
                <div
                  style={badgeStyle}
                  className="badge badge-secondary badge-warning"
                >
                  Days in Office : {daysInOffice}
                </div>
              </li>
            </ul>
          </div>
        </div>
        
      </div>);
  }
}

export default GeneralInfo;
