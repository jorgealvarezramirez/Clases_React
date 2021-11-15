import React, { Component } from "react";
const form = {
  name: "",
  lastname: "",
  phone: "",
  email: "",
};
class PersonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: form,
    };
    console.log("Props-> ", this.props.mensaje);
    // Biendear
    // this.handlerName = this.handlerName.bind(this);
    // this.handlerLastname = this.handlerLastname.bind(this);
    // this.handlerPhone = this.handlerPhone.bind(this);
    // this.handlerEmail = this.handlerEmail.bind(this);
    this.handlerValue = this.handlerValue.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  // Manejador de eventos
  handlerName(e) {
    console.log("Tecleo......!!!");
    console.log("Evento---> " + e);
    console.log("Valor-> ", e.target.value);
    // Modificar rl valor del estado "nombre"
    this.setState({
      name: e.target.value,
    });
  }

  // handlerLastname(e) {
  //   this.setState({
  //     lastname: e.target.value,
  //   });
  // }
  // handlerPhone(e) {
  //   this.setState({
  //     phone: e.target.value,
  //   });
  // }
  // handlerEmail(e) {
  //   this.setState({
  //     email: e.target.value,
  //   });
  // }
  handlerValue(e) {
    let form = this.state.form;
    this.setState({
      form: { ...form, [e.target.name]: e.target.value },
    });

    // switch (e.target.name) {
    //   case "name":
    //     this.setState({ name: e.target.value });
    //     break;
    //   case "lastname":
    //     this.setState({ lastname: e.target.value });
    //     break;
    //   case "phone":
    //     this.setState({ phone: e.target.value });
    //     break;
    //   case "email":
    //     this.setState({ email: e.target.value });
    //     break;
    //   default:
    //     break;
    // }
    console.log("this.state");
  }
  handlerSubmit(e) {
    console.log(e);
    e.preventDefault();
    // console.table(this.state.form);
    let objPerson = this.state.form;
    this.props.addPerson(objPerson);
    this.setState({
      form: form,
    });
  }
  render() {
    return (
      <>
        <form onSubmit={this.handlerSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={this.state.form.name}
            onChange={this.handlerValue}
            placeholder="Escribe tu nombre"
          />

          {/* {this.state.name} */}

          <label htmlFor="lastname">Apellido:</label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            value={this.state.form.lastname}
            onChange={this.handlerValue}
            placeholder="Escribe tu apellido"
          />
          <br />
          <br />
          {/* {this.state.lastname} */}

          <label htmlFor="phone">Teléfono:</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={this.state.form.phone}
            onChange={this.handlerValue}
            placeholder="Escribe tu teléfono"
          />

          {/* {this.state.phone} */}

          <label htmlFor="email">Correo:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={this.state.form.email}
            onChange={this.handlerValue}
            placeholder="Escribe tu correo"
          />
          <br />
          <br />
          {/* {this.state.email} */}
          <br />
          <button type="submit">Guardar</button>
          <br />
        </form>
      </>
    );
  }
}

export default PersonForm;
