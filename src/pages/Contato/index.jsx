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
  email: yup.string().required("Preencha seu email").max(100, "Até 100 caract."),
  password: yup.string().required("Preencha sua senha").max(100, "Até 100 caract.")
});

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm({ resolver: yupResolver(validationPost) });
  

  try{
    const response = () => axios.post('localhost:8080/api/pessoa/mensagem', formData);
    console.log('Resposta da API:', response.data);

  } catch(error) {
    console.error('Erro ao enviar formulario', error);
  }


const handleChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value });
};



  return (
    <div>
      <Header />
      <main>
        <div className='card-post'>
          <h2>Formulário</h2>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className='fields'>

              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                {...register("nome")}
                // value={FormData.nome}
                // onChange={handleChange} 
                />

            </div>

            <div className='fields'>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                {...register("email")}
                // value={FormData.email}
                // onChange={handleChange} 
                />
            </div>

            <div className='fields'>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                cols="30"
                rows="10"
                type="text"
                id="mensagem"
                {...register("mensagem")}
                // value={FormData.mensagem}
                // onChange={handleChange}
                />
            </div>
            <div className="btn-post">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </main>
      <Footer/>
    </div>
  );
  };