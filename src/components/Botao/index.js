import React, { Component } from "react";

class Botao extends Component {
  quebrarBiscoito() {
    alert("clicou");
  }

  render() {
    return (
      <div>
        <button onClick={this.quebrarBiscoito}>Quebrar biscoito!</button>
        <hr />
      </div>
    );
  }
}

export default Botao;
