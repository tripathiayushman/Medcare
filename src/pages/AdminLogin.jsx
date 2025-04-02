import Header from '../components/Header';
import Footer from '../components/Footer';

const AdminLogin = () => {
  return (
    <>
      <Header />
      
      <section className="login">
        <div className="login-container">
          <h1>Admin Login</h1>
          <form action="admin_dashboard.html" method="post">
            <input type="text" name="admin_id" placeholder="Enter Admin ID" className="box" required />
            <input type="password" name="password" placeholder="Enter Password" className="box" required />
            <button type="submit" className="btn">Login</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AdminLogin;