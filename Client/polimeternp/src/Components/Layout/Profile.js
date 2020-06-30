import React from "react";
import axios from "axios";
import GeneralInfo from "./GeneralInfo";
import Search from "./Search";

class Profile extends React.Component {
  constructor() {
    super();
    this.handleNameChange = this.handleNameChange.bind(this);
    this.state = {
      RepresentativesInfo: [],
      Name: "",
      filteredInfo: [],
    };
  }

  filterDesiredItem(name, arrToFilter) {
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
    this.componentDidMount();
    this.filterDesiredItem(Name, this.state.RepresentativesInfo);
  }

  componentDidMount = () => {
    axios
      .get("/mock.json")
      .then((res) => {
        console.log(res.data);
        this.setState({ RepresentativesInfo: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const Name = this.state.name;
    return (
      <div className="Text">
        <Search Name={Name} onInputChanged={this.handleNameChange} />

        <GeneralInfo representativeInfo={this.state.filteredInfo}></GeneralInfo>
      </div>
    );
  }
}

export default Profile;
