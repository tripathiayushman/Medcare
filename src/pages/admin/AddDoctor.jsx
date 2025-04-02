import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AddDoctor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: '',
    department: '',
    experience: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Doctor data:', formData);
    navigate('/admin-dashboard');
  };

  return (
    <>
      <Header />
      <section className="add-doctor">
        <h1 className="heading">Add New Doctor</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="box-container">
            <div className="form-group">
              <label className="box-label">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter doctor's full name"
                className="box"
              />
            </div>

            <div className="form-group">
              <label className="box-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter doctor's email"
                className="box"
              />
            </div>

            <div className="form-group">
              <label className="box-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter doctor's phone number"
                className="box"
              />
            </div>

            <div className="form-group">
              <label className="box-label">Specialization</label>
              <input
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                placeholder="Enter specialization"
                className="box"
              />
            </div>

            <div className="form-group">
              <label className="box-label">Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="box"
              >
                <option value="">Select Department</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="dental">Dental</option>
              </select>
            </div>

            <div className="form-group">
              <label className="box-label">Years of Experience</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Enter years of experience"
                className="box"
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn">Add Doctor</button>
              <button type="button" className="btn" onClick={() => navigate('/admin-dashboard')}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddDoctor; 