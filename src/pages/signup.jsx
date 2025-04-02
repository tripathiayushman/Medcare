import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'patient'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration successful!');
    navigate('/login');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Header />
      <section className="login">
        <h1 className="heading">Create Account</h1>
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <select
                name="userType"
                className="box"
                value={formData.userType}
                onChange={handleInputChange}
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="box"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="box"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="box"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="box"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="btn">Sign Up</button>
          </form>

          <div className="login-links">
            <p>Already have an account? <Link to="/login">Login here</Link></p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup; 