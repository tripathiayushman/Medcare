import Header from '../components/Header';
import Footer from '../components/Footer';

const PatientLogin = () => {
  return (
    <>
      <Header />
      
      <section className="login">
        <div className="login-container">
          <h1>Patient Login</h1>
          <form action="patient_dashboard.html" method="post">
            <input type="text" name="email" placeholder="Enter your Patient ID" className="box" required />
            <input type="password" name="password" placeholder="Enter your password" className="box" required />
            <button type="submit" className="btn">Login</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PatientLogin;