import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Book from './pages/Book';
import Reviews from './pages/Reviews';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import PatientLogin from './pages/PatientLogin';
import DoctorLogin from './pages/DoctorLogin';
import AdminLogin from './pages/AdminLogin';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Signup from './pages/signup';
import ForgotPassword from './pages/ForgotPassword';
import AddDoctor from './pages/admin/AddDoctor';
import AddPatient from './pages/admin/AddPatient';
import ManageDoctors from './pages/admin/ManageDoctors';
import ManagePatients from './pages/admin/ManagePatients';
import Consultation from './pages/consultation';
import PatientDetails from './pages/patientdetails';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/book" element={<Book />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/AddDoctor" element={<AddDoctor />} />
        <Route path="/admin/AddPatient" element={<AddPatient />} />
        <Route path="/admin/ManageDoctors" element={<ManageDoctors />} />
        <Route path="/admin/ManagePatients" element={<ManagePatients />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/patient-details" element={<PatientDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;