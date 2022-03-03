import React, { Component } from 'react';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class PersonalForm extends Component {
  render() {
    return (
      <fieldset>
            <legend>Dados pessoais</legend>
            <div className="container">
              Nome:
              <input
                type="name"
                name="name"
                maxLength="40"
                required
              />
            </div>
            <div className="container">
              Email:
              <input
                type="email"
                name="email"
                maxLength="50"
                required
              />
            </div>
            <div className="container">
              CPF:
              <input
                type="text"
                name="cpf"
                maxLength="11"
                required
              />
            </div>
            <div className="container">
              Endereço:
              <input
                type="text"
                name="address"
                maxLength="200"
                required
              />
            </div>
            <div className="container">
              Cidade:
              <input
                type="text"
                name="city"
                maxLength="28"
                required
                
              />
            </div>
            <div className="container">
              Estado:
              <select
                name="countryState"
                required
              >
                <option value="">Selecione</option>
                {
                  states.map((value, key) => (
                    <option key={ key }>{ value }</option>
                  ))
                }
              </select>
            </div>
            <div className="container">
              <label htmlFor="house">
                <input
                  type="radio"
                  id="house"
                  name="addressType"
                  value="house"  
                />
                Casa
              </label>
              <label htmlFor="apart">
                <input
                  type="radio"
                  id="apart"
                  name="addressType"
                  value="apartment"
                />
                Apartamento
              </label>
            </div>
          </fieldset>
    );
  }
}
export default PersonalForm;