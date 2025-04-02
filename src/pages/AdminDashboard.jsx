import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    const type = localStorage.getItem('userType');
    if (email && type === 'admin') {
      setUserEmail(email);
      setUserType(type);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <section className="dashboard">
        <h1 className="heading">Admin Dashboard</h1>
        <div className="dashboard-container">
          <div className="info-box">
            <h2>Welcome, Admin</h2>
            <p>Email: {userEmail}</p>
            <div className="dashboard-actions">
              <Link to="/admin/AddDoctor" className="btn">
                <i className="fas fa-user-md"></i> Add New Doctor
              </Link>
              <Link to="/admin/AddPatient" className="btn">
                <i className="fas fa-user-plus"></i> Add New Patient
              </Link>
              <Link to="/admin/ManageDoctors" className="btn">
                <i className="fas fa-user-md"></i> Manage Doctors
              </Link>
              <Link to="/admin/ManagePatients" className="btn">
                <i className="fas fa-users"></i> Manage Patients
              </Link>
            </div>
          </div>

          <div className="info-box">
            <h2>System Overview</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <i className="fas fa-user-md"></i>
                <h3>Total Doctors</h3>
                <p>15</p>
              </div>
              <div className="stat-item">
                <i className="fas fa-users"></i>
                <h3>Total Patients</h3>
                <p>150</p>
              </div>
              <div className="stat-item">
                <i className="fas fa-calendar-check"></i>
                <h3>Total Appointments</h3>
                <p>45</p>
              </div>
              <div className="stat-item">
                <i className="fas fa-clock"></i>
                <h3>Pending Approvals</h3>
                <p>3</p>
              </div>
            </div>
          </div>

          <div className="info-box">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              <div className="activity-item">
                <i className="fas fa-user-plus"></i>
                <div className="activity-content">
                  <p>New doctor registration: Dr. Sarah Wilson</p>
                  <span className="timestamp">2 hours ago</span>
                </div>
              </div>
              <div className="activity-item">
                <i className="fas fa-calendar-plus"></i>
                <div className="activity-content">
                  <p>Patient appointment scheduled</p>
                  <span className="timestamp">3 hours ago</span>
                </div>
              </div>
              <div className="activity-item">
                <i className="fas fa-cog"></i>
                <div className="activity-content">
                  <p>System maintenance completed</p>
                  <span className="timestamp">5 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminDashboard;