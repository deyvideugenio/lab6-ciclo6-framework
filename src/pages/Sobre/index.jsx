import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Sobre.module.css";
import avatar from "./images/avatar.png";
import html from "./images/icon-html.png";
import css from "./images/icon-css.png";
import js from "./images/icon-js.png";
import react from "./images/icon-react.png";
import node from "./images/icon-node.png";
import sql from "./images/icon-sql.png";

function Sobre() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.sobre}>
          <div className={styles.bio}>
            <img src={avatar} alt="Avatar" className={styles.avatar} />
            <div className={styles.textos}>
                <h1>Sobre</h1>
                <p>
                    Me chamo <strong>Deyvid Eugênio</strong>, sou um professor de Física do Ensino Médio e estudante de ADS.
                </p>
                <p>
                    Trabalho como professor desde 2015.
                </p>
                <p>
                    Estou aqui para compartilhar conhecimentos e ajudar a melhorar a vida das pessoas.
                </p>
                <p>
                    Estou aprendendo diversas Tecnologias durante o curso.
                </p>
            </div>
          </div>

          <div className={styles.techs}>
            <h2>Tecnologias utilizadas</h2>
            <div className={styles.icones}>
                <img src={html} alt="Ícone do HTML" />
                <img src={css} alt="Ícone do CSS" />
                <img src={js} alt="Ícone do JS" />
                <img src={react} alt="Ícone do React" />
                <img src={node} alt="Ícone do node" />
                <img src={sql} alt="Ícone do SQL" />
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Sobre;
