import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Contatos.module.css";
import { GoMail } from "react-icons/go";
import {
  BsWhatsapp,
  BsInstagram,
  BsYoutube,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

function Contatos() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.contatos}>
          <h2>Contatos com o Bunitão</h2>
          <h3>Entre em contato</h3>
          <p>Para que possamos conversar mais sobre.</p>

          <div className={styles.icones}>
            <a
              href="mailto:deyvid.ae@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoMail className={styles.icone} />
            </a>

            <a
              href="https://wa.me/<+5535>"
              target="_blank"
              rel="noopener 
            noreferrer"
            >
              <BsWhatsapp className={styles.icone} />
            </a>
            <a
              href="https://instagram.com/deyvid.eugenio/"
              target="_blank"
              rel="noopener 
            noreferrer"
            >
            <BsInstagram className={styles.icone} />
            </a>
            
            <a
              href="https://www.youtube.com/@prof.deyvideugenio9646"
              target="_blank"
              rel="noopener 
            noreferrer"
            >
            <BsYoutube className={styles.icone} />
            </a>
            <a
              href="https://github.com/deyvideugenio"
              target="_blank"
              rel="noopener 
            noreferrer"
            >
            <BsGithub className={styles.icone} />
            </a>
            <a
              href="https://www.linkedin.com/in/deyvid-eug%C3%AAnio-5b828642/"
              target="_blank"
              rel="noopener 
            noreferrer"
            >
            <BsLinkedin className={styles.icone} />
            </a>

          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Contatos;
