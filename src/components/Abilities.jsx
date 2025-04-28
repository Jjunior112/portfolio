import { SiDotnet, SiRabbitmq, SiDocker } from "react-icons/si";
import { DiMsqlServer, DiDotnet } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
const Abilities = () => {
  return (
    <section className="abilities">
      <h2>Habilidades</h2>{" "}
      <ul>
        {" "}
        <li>
          <TbBrandCSharp />{" "}
          <p>
            C# é uma linguagem de programação moderna, orientada a objetos,
            criada pela Microsoft. Versátil e robusta, é amplamente utilizada
            para desenvolvimento web, desktop, jogos, APIs e aplicativos
            empresariais.{" "}
          </p>{" "}
        </li>{" "}
        <li>
          <SiDotnet />{" "}
          <p>
            .NET é uma plataforma de desenvolvimento da Microsoft,
            multiplataforma e versátil. Permite criar aplicativos web, desktop,
            móveis, jogos e APIs, suportando diversas linguagens como C#, F# e
            VB.NET.{" "}
          </p>{" "}
        </li>{" "}
        <li>
          <DiMsqlServer />{" "}
          <p>
            SQL Server é um banco de dados relacional da Microsoft, ideal para
            aplicações empresariais. Oferece desempenho, segurança, suporte a
            transações, e funciona em ambientes locais, híbridos e em nuvem.{" "}
          </p>{" "}
        </li>{" "}
      </ul>{" "}
      <ul>
        {" "}
        <li>
          <DiDotnet />{" "}
          <p>
            Entity Framework é um ORM da Microsoft para .NET que facilita o
            mapeamento de objetos para bancos de dados relacionais, permitindo
            consultas e manipulação de dados usando C# em vez de SQL.{" "}
          </p>{" "}
        </li>{" "}
        <li>
          <SiDocker />{" "}
          <p>
            Docker é uma plataforma que permite criar, empacotar e executar
            aplicações em containers isolados, garantindo portabilidade,
            consistência e facilidade no desenvolvimento, teste e implantação em
            diferentes ambientes.{" "}
          </p>{" "}
        </li>{" "}
        <li>
          <SiRabbitmq />{" "}
          <p>
            RabbitMQ é um broker de mensagens que permite a comunicação
            assíncrona entre sistemas distribuídos, organizando o envio,
            recebimento e roteamento de mensagens entre produtores e
            consumidores de forma confiável.{" "}
          </p>{" "}
        </li>{" "}
      </ul>{" "}
    </section>
  );
};

export default Abilities;
