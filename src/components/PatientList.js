import { useEffect, useState } from 'react';
import { db, initDB } from '../db';

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPatients = async () => {
    try {
      await initDB();
      const result = await db.query('SELECT * FROM patients ORDER BY created_at DESC');
      setPatients(result.rows);
    } catch (err) {
      console.error('Error fetching patients:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
    
    const syncHandler = () => {
      if (document.visibilityState === 'visible') {
        fetchPatients();
      }
    };
    
    document.addEventListener('visibilitychange', syncHandler);
    return () => {
      document.removeEventListener('visibilitychange', syncHandler);
    };
  }, []);

  // Helper function to format dates
  const formatDate = (date) => {
    if (!date) return '';
    if (date instanceof Date) {
      return date.toLocaleDateString();
    }
    return date; // In case it's already a string
  };

  if (loading) return <div>Loading patients...</div>;

  return (
    <div className="patient-list">
      <h2>Registered Patients</h2>
      {patients.length === 0 ? (
        <p>No patients registered yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id.substring(0, 8)}...</td>
                <td>{patient.first_name} {patient.last_name}</td>
                <td>{formatDate(patient.date_of_birth)}</td>
                <td>{patient.gender}</td>
                <td>
                  {patient.phone && <div>Phone: {patient.phone}</div>}
                  {patient.email && <div>Email: {patient.email}</div>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PatientList;