import Header from '../components/Header';
import Footer from '../components/Footer';

const Reviews = () => {
  return (
    <>
      <Header />
      
      <section className="review" id="review">
        <h1 className="heading"> client's <span>review</span> </h1>

        <div className="box-container">
          <div className="box">
            <img src="image/review1.jpeg" alt="Review by Evelyn" />
            <h3>Evelyn</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">MedCare Hospital exceeded all my expectations! From the moment I walked in, the staff was incredibly warm and welcoming. I was particularly impressed by Dr. [Doctor's Name], whose expertise and compassionate approach made me feel completely at ease. The nurses were attentive and caring, and the facilities were spotless. I'm so grateful for the excellent care I received at MedCare. Highly recommend this hospital to anyone in Chennai.</p>
          </div>
          <div className="box">
            <img src="image/review2.jpeg" alt="Review by Dio Brando" />
            <h3>Dio Brando</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">As someone who's not a fan of hospitals, I was pleasantly surprised by my experience at MedCare. The hospital is modern and well-equipped, with state-of-the-art technology. The entire process, from registration to discharge, was remarkably efficient. I especially appreciated the online appointment system and the clear communication from the staff. MedCare sets a new standard for healthcare in Chennai!</p>
          </div>
          <div className="box">
            <img src="image/review3.avif" alt="Review by Rohan Kishibe" />
            <h3>Rohan Kishibe</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">I recently brought my elderly mother to MedCare for a [Specific Condition/Treatment], and I can't thank the team enough for their outstanding care. The doctors were patient and explained everything clearly, and the nurses went above and beyond to ensure my mother's comfort. Seeing her recover so quickly was a testament to the quality of care at MedCare. I highly recommend this hospital to anyone looking for compassionate and effective treatment in Chennai.</p>
          </div>
          <div className="box">
            <img src="image/review4.jpeg" alt="Review by Mia" />
            <h3>Mia</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">Very good hospital and good service. Overall experience was good but the waiting time must be improved. Overall treatment is good. The services were good and the staff and doctors were excellent in all ways.</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Reviews;