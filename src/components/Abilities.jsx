
import { DiReact, DiJavascript,DiNodejs,DiResponsive   } from "react-icons/di";
import { TbFileTypeSql } from "react-icons/tb";
import { ImAccessibility } from "react-icons/im";

const Abilities = () => {
  return (
    <section className="abilities">
        <h2>Habilidades</h2>
        <ul>
            <li>< DiJavascript /><p>JavaScript</p></li>
            <li><DiReact /> <p>React</p></li>
            <li><DiNodejs /><p>Node JS</p></li>
            
        </ul>
        <ul>
            <li>< DiResponsive  /><p>Responsividade</p></li>
            <li><ImAccessibility /> <p>Acessibilidade</p></li>
            <li><TbFileTypeSql/><p>SQL</p></li>
           
        </ul>
    </section>
  )
}

export default Abilities