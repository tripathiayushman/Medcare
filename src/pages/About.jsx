import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Header />
      
      <section className="about" id="about">
        <h1 className="heading"> <span>about</span> us </h1>
        <div className="row">
          <div className="image">
            <img src="/image/about-img.webp" alt="" />
          </div>
          <div className="content">
            <h3>we take care of your healthy life</h3>
            <p>At MedCare Hospital in Chennai, we believe in providing more than just medical treatment; we offer comprehensive care. Our state-of-the-art facility is equipped with the latest technology, allowing our experienced doctors and nurses to deliver cutting-edge treatments across a wide range of specialties. We are committed to creating a comfortable and supportive environment for our patients, ensuring their journey to recovery is as smooth as possible. Serving the Chennai community is our privilege, and we are dedicated to improving the health and well-being of every individual we serve.</p>
            <Link to="/services" className="btn"> learn more <span className="fas fa-chevron-right"></span> </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;