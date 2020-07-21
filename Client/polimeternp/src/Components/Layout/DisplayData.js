import React, { Component } from "react";
import fetchData from "../Redux/action";
import Table from "./Table";
import { connect } from "react-redux";

class DisplayData extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const columns = [
      {
        Header: "General Info",

        columns: [
          {
            Header: "FirstName",
            accessor: "FirstName",
          },
          {
            Header: "MiddleName",
            accessor: "MiddleName",
          },
          {
            Header: "LastName",
            accessor: "LastName",
          },
          {
            Header: "Gender",
            accessor: "Gender",
          },
          {
            Header: "Education",
            accessor: "Education",
          },
        ],
      },
      {
        Header: "Details",

        columns: [
          {
            Header: "Affiliation",
            accessor: "Affiliation",
          },
        ],
      },
    ];
    return <Table columns={columns} data={this.props.data} />;
  }
}

function mapStateToProps(state) {
  return {
    data: state.fetchData.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: function () {
      dispatch(fetchData());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayData);
