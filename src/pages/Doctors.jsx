import Header from '../components/Header';
import Footer from '../components/Footer';

const Doctors = () => {
  return (
    <>
      <Header />
      
      <section className="doctors" id="doctors">
        <h1 className="heading"> our <span>doctors</span> </h1>

        <div className="box-container">
          <div className="box">
            <img src="image/doc.webp" alt="Doctor Jonny Joestar" />
            <h3>Jonny Joestar</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
          <div className="box">
            <img src="image/nihao.jpg" alt="Doctor Shang Chi" />
            <h3>Shang Chi</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
          <div className="box">
            <img src="image/kfc.jpeg" alt="Doctor Tyrone" />
            <h3>Tyrone</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
          <div className="box">
            <img src="image/kfc-lady.jpeg" alt="Doctor Nikki Minaj" />
            <h3>Nikki Minaj</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
          <div className="box">
            <img src="image/doc 2.jpeg" alt="Doctor Alfred" />
            <h3>Alfred</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
          <div className="box">
            <img src="image/doc-lady.jpeg" alt="Doctor Emily" />
            <h3>Emily</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Doctors;