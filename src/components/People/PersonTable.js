import React, { Component } from "react";
import PersonRow from "./PersonRow";

const styleTable = {
  width: "100%",
};
class PersonTable extends Component {
  constructor(props) {
    super(props);
    // console.table(this.props.people);
  }
  render() {
    return (
      <>
        <h2> Lista De Usuarios Registrados</h2>
        <table style={styleTable}>
          {/* Cabecera de la tabla */}
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
              <th>Correo</th>
            </tr>
          </thead>
          {/* Cuerpo de la tabla */}
          <tbody>
            {/* Iterar el arreglo people que se encuentra en las props (de PersonApp) */}
            {this.props.people.length > 0 ? (
              this.props.people.map((objPerson) => {
                return (
                  <PersonRow objPerson={objPerson} key={objPerson.email} />
                );
              })
            ) : (
              <tr>
                <td colSpan="4">No hay datos para mostrar</td>
              </tr>
            )}
          </tbody>
        </table>
      </>
    );
  }
}
export default PersonTable;
