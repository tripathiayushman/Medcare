import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Consultation = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const type = localStorage.getItem('userType');
    if (type !== 'doctor') {
      navigate('/login');
      return;
    }
    setUserType(type);
  }, [navigate]);

  return (
    <>
      <Header />
      <section className="consultation">
        <h1 className="heading">Patient Consultation</h1>
        <div className="consultation-container">
          {/* Patient Information Box */}
          <div className="info-box">
            <h2>Patient Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <label>Name:</label>
                <span>John Doe</span>
              </div>
              <div className="info-item">
                <label>Age:</label>
                <span>45</span>
              </div>
              <div className="info-item">
                <label>Gender:</label>
                <span>Male</span>
              </div>
              <div className="info-item">
                <label>Appointment Time:</label>
                <span>10:00 AM</span>
              </div>
              <div className="info-item">
                <label>Date:</label>
                <span>March 25, 2024</span>
              </div>
              <div className="info-item">
                <label>Reason for Visit:</label>
                <span>Regular Check-up</span>
              </div>
            </div>
          </div>

          {/* Medical History Box */}
          <div className="info-box">
            <h2>Medical History</h2>
            <div className="history-list">
              <div className="history-item">
                <h3>Previous Conditions</h3>
                <ul>
                  <li>Hypertension (2020)</li>
                  <li>Type 2 Diabetes (2019)</li>
                </ul>
              </div>
              <div className="history-item">
                <h3>Current Medications</h3>
                <ul>
                  <li>Blood Pressure Medication</li>
                  <li>Diabetes Medication</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Consultation Actions Box */}
          <div className="info-box">
            <h2>Consultation Actions</h2>
            <div className="action-buttons">
              <button className="btn">
                <i className="fas fa-notes-medical"></i> Start Consultation
              </button>
              <button className="btn">
                <i className="fas fa-file-medical"></i> View Medical Records
              </button>
              <button className="btn">
                <i className="fas fa-prescription"></i> Write Prescription
              </button>
              <button className="btn">
                <i className="fas fa-calendar-check"></i> Schedule Follow-up
              </button>
            </div>
          </div>

          {/* Communication Box */}
          <div className="info-box">
            <h2>Communication</h2>
            <div className="action-buttons">
              <button className="btn">
                <i className="fas fa-sms"></i> Send SMS
              </button>
              <button className="btn">
                <i className="fas fa-phone"></i> Call Patient
              </button>
              <button className="btn">
                <i className="fas fa-envelope"></i> Send Email
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Consultation; 