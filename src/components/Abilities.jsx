import { SiDotnet,SiSqlite  } from "react-icons/si";
import { TbApi, TbBrandCSharp } from "react-icons/tb";
import { TbFileTypeSql } from "react-icons/tb";
import { TbRegex } from "react-icons/tb";

const Abilities = () => {
  return (
    <section className="abilities">
      <h2>Habilidades</h2>

      <ul>

        <li><TbBrandCSharp /> <p>C# é uma linguagem de programação moderna, orientada a objetos, criada pela Microsoft. Versátil e robusta, é amplamente utilizada para desenvolvimento web, desktop, jogos, APIs e aplicativos empresariais.</p></li>
        <li><SiDotnet /> <p>.NET é uma plataforma de desenvolvimento da Microsoft, multiplataforma e versátil. Permite criar aplicativos web, desktop, móveis, jogos e APIs, suportando diversas linguagens como C#, F# e VB.NET.</p></li>
        <li>< TbApi /><p>APIs (Interfaces de Programação de Aplicações) permitem a comunicação entre sistemas. Elas expõem funcionalidades, dados ou serviços de forma padronizada, facilitando integrações, automações e desenvolvimento de aplicações modernas.</p></li>
      </ul>
      <ul>

       
        <li><TbFileTypeSql /><p>SQL (Structured Query Language) é uma linguagem padrão para gerenciar e manipular bancos de dados relacionais. Facilita a criação, consulta, atualização e exclusão de dados com eficiência e precisão.</p></li>
        <li><SiSqlite  /><p>SQLite é um banco de dados relacional leve, baseado em arquivo, que não requer servidor. Ideal para aplicativos embarcados, oferece alta performance, portabilidade e simplicidade na configuração e uso.</p></li>
        <li><TbRegex  /><p>Regex (Expressões Regulares) é uma linguagem para correspondência de padrões em texto. Ideal para validação, busca e substituição, é poderosa e amplamente usada em diversas linguagens de programação.</p></li>

      </ul>
    </section>
  )
}

export default Abilities