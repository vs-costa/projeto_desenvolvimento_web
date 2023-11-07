import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import Footer from '../../components/Footer'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import service from "../../service/services";

const validationPost = yup.object().shape({
  nome: yup.string().required("Preencha seu nome").max(100, "Até 100 caract."),
  email: yup.string().required("Preencha seu email").max(100, "Até 100 caract."),
  mensagem: yup.string().required("Preencha sua mensagem").max(255, "Até 255 caract.")
});

export default function Contato() {

  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm({ resolver: yupResolver(validationPost) });



  const mandar = (formData) => axios.post(`http://localhost:8080/api/pessoa/mensagem?nome=${formData.nome}&email=${formData.email}&mensagem=${formData.mensagem}`)
    .then(() => {
      console.log('deu certo');
    }).catch(() => {
      console.log(formData);
      console.error('Erro ao enviar formulario');
    })

  return (
    <div>
      <Header />
      <main>
        <div className='card-post'>
          <h2>Formulário</h2>
          <hr />
          <form action="#" onSubmit={handleSubmit(mandar)}>

            <div className='fields'>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                {...register("nome")}
              />
              <p className="error-message">{errors.nome?.message}</p>
            </div>

            <div className='fields'>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email")}
              />
              <p className="error-message">{errors.email?.message}</p>

            </div>

            <div className='fields'>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                cols="30"
                rows="10"
                type="text"
                id="mensagem"
                name="mensagem"
                {...register("mensagem")}
              />
              <p className="error-message">{errors.mensagem?.message}</p>
            </div>
            <div className="btn-post">
              <button>Enviar</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};