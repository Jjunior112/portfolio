import { SiDotnet, SiDocker } from "react-icons/si";
import { FaCloudArrowUp } from "react-icons/fa6";
import { DiMsqlServer, DiDotnet } from "react-icons/di";
import { BiLogoSpringBoot,BiLogoPostgresql } from "react-icons/bi";
const Abilities = () => {
  return (
    <section className="abilities">
      <h2>Habilidades</h2>{" "}
      <ul>
        {" "}
        <li>
          <BiLogoSpringBoot />{" "}
          <p>
            Spring Boot é um framework Java que facilita o desenvolvimento de aplicações web e microsserviços, com configuração simplificada, suporte a APIs REST, segurança, bancos de dados e integração com serviços em nuvem.{" "}
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
          <BiLogoPostgresql />{" "}
          <p>
           PostgreSQL é um sistema de gerenciamento de banco de dados relacional, open source, robusto e extensível. Suporta transações ACID, JSON, procedures, e é amplamente utilizado em aplicações web e corporativas.{" "}
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
          <FaCloudArrowUp />{" "}
          <p>
            Serviços em nuvem permitem hospedar e escalar aplicações com alta disponibilidade. Plataformas como AWS e Azure oferecem soluções para computação, armazenamento, banco de dados, segurança e inteligência artificial.{" "}
          </p>{" "}
        </li>{" "}
      </ul>{" "}
    </section>
  );
};

export default Abilities;
