import React from "react";
import ReactDOM from "react-dom";
import Header from "../../components/Header";

export default function NossoServico() {
  return (
    <div>
      <Header />
      <div>
        <h2>Nosso Servico</h2>

        <p>
          Seja para uma viagem de negócios ou uma escapadela de fim de semana, a
          nossa locadora de veículos está aqui para tornar a sua jornada mais
          conveniente e confortável. Com uma ampla variedade de opções, desde
          carros compactos como o carro a vapor e carros ágeis e espaçosos como
          o carro a prova de balas, temos o veículo perfeito para atender às
          suas necessidades. Entendemos que as necessidades de cada cliente são
          únicas. Por isso, oferecemos opções flexíveis de locação, desde
          aluguel por dia até contratos de longo prazo. Seja para uma viagem
          curta ou uma estadia prolongada em uma nova cidade, estamos preparados
          para atender às suas necessidades.
        </p>
      </div>

      <div>
        <h2>Perguntas Frequentes</h2>

        <ul class="perguntas-respostas">
          <li>
            <h3>Quais são os documentos necessários para alugar um veículo?</h3>
            <h1 />
            RESPOSTA: Você precisará apresentar sua carteira de motorista
            válida, documentos de identificação e um cartão de crédito.
          </li>
          <br />
          <br />
          <li>
            <h3>Qual é a política de combustível da locadora?</h3>
            <h1 />
            RESPOSTA: O veículo deve ser devolvido com o tanque cheio.
            Oferecemos a opção de comprar o combustível da locadora, se
            preferir.
          </li>
          <br />
          <br />
          <li>
            <h3>Quais são as opções de seguro disponíveis?</h3>
            <h1 />
            RESPOSTA: Oferecemos diferentes opções de seguro, incluindo
            cobertura total, danos a terceiros e proteção contra roubo. Detalhes
            estão disponíveis no balcão.
          </li>
          <br />
          <br />
          <li>
            <h3>Qual é a política de quilometragem?</h3>
            <h1 />
            RESPOSTA: Oferecemos opções com quilometragem limitada e também com
            quilometragem ilimitada. Por favor, escolha a que melhor atenda às
            suas necessidades.
          </li>
          <br />
          <br />
          <li>
            <h3>Como funciona o processo de devolução do veículo?</h3>
            <h1 />
            RESPOSTA: O veículo deve ser devolvido no mesmo local onde foi
            retirado, durante nosso horário de funcionamento. Faremos uma
            inspeção para garantir que tudo esteja em ordem.
          </li>
          <br />
          <br />
          <li>
            <h3>
              O que devo fazer em caso de emergência ou avaria durante o
              aluguel?
            </h3>
            <h1 />
            RESPOSTA: Em caso de emergência ou avaria, entre em contato com
            nosso número de assistência disponível 24 horas. Forneceremos as
            orientações necessárias.
          </li>
        </ul>
      </div>
    </div>
  );
}
