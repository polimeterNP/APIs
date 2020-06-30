import React from "react";
import HomeLink from "./HomeLink";
import { withRouter } from "react-router-dom";
import ProfileLink from "./profileLink";

class Navbar extends React.Component {
  handClickHome = () => {
    this.props.history.push("/");
  };

  handClickProfile = () => {
    this.props.history.push("/profile");
  };

  render() {
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <ul>
            <li>
              <HomeLink onClick={this.handClickHome} />
            </li>
            <li>
              <ProfileLink onClick={this.handClickProfile} />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default withRouter(Navbar);
