import React, { useState } from 'react';
import Input from '../../components/Input';

import api from '../../services/api';

import './styles.css';

const Register: React.FC = () => {

  const valoresIniciais = {
    name: "",
    nascimento: "",
    cpf: "",
    celular: "",
    email: "",
    endereco: "",
    obs: ""
  }

  const [users, setUsers] = useState(valoresIniciais);

  function setUser(chave:any, valor:string){
    setUsers({...users, [chave]: valor})
  }

  function inputHandler (input: React.ChangeEvent<HTMLInputElement>) {
    setUser(
      input.target.getAttribute('id'),
      input.target.value
    )
  }

  function textareaHandler (input: React.ChangeEvent<HTMLTextAreaElement>) {
    setUser(
      input.target.getAttribute('id'),
      input.target.value
    )
  }

  function createUser() {
    api.post('/create', users)
  }

  return (
    <div className="registration-form">
      <main>        
        <form onSubmit={function handleSubmit(e){
          e.preventDefault();
        }}>
          <fieldset>
            <legend> Cadastro </legend>
              <Input name="name" label="Nome" type="text" required  onChange={inputHandler}/>
              <Input name="nascimento" label="Nascimento" type="date" required  onChange={inputHandler}/>
              <Input name="cpf" label="CPF" type="text" required  onChange={inputHandler}/>
              <Input name="celular" label="Celular" type="text" required  onChange={inputHandler}/>
              <Input name="email" label="E-mail" type="email" required onChange={inputHandler}/>
              <Input name="endereco" label="Endereço" type="text" required  onChange={inputHandler}/>
              <label>Observações</label>
              <textarea id="obs" onChange={textareaHandler} required ></textarea>
              <button onClick={createUser}>Registrar</button>
          </fieldset>
        </form>
      </main>
    </div>
  );
}

export default Register;