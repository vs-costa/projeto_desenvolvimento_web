import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";

const validationPost = yup.object().shape({
  nome: yup.string().required("Preencha seu nome").max(100, "Até 100 caract."),
  email: yup.string().required("Preencha seu email").max(100, "Até 100 caract."),
  senha: yup.string().required("Preencha sua senha").max(20, "Até 20 caract."),
  cpf: yup.string().required("Preencha seu CPF").max(11, "Até 11 caract."),
  cep: yup.string().required("Preencha seu CEP(só numeros)").max(8, "Até 8 caract."),
  complemento: yup.string().required("Preencha o complemento").max(100, "Até 100 caract."),
  numero: yup.string().required("Preencha o numero da casa").max(5, "Até 5 caract.")
});

export default function Conta() {
  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm({ resolver: yupResolver(validationPost) });

  const addPost = (data) => console.log(data);
  return (
    <div>
      <Header />

      <main>
        <div className="card-post">
          <h1>Cadastro</h1>
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
                <label htmlFor="senha">Senha</label>
                <input
                  type="text"
                  id="senha"
                  name="senha"
                  {...register("senha")}
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
    </div>
  );
}
