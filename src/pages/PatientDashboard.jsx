import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { validateBookingForm } from '../utils/validation';

const PatientDashboard = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [isPatient, setIsPatient] = useState(false);
  const [patientData, setPatientData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    department: '',
    symptoms: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    const type = localStorage.getItem('userType');
    if (email && type === 'patient') {
      setUserEmail(email);
      setUserType(type);
      setIsPatient(true);
      // Set static patient data
      setPatientData({
        name: "Alice",
        age: 28,
        weight: "65 kg",
        height: "165 cm",
        diagnosis: {
          condition: "Hypertension",
          date: "2024-03-15",
          status: "Under Treatment"
        },
        doctor: {
          name: "Dr. John Smith",
          specialization: "Cardiology",
          contact: "+1 234 567 8900"
        },
        medications: [
          {
            name: "Lisinopril",
            dosage: "10mg",
            frequency: "Once daily",
            duration: "30 days",
            purpose: "Blood pressure control"
          },
          {
            name: "Aspirin",
            dosage: "81mg",
            frequency: "Once daily",
            duration: "Ongoing",
            purpose: "Blood thinning"
          },
          {
            name: "Metformin",
            dosage: "500mg",
            frequency: "Twice daily",
            duration: "60 days",
            purpose: "Blood sugar control"
          }
        ],
        recentAppointments: [
          {
            date: "2024-03-20",
            time: "10:00 AM",
            doctor: "Dr. John Smith",
            department: "Cardiology",
            status: "Completed"
          },
          {
            date: "2024-04-05",
            time: "2:30 PM",
            doctor: "Dr. John Smith",
            department: "Cardiology",
            status: "Scheduled"
          }
        ]
      });
    } else {
      setIsPatient(false);
      navigate('/login');
    }
  }, [navigate]);

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
    const validationErrors = validateBookingForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
    }
  };

  const handleBookAppointment = () => {
    navigate('/book');
  };

  const handleReschedule = (appointmentId) => {
    navigate('/book', { state: { appointmentId, isReschedule: true } });
  };

  const handleCancel = (appointmentId) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      // Handle cancel logic here
      console.log('Cancelling appointment:', appointmentId);
    }
  };

  // Sample data for appointments and medical history
  const appointments = [
    {
      id: 1,
      doctorName: "Dr. Sarah Wilson",
      department: "Cardiology",
      date: "2024-03-25",
      time: "10:00 AM",
      status: "scheduled"
    },
    {
      id: 2,
      doctorName: "Dr. Michael Brown",
      department: "Neurology",
      date: "2024-03-28",
      time: "02:30 PM",
      status: "scheduled"
    }
  ];

  const medicalHistory = [
    {
      id: 1,
      date: "2024-03-15",
      doctorName: "Dr. Sarah Wilson",
      diagnosis: "Hypertension",
      prescription: "Lisinopril 10mg daily",
      notes: "Follow-up in 2 weeks"
    },
    {
      id: 2,
      date: "2024-02-28",
      doctorName: "Dr. Michael Brown",
      diagnosis: "Migraine",
      prescription: "Sumatriptan 50mg as needed",
      notes: "Monitor frequency"
    }
  ];

  if (!isPatient) {
    return (
      <>
        <Header />
        <section className="book" id="book">
          <h1 className="heading"> <span>book</span> appointment </h1>
          <div className="row">
            <div className="image">
              <img src="/image/book-img.png" alt="" />
            </div>
            <form id="bookingForm" onSubmit={handleSubmit}>
              <h3>book appointments</h3>
              <input
                type="text"
                name="name"
                placeholder="your name"
                className={`box ${errors.name ? 'error' : ''}`}
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <div className="error-message">{errors.name}</div>}

              <input
                type="number"
                name="phone"
                placeholder="your number"
                className={`box ${errors.phone ? 'error' : ''}`}
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <div className="error-message">{errors.phone}</div>}

              <input
                type="email"
                name="email"
                placeholder="your email"
                className={`box ${errors.email ? 'error' : ''}`}
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}

              <input
                type="date"
                name="date"
                className={`box ${errors.date ? 'error' : ''}`}
                value={formData.date}
                onChange={handleInputChange}
              />
              {errors.date && <div className="error-message">{errors.date}</div>}

              <select
                name="department"
                className={`box ${errors.department ? 'error' : ''}`}
                value={formData.department}
                onChange={handleInputChange}
              >
                <option value="">Select Department</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="dental">Dental</option>
              </select>
              {errors.department && <div className="error-message">{errors.department}</div>}

              <textarea
                name="symptoms"
                placeholder="Describe your symptoms"
                className={`box ${errors.symptoms ? 'error' : ''}`}
                value={formData.symptoms}
                onChange={handleInputChange}
              ></textarea>
              {errors.symptoms && <div className="error-message">{errors.symptoms}</div>}

              <input type="submit" value="book now" className="btn" />
            </form>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="dashboard">
        <h1 className="heading">Patient Dashboard</h1>
        <div className="dashboard-container">
          <div className="info-box">
            <h2>Welcome, Patient</h2>
            <p>Email: {userEmail}</p>
            <div className="patient-stats">
              <div className="stat-item">
                <h3>Upcoming Appointments</h3>
                <p>2</p>
              </div>
              <div className="stat-item">
                <h3>Total Visits</h3>
                <p>5</p>
              </div>
              <div className="stat-item">
                <h3>Active Prescriptions</h3>
                <p>2</p>
              </div>
            </div>
            <button onClick={handleBookAppointment} className="btn">Book New Appointment</button>
          </div>

          <div className="info-box appointments-box">
            <h2>Upcoming Appointments</h2>
            <div className="appointments-list">
              {appointments.map(appointment => (
                <div key={appointment.id} className="appointment-item">
                  <div className="appointment-header">
                    <h3>{appointment.doctorName}</h3>
                    <span className={`status ${appointment.status}`}>
                      {appointment.status}
                    </span>
                  </div>
                  <div className="appointment-details">
                    <p><i className="fas fa-hospital"></i> {appointment.department}</p>
                    <p><i className="fas fa-calendar"></i> {appointment.date}</p>
                    <p><i className="fas fa-clock"></i> {appointment.time}</p>
                  </div>
                  <div className="appointment-actions">
                    <button className="btn" onClick={() => handleReschedule(appointment.id)}>
                      Reschedule
                    </button>
                    <button className="btn" onClick={() => handleCancel(appointment.id)}>
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="info-box">
            <h2>Medical History</h2>
            <div className="medical-history">
              {medicalHistory.map(record => (
                <div key={record.id} className="history-item">
                  <div className="history-header">
                    <h3>{record.diagnosis}</h3>
                    <span className="date">{record.date}</span>
                  </div>
                  <div className="history-details">
                    <p><i className="fas fa-user-md"></i> {record.doctorName}</p>
                    <p><i className="fas fa-prescription-bottle"></i> {record.prescription}</p>
                    <p><i className="fas fa-sticky-note"></i> {record.notes}</p>
                  </div>
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

export default PatientDashboard;