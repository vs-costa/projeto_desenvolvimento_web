import { useForm } from "react-hook-form";
// import Header from "../../components/Header";
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
      {/* <Header /> */}

      <main>

      </main>
    </div>
  );
}
