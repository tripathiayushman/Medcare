import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    const type = localStorage.getItem('userType');
    if (email && type === 'doctor') {
      setUserEmail(email);
      setUserType(type);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  // Sample appointments data
  const appointments = [
    {
      id: 1,
      patientName: "Cardi B",
      date: "2024-03-20",
      time: "09:00 AM",
      type: "Check-up",
      status: "scheduled"
    },

    {
      id: 2,
      patientName: "Nikki Minaj",
      date: "2024-03-20",
      time: "10:30 AM",
      type: "Follow-up",
      status: "scheduled"
    },

  ];

  // Sample recent patients data
  const recentPatients = [
    {
      id: 1,
      name: "Tyrone Doe",
      lastVisit: "2024-03-15"
    },
    {
      id: 2,
      name: "Jane Watson",
      lastVisit: "2024-03-18"
    },
    {
      id: 3,
      name: "Mike Tyson",
      lastVisit: "2024-03-19"
    }
  ];

  return (
    <>
      <Header />
      <section className="dashboard">
        <h1 className="heading">Doctor Dashboard</h1>
        <div className="dashboard-container">
          <div className="info-box">
            <h2>Welcome, Doctor</h2>
            <p>Email: {userEmail}</p>
            <div className="doctor-stats">
              <div className="stat-item">
                <i className="fas fa-calendar-check"></i>
                <h3>Today's Appointments</h3>
                <p>3</p>
              </div>
              <div className="stat-item">
                <i className="fas fa-users"></i>
                <h3>Total Patients</h3>
                <p>45</p>
              </div>
              <div className="stat-item">
                <i className="fas fa-file-medical"></i>
                <h3>Pending Reports</h3>
                <p>2</p>
              </div>
            </div>
          </div>

          <div className="info-box appointments-box">
            <h2>Upcoming Appointments</h2>
            <div className="appointments-list">
              {appointments.map(appointment => (
                <div key={appointment.id} className="appointment-item">
                  <div className="appointment-header">
                    <h3>{appointment.patientName}</h3>
                    <span className={`status ${appointment.status}`}>
                      {appointment.status}
                    </span>
                  </div>
                  
                  <div className="appointment-details">
                    <p><i className="fas fa-calendar"></i> {appointment.date}</p>
                    <p><i className="fas fa-clock"></i> {appointment.time}</p>
                    <p><i className="fas fa-stethoscope"></i> {appointment.type}</p>
                  </div>
                  
                  <div className="appointment-actions">
                    <Link to="/patient-details" className="btn">
                      <i className="fas fa-eye"></i> View Details
                    </Link>
                    <Link to="/consultation" className="btn">
                      <i className="fas fa-notes-medical"></i> Start Consultation
                    </Link>
                    <br></br>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="info-box">
            <h2>Recent Patients</h2>
            <div className="recent-patients">
              {recentPatients.map(patient => (
                <div key={patient.id} className="patient-item">
                  <div className="patient-info">
                    <h3>{patient.name}</h3>
                    <p><i className="fas fa-calendar"></i> Last Visit: {patient.lastVisit}</p>
                  </div>
                  <Link to="/patient-details" className="btn">
                    <i className="fas fa-history"></i> View History
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DoctorDashboard;