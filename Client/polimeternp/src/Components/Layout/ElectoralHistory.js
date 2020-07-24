import React, { Component } from "react";
import '../Styles/profile.css';
import '../Styles/electoralhistory.css';
import Table from './Table';
import fetchData from "../Redux/action";
import { connect } from "react-redux";


class ElectoralHistory extends Component {

  componentDidMount() {
    this.props.fetchData();
  }
  

  render() {
    const columns = [
          {
            Header: "YEAR",
            accessor: "Year",
          },
          {
            Header: "PARTY",
            accessor: "Party",
          },
          {
            Header: "CONSTITUENCY",
            accessor: "Constituency",
          },
          {
            Header: "VOTES(WINNER)",
            accessor: "Votes_Winner",
          },,
          {
            Header: "VOTES(FIRST RUNNER UP)",
            accessor: "Votes_Runner_Up",
          },
          {
            Header: "CANDIDATE(FIRST RUNNER UP",
            accessor: "Candidate",
          },
    ];

    


    return (
    <div>
       <lable className="componet-heading">ELECTORAL HISTORY</lable>
       <br/>
      <div className="table-row">
        <lable className="table-heading">HOUSE OF REPRESENTATIVE ( प्रतिनिधि सभा )</lable>
        <button className="button" data-toggle="collapse" data-target="#table">(collapse)</button>
        <div id="table"><Table columns={columns} data={this.props.data} /></div>
      </div>
      <br/>
      <div className="table-row">
        <lable className="table-heading">CONSTITUENT ASSEMBLY ELECTION</lable>
        <button className="button" data-toggle="collapse" data-target="#table2">(collapse)</button>
         <div id="table2"> <Table columns={columns} data={this.props.data} /></div>
      </div>
        
    </div>);
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

export default connect(mapStateToProps, mapDispatchToProps)(ElectoralHistory);
