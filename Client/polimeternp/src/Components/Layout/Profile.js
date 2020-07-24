import React from "react";
import GeneralInfo from "./GeneralInfo";
import DisplayPath from "./DisplayPath";
import ElectoralHistory from "./ElectoralHistory";
import Commitment from "./Commitment";
import MediaLinks from "./MediaLinks";
import TimeLine from "./TimeLine";
import TwitterFeed from "./TwitterFeed.js";
import Asset from "./Asset";
import Lawsuits from "./Lawsuits";
import Details from "./Details";
import Footer from "./Footer";

import "../Styles/profile.css";



const rectangle = {
  height: "100%",
  width: "100%",
  background: "#555",
};

class Profile extends React.Component {
  constructor() {
    super();
    //  this.handleNameChange = this.handleNameChange.bind(this);
    this.state = {
      RepresentativesInfo: [],
      Name: "",
      filteredInfo: [],
    };
  }

  /*  filterDesiredItem(name, arrToFilter) {
    console.log(name);
    console.log(arrToFilter);
    const representative = arrToFilter.filter((rep) => rep.FirstName === name);
    this.setState({ filteredInfo: representative });

    console.log(representative);
  }

  handleNameChange(Name) {
    this.setState({
      Name: Name,
    });

    this.filterDesiredItem(Name, this.state.RepresentativesInfo);
  }
*/
  /*  componentDidMount = () => {
    axios
      .get("/mock.json")
      .then((res) => {
        console.log(res.data);
        this.setState({ RepresentativesInfo: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };*/

  render() {
    //const Name = this.state.name;
    const Name = " Khadag Prasad Oli";

    return (
       <div className="container-fluid container-style">
        <div className="row row-display-path">
          <div className="col-md-12">
            <DisplayPath className="display-path" name={Name} />
          </div>
        </div>

        <div className="row row-generalInfo">
          <div className="col-md-7">
            <GeneralInfo />
          </div>
                    <div className="col-md-1"></div>

          <div className="col-md-4">
            <MediaLinks />
          </div>
        </div>

        <div className="row row-electoral-history">
          <div className="col-md-7">
            <ElectoralHistory />
          </div>
        <div className="col-md-1"></div>

          <div className="col-md-4">
            <TimeLine />
          </div>
        </div>

        <div className="row row-commitment">
          <div className="col-md-7">
            <Commitment />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="row rows-in-col">
              <TwitterFeed />
            </div>
            <div className="row rows-in-col">
              <Asset />
            </div>
            <div className="row rows-in-col">
              <Lawsuits />
            </div>
            <div className="row rows-in-col">
              <Details />
            </div>
          </div>
        </div>

      </div>
      
    );
  }
}

export default Profile;
