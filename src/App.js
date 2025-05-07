import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PatientForm from './components/PatientForm';
import PatientQuery from './components/PatientQuery';
import PatientList from './components/PatientList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Patient Management System</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register Patient</Link></li>
              <li><Link to="/query">Query Patients</Link></li>
              <li><Link to="/list">View All Patients</Link></li>
            </ul>
          </nav>
        </header>
        
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<PatientForm />} />
            <Route path="/query" element={<PatientQuery />} />
            <Route path="/list" element={<PatientList />} />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>© {new Date().getFullYear()} Patient Management System</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h2>Welcome to Patient Management</h2>
        <p>Efficiently manage patient records with our comprehensive system.</p>
        <div className="features">
          <div className="feature">
            <h3>Register Patients</h3>
            <p>Add new patient records with complete details</p>
          </div>
          <div className="feature">
            <h3>Query Database</h3>
            <p>Run SQL queries to find specific patient information</p>
          </div>
          <div className="feature">
            <h3>View All Records</h3>
            <p>Browse complete patient database</p>
          </div>
        </div>
        <Link to="/register" className="primary-button">Get Started</Link>
      </div>
    </div>
  );
}

export default App;