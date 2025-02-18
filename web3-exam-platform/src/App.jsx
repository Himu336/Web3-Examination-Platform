import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/splash/SplashScreen';
import EntryPortal from './components/entry/EntryPortal';
import StudentLogin from './components/auth/StudentLogin';
import FacultyLogin from './components/auth/FacultyLogin';
import AdminLogin from './components/auth/AdminLogin';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/portal" element={
          <>
            <Navbar />
            <EntryPortal />
          </>
        } />
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/login/faculty" element={<FacultyLogin />} />
        <Route path="/login/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;