import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Password reset link has been sent to your email!');
    navigate('/login');
  };

  return (
    <>
      <Header />
      <section className="login">
        <h1 className="heading">Reset Password</h1>
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email"
                className="box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button type="submit" className="btn">Send Reset Link</button>
          </form>
          <div className="login-links">
            <p>Remember your password? <Link to="/login">Login here</Link></p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default ForgotPassword; 