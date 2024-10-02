import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.home}>
          <div className={styles.apresentacao}>
            <p>
              Olá, sou <br />
              <span>Deyvid Eugênio</span> <br />
              Aluno de ADS
            </p>
            <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais!
            </Link>
          </div>
          <figure>
            <img
              className={styles.img_home}
              src="/developer-blue.svg"
              alt="Imagem de Home"
            />
          </figure>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
