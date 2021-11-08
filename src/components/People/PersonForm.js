import React, { Component } from "react";

class PersonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "Hola Mundo!!!!!",
    };
  }
  // Manejador de eventos
  manejadorNombre() {
    console.log("Click......!!!");
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={this.state.nombre}
            onChange={this.manejadorNombre}
            placeholder="Escribe tu nombre"
          />
          <br />
          <br />
          {this.state.nombre}
        </form>
      </>
    );
  }
}

export default PersonForm;
