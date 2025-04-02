import Header from '../components/Header';
import Footer from '../components/Footer';

const DoctorLogin = () => {
  return (
    <>
      <Header />
      
      <section className="login">
        <div className="login-container">
          <h1>Doctor Login</h1>
          <form action="doctor_dashboard.html" method="post">
            <input type="text" name="doctor_id" placeholder="Enter Doctor ID" className="box" required />
            <input type="password" name="password" placeholder="Enter Password" className="box" required />
            <button type="submit" className="btn">Login</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DoctorLogin;