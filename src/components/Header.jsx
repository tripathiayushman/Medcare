import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Check if user is logged in
    const email = localStorage.getItem('userEmail');
    const type = localStorage.getItem('userType');
    if (email) {
      setIsLoggedIn(true);
      setUserEmail(email);
      setUserType(type || 'patient');
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userType');
    setIsLoggedIn(false);
    setUserType('');
    setUserEmail('');
    navigate('/');
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <i className="fas fa-heartbeat"></i> medcare.
      </Link>

      <nav className="navbar">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/services">services</Link>
        <Link to="/doctors">doctors</Link>
        <Link to="/reviews">reviews</Link>
        <Link to="/blogs">blogs</Link>
      </nav>

      <div className="auth-buttons">
        {isLoggedIn ? (
          <>
            <span className="user-info">
              {userEmail} ({userType})
            </span>
            <button onClick={handleLogout} className="btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn">Login</Link>
            <Link to="/signup" className="btn">Sign Up</Link>
          </>
        )}
      </div>

      <div id="menu-btn" className="fas fa-bars"></div>
    </header>
  );
};

export default Header;