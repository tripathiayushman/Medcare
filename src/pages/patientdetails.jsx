import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/patient.css';

const PatientDetails = () => {
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

  // Static patient data
  const patientData = {
    name: "John Doe",
    age: 45,
    gender: "Male",
    height: "5'10\"",
    weight: "75 kg",
    bloodGroup: "A+",
    phone: "+1 234-567-8900",
    email: "john.doe@email.com",
    address: "123 Main St, City, Country",
    emergencyContact: {
      name: "Jane Doe",
      relation: "Spouse",
      phone: "+1 234-567-8901"
    },
    medicalHistory: [
      {
        date: "2024-03-15",
        condition: "Hypertension",
        treatment: "Prescribed Lisinopril 10mg daily",
        notes: "Patient showing good response to treatment"
      },
      {
        date: "2024-02-20",
        condition: "Common Cold",
        treatment: "Prescribed antibiotics",
        notes: "Recovered completely"
      }
    ],
    allergies: ["Penicillin", "Pollen"],
    medications: [
      "Lisinopril 10mg daily",
      "Vitamin D supplements"
    ]
  };

  return (
    <>
      <Header />
      <section className="patient-details">
        <h1 className="heading">Patient Details</h1>
        <div className="patient-details-container">
          <div className="basic-info">
            <h2>Basic Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <label>Name:</label>
                <span>{patientData.name}</span>
              </div>
              <div className="info-item">
                <label>Age:</label>
                <span>{patientData.age}</span>
              </div>
              <div className="info-item">
                <label>Gender:</label>
                <span>{patientData.gender}</span>
              </div>
              <div className="info-item">
                <label>Height:</label>
                <span>{patientData.height}</span>
              </div>
              <div className="info-item">
                <label>Weight:</label>
                <span>{patientData.weight}</span>
              </div>
              <div className="info-item">
                <label>Blood Group:</label>
                <span>{patientData.bloodGroup}</span>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <label>Phone:</label>
                <span>{patientData.phone}</span>
              </div>
              <div className="info-item">
                <label>Email:</label>
                <span>{patientData.email}</span>
              </div>
              <div className="info-item">
                <label>Address:</label>
                <span>{patientData.address}</span>
              </div>
            </div>
          </div>

          <div className="emergency-contact">
            <h2>Emergency Contact</h2>
            <div className="info-grid">
              <div className="info-item">
                <label>Name:</label>
                <span>{patientData.emergencyContact.name}</span>
              </div>
              <div className="info-item">
                <label>Relation:</label>
                <span>{patientData.emergencyContact.relation}</span>
              </div>
              <div className="info-item">
                <label>Phone:</label>
                <span>{patientData.emergencyContact.phone}</span>
              </div>
            </div>
          </div>

          <div className="medical-info">
            <h2>Medical Information</h2>
            <div className="allergies">
              <h3>Allergies</h3>
              <ul>
                {patientData.allergies.map((allergy, index) => (
                  <li key={index}>{allergy}</li>
                ))}
              </ul>
            </div>

            <div className="current-medications">
              <h3>Current Medications</h3>
              <ul>
                {patientData.medications.map((medication, index) => (
                  <li key={index}>{medication}</li>
                ))}
              </ul>
            </div>

            <div className="medical-history">
              <h3>Medical History</h3>
              {patientData.medicalHistory.map((record, index) => (
                <div key={index} className="history-item">
                  <div className="history-header">
                    <h4>{record.condition}</h4>
                    <span className="date">{record.date}</span>
                  </div>
                  <div className="history-content">
                    <p><strong>Treatment:</strong> {record.treatment}</p>
                    <p><strong>Notes:</strong> {record.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="form-actions">
          <Link to="/doctor-dashboard" className="btn">Back to Dashboard</Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PatientDetails; 