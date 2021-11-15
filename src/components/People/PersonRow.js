import React, { Component } from "react";

class PersonRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.objPerson.name}</td>
        <td>{this.props.objPerson.lastname}</td>
        <td>{this.props.objPerson.phone}</td>
        <td>{this.props.objPerson.email}</td>
      </tr>
    );
  }
}
export default PersonRow;
