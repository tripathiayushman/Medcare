import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <Link to="/"> <i className="fas fa-chevron-right"></i> home </Link>
          <Link to="/services"> <i className="fas fa-chevron-right"></i> services </Link>
          <Link to="/about"> <i className="fas fa-chevron-right"></i> about </Link>
          <Link to="/doctors"> <i className="fas fa-chevron-right"></i> doctors </Link>
          <Link to="/book"> <i className="fas fa-chevron-right"></i> book </Link>
          <Link to="/reviews"> <i className="fas fa-chevron-right"></i> review </Link>
          <Link to="/blogs"> <i className="fas fa-chevron-right"></i> blog </Link>
        </div>
        <div className="box">
          <h3>our services</h3>
          <a href="#"> <i className="fas fa-chevron-right"></i> dental </a>
          <a href="#"> <i className="fas fa-chevron-right"></i> cardiology </a>
          <a href="#"> <i className="fas fa-chevron-right"></i> diagnosis </a>
          <a href="#"> <i className="fas fa-chevron-right"></i> massage therapy </a>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <a href="#"> <i className="fas fa-phone"></i> +91 9090808060 </a>
          <a href="#"> <i className="fas fa-envelope"></i> hospital@mail.com </a>
          <a href="#"> <i className="fas fa-map-marker-alt"></i> Chennai, India </a>
        </div>
        <div className="box">
          <h3>follow us</h3>
          <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
          <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
          <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
          <a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;