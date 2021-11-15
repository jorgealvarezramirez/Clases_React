import React, { Component } from "react";
import PersonForm from "./PersonForm";
import PersonTable from "./PersonTable";

// const people = [];

class PersonApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
    this.addPerson = this.addPerson.bind(this);
  }

  addPerson(objPerson) {
    this.setState({ people: [...this.state.people, objPerson] });
  }

  render() {
    return (
      <>
        <h1>Regitro Personas - Componente Basado en Clase</h1>
        <PersonForm
          addPerson={this.addPerson}
          mensaje="Este es un mensaje desde PersonApp"
        />
        <PersonTable people={this.state.people} />
      </>
    );
  }
}

export default PersonApp;
