import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { Name: "" };
  }

  handleChange(e) {
    this.props.onInputChanged(e.target.value);
  }
  render() {
    const Name = this.props.Name;

    return (
      <div>
        <fieldset>
          <legend>Enter the name of representative:</legend>
          <input value={Name} onChange={this.handleChange} />
        </fieldset>
      </div>
    );
  }
}

export default Search;
