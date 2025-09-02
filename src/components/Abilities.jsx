import { SiDotnet, SiDocker, SiNodedotjs } from "react-icons/si";
import { FaCloudArrowUp } from "react-icons/fa6";
import { DiDotnet, DiMongodb } from "react-icons/di";
import { BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi";
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
          <SiNodedotjs />{" "}
          <p>
            Node.js é um ambiente de execução JavaScript,
            multiplataforma e eficiente. Permite criar aplicativos web, desktop,
            móveis, APIs e sistemas em tempo real, utilizando JavaScript tanto no
            frontend quanto no backend, com vasto ecossistema de bibliotecas e
            suporte da comunidade.{" "}
          </p>{" "}
        </li>{" "}
        <li>
          <DiMongodb />{" "}
          <p>
            MongoDB é um banco de dados NoSQL,
            multiplataforma e escalável. Permite armazenar dados em formato
            JSON-like (BSON), suportando consultas flexíveis, replicação,
            sharding e alto desempenho, sendo amplamente utilizado em
            aplicações modernas e distribuídas.{" "}
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
