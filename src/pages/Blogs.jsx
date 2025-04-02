import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <>
      <Header />
      
      <section className="blogs" id="blogs">
        <h1 className="heading"> our <span>blogs</span> </h1>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="/image/blog-img.png" alt="Blog about Hypertension" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#"> <i className="fas fa-calendar"></i> 1st May, 2021 </a>
                <a href="#"> <i className="fas fa-user"></i> by admin </a>
              </div>
              <h3> Decoding the Silent Killer: Understanding Hypertension</h3>
              <p>Hypertension, often called the "silent killer," affects millions worldwide. This blog post explores the causes, symptoms, and management strategies for high blood pressure, emphasizing the importance of early detection and lifestyle modifications for a healthier heart.</p>
              <Link to="/services" className="btn"> learn more <span className="fas fa-chevron-right"></span> </Link>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="/image/blog-img1.png" alt="Blog about Technology in Healthcare" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#"> <i className="fas fa-calendar"></i> 1st May, 2021 </a>
                <a href="#"> <i className="fas fa-user"></i> by admin </a>
              </div>
              <h3>The Evolving Role of Technology in Healthcare</h3>
              <p>From telemedicine to AI-powered diagnostics, technology is revolutionizing healthcare. This blog post examines the latest advancements in medical technology and their impact on patient care, accessibility, and the future of medicine.</p>
              <Link to="/services" className="btn"> learn more <span className="fas fa-chevron-right"></span> </Link>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="/image/blog-img2.png" alt="Blog about Preventive Care" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#"> <i className="fas fa-calendar"></i> 1st May, 2021 </a>
                <a href="#"> <i className="fas fa-user"></i> by admin </a>
              </div>
              <h3>The Power of Prevention: Simple Steps for a Healthier You</h3>
              <p>Preventive care is key to a long and healthy life. This blog post offers practical tips and actionable advice on how to incorporate healthy habits into your daily routine, focusing on nutrition, exercise, and stress management to boost your overall well-being.</p>
              <Link to="/services" className="btn"> learn more <span className="fas fa-chevron-right"></span> </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blogs;
