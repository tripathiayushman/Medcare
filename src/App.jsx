import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Reviews from './pages/Reviews';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AddDoctor from './pages/admin/AddDoctor';
import AddPatient from './pages/admin/AddPatient';
import ManageDoctors from './pages/admin/ManageDoctors';
import ManagePatients from './pages/admin/ManagePatients';
import PatientDetails from './pages/patientdetails';
import Consultation from './pages/consultation';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blogs" element={<Blogs />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Dashboard Routes */}
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          
          {/* Admin Routes */}
          <Route path="/admin/add-doctor" element={<AddDoctor />} />
          <Route path="/admin/add-patient" element={<AddPatient />} />
          <Route path="/admin/manage-doctors" element={<ManageDoctors />} />
          <Route path="/admin/manage-patients" element={<ManagePatients />} />
          
          {/* Doctor Routes */}
          <Route path="/patientdetails" element={<PatientDetails />} />
          <Route path="/consultation" element={<Consultation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 