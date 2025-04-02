import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <Header />
      
      <section className="services" id="services">

        <h1 className="heading"> our <span>services</span> </h1>

        <div className="box-container">

            <div className="box">
                <i className="fas fa-notes-medical"></i>
                <h3>free checkups</h3>
                <p>Regular checkups are essential for maintaining good health and preventing potential health issues. We offer free checkups to ensure your well-being.</p>
                <Link to="/about" className="btn"> learn more <span className="fas fa-chevron-right"></span> </Link>
            </div>

            <div className="box">
                <i className="fas fa-ambulance"></i>
                <h3>24/7 ambulance</h3>
                <p> Emergencies can happen at any time. Our 24/7 ambulance service ensures prompt medical assistance whenever you need it.</p>
                <Link to="/about" className="btn"> learn more <span className="fas fa-chevron-right"></span> </Link>
            </div>
            
            <div className="box">
                <i className="fas fa-user-md"></i>
                <h3>expert doctors</h3>
                <p>Our team comprises highly skilled and experienced doctors dedicated to providing the best possible care for your health concerns.</p>
                <Link to="/about" className="btn"> learn more <span className="fas fa-chevron-right"></span> </Link>
            </div>
            <div className="box">
                <i className="fas fa-procedures"></i>
                <h3>bed facility</h3>
                <p> We provide comfortable and well-equipped bed facilities for patients requiring hospitalization, ensuring a restful and conducive environment for recovery.</p>
                <Link to="/about" className="btn"> learn more <span className="fas fa-chevron-right"></span> </Link>
            </div>
            <div className="box">
                <i className="fas fa-heartbeat"></i>
                <h3>total care</h3>
                <p>We are committed to providing comprehensive and holistic care, addressing all your health needs under one roof. Your well-being is our priority.</p>
                <Link to="/about" className="btn"> learn more <span className="fas fa-chevron-right"></span> </Link>
            </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Services;
