import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ManagePatients = () => {
  const navigate = useNavigate();
  const [patients] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      age: 35,
      gender: 'Male',
      status: 'Active'
    },
    // Add more mock data as needed
  ]);

  const handleEdit = (id) => {
    console.log('Edit patient:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete patient:', id);
  };

  return (
    <>
      <Header />
      <section className="manage-patients">
        <h1 className="heading">Manage Patients</h1>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map(patient => (
                <tr key={patient.id}>
                  <td>{patient.name}</td>
                  <td>{patient.email}</td>
                  <td>{patient.phone}</td>
                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.status}</td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="btn"
                        onClick={() => handleEdit(patient.id)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn"
                        onClick={() => handleDelete(patient.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="form-actions">
          <button 
            className="btn"
            onClick={() => navigate('/admin-dashboard')}
          >
            Back to Dashboard
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ManagePatients; 