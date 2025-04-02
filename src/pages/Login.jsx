import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { validateLoginForm } from '../utils/validation';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'patient'
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateLoginForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Store user data in localStorage
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userType', formData.userType);
      
      // Simulate successful login
      // In a real app, you would verify credentials with your backend
      switch (formData.userType) {
        case 'patient':
          navigate('/patient-dashboard');
          break;
        case 'doctor':
          navigate('/doctor-dashboard');
          break;
        case 'admin':
          navigate('/admin-dashboard');
          break;
        default:
          navigate('/patient-dashboard');
      }
    }
  };

  return (
    <>
      <Header />
      
      <section className="login">
        <h1 className="heading">Login</h1>
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
                type="email"
                name="email"
                placeholder="Email"
                className={`box ${errors.email ? 'error' : ''}`}
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={`box ${errors.password ? 'error' : ''}`}
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && <div className="error-message">{errors.password}</div>}
            </div>

            <button type="submit" className="btn">Login</button>
          </form>

          <div className="login-links">
            <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
            <p>Forgot your password? <Link to="/forgot-password">Reset it here</Link></p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;