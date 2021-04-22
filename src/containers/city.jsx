import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  };

  render() {
    return (
      <li className="list-group-item" onClick={this.handleClick}>
        {this.props.city.name}
      </li>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     activeCity: state.activeCity,
//   };
// }
import { selectCity } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
