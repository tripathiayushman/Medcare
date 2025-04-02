import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Header />
      
      <section className="home" id="home">
        <div className="image">
          <img src="/image/home-img.png" alt="" />
        </div>

        <div className="content">
          <h3>stay safe, stay healthy</h3>
          <p>AN APPLE A DAY KEEPS THE DOCTOR AWAY.🍎</p>
          <Link to="/login" className="btn"> contact us <span className="fas fa-chevron-right"></span> </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;