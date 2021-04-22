import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import City from "./city";
import { setCities } from "../actions";

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <ul className="list-group cities">
        {this.props.cities.map((city, index) => {
          return <City key={city.name} city={city} />;
        })}
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCities }, dispatch);
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
