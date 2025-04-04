import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ManageDoctors = () => {
  const navigate = useNavigate();
  const [doctors] = useState([
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      email: 'sarah@example.com',
      phone: '1234567890',
      specialization: 'Cardiology',
      department: 'Cardiology',
      experience: '5 years'
    },
  ]);

  const handleEdit = (id) => {
    console.log('Edit doctor:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete doctor:', id);
  };

  return (
    <>
      <Header />
      <section className="manage-doctors">
        <h1 className="heading">Manage Doctors</h1>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Specialization</th>
                <th>Department</th>
                <th>Experience</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map(doctor => (
                <tr key={doctor.id}>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.phone}</td>
                  <td>{doctor.specialization}</td>
                  <td>{doctor.department}</td>
                  <td>{doctor.experience}</td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="btn"
                        onClick={() => handleEdit(doctor.id)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn"
                        onClick={() => handleDelete(doctor.id)}
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

export default ManageDoctors; 