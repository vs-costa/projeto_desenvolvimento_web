import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import Footer from '../../components/Footer'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
import '../../styles/style.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const validationPost = yup.object().shape({
  nome: yup.string().required("Preencha seu nome").max(100, "Até 100 caract."),
  email: yup.string().required("Preencha seu email").max(100, "Até 100 caract."),
  password: yup.string().required("Preencha sua senha").max(20, "Até 20 caract."),
  cpf: yup.string().required("Preencha seu CPF").max(11, "Até 11 caract."),
  cep: yup.string().required("Preencha seu CEP(só numeros)").max(8, "Até 8 caract."),
  complemento: yup.string().required("Preencha o complemento").max(100, "Até 100 caract."),
  numero: yup.string().required("Preencha o numero da casa").max(5, "Até 5 caract.")
});

export default function Registro() {

  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm({ resolver: yupResolver(validationPost) });

  const addPost = (data) => axios.post("http://localhost:8080/api/pessoa/registro", data)
    .then(() => {
      console.log("deu certo");
      navigate("/");
    })
    .catch(() => {
      console.log(data);
      console.log("deu errado");
    })

  return (
    <div className="registro">
      <Header />
      <main className="registro-body">
        <div className="card-post">
          <h1>CADASTRO</h1>
          <hr />
          <div className="card-body-post">
            <form action="#" onSubmit={handleSubmit(addPost)}>

              <div className="fields">
                <label htmlFor="nome  ">Nome</label>
                <input
                  type="text"
                  id="nome "
                  name="nome"
                  {...register("nome")}
                />
                <p className="error-message">{errors.nome?.message}</p>
              </div>

              <div className="fields">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  {...register("email")}
                />
                <p className="error-message">{errors.email?.message}</p>
              </div>

              <div className="fields">
                <label htmlFor="password">Senha</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  {...register("password")}
                />
                <p className="error-message">{errors.senha?.message}</p>
              </div>

              <div className="fields">
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  {...register("cpf")}
                />
                <p className="error-message">{errors.cpf?.message}</p>
              </div>

              <div className="fields">
                <label htmlFor="cep">CEP</label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  {...register("cep")}
                />
                <p className="error-message">{errors.cep?.message}</p>
              </div>

              <div className="fields">
                <label htmlFor="complemento">Complemento</label>
                <input
                  type="text"
                  id="complemento"
                  name="complemento"
                  {...register("complemento")}
                />
                <p className="error-message">{errors.complemento?.message}</p>
              </div>

              <div className="fields">
                <label htmlFor="numero">Número</label>
                <input
                  type="text"
                  id="numero"
                  name="numero"
                  {...register("numero")}
                />
                <p className="error-message">{errors.numero?.message}</p>
              </div>


              <div className="btn-post">
                <button>Cadastrar</button>
              </div>

            </form>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
