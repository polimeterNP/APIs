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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <HomeLink className="nav-link" onClick={this.handClickHome} />
            </li>
            <li className="nav-item active">
              <ProfileLink
                className="nav-link"
                onClick={this.handClickProfile}
              />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default withRouter(Navbar);
