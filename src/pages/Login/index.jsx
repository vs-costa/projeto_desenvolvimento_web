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

export default function Login() {

    let navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({ resolver: yupResolver(validationPost) });


    const addPost = (data) => service.post("/pessoa/login", data)
        .then((resposta) => {
            console.log("deu certo");
            console.log(resposta);
            localStorage.setItem("token", resposta.data);
            navigate("/");
        })
        .catch(() => {
            console.log(data);
            console.log("deu errado");
        })


    // const deletePessoa = (data) => axios.delete(`http://localhost:8080/api/pessoa/deletarLogico?email=${data.email}&password=${data.password}`)
    //     .then(() => {
    //         console.log("deu certo");
    //         console.log(data);
    //         navigate("/");
    //     })
    //     .catch(() => {
    //         console.log(data);
    //         console.log("deu errado");
    //     })

    const dropDown = useRef(null);
    const [isActive, setIsActive] = useState(false)
    const troca = () => setIsActive(!isActive)


    return (
        <div className="login">
            <Header />
            <main className="login-body">

                <div ref={dropDown} className={`card-post-${isActive}`}>
                    <h1>LOGIN</h1>
                    <hr />
                    <div className="card-body-post">
                        <form action="#" onSubmit={handleSubmit(addPost)}>

                            <div className="fields">
                                <label htmlFor="email">email</label>
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
                                <p className="error-message">{errors.password?.message}</p>
                            </div>

                            <div className="btn-post">
                                <button>Logar</button>
                            </div>
                        </form>
                    </div>
                </div>


                {/* <div ref={dropDown} className={`card-post-${!isActive}`}>
                    <h1>Deletar conta</h1>
                    <hr />
                    <div className="card-body-post">
                        <form action="#" onSubmit={handleSubmit(deletePessoa)}>

                            <div className="fields">
                                <label htmlFor="email  ">email</label>
                                <input
                                    type="text"
                                    id="email "
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

                            <div className="btn-post">
                                <button>Deletar</button>
                            </div>
                        </form>
                    </div>
                </div> */}

            </main>
            <div className="btn-troca">
                <button onClick={()=>navigate("/deletarConta")} className={`botao-${isActive}`}>{isActive ? "fazer Login" : "Deletar conta"}</button>
            </div>
            <Footer />
        </div>
    );
}
