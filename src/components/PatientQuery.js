import { useState } from 'react';
import { db, initDB } from '../db';

function PatientQuery() {
  const [query, setQuery] = useState('SELECT * FROM patients LIMIT 10');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const executeQuery = async () => {
    try {
      await initDB();
      const result = await db.query(query);
      setResults(result.rows);
      setError('');
    } catch (err) {
      setError(err.message);
      setResults([]);
    }
  };

  return (
    <div className="patient-query">
      <h2>Query Patients</h2>
      <div className="query-input">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          rows="4"
          cols="50"
        />
        <br></br>
        <button className="primary-button" onClick={executeQuery}>Execute Query</button>
      </div>
      
      {error && <div className="error">Error: {error}</div>}
      
      {results.length > 0 && (
        <div className="query-results">
          <h3>Results:</h3>
          <table>
            <thead>
              <tr>
                {Object.keys(results[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((value, j) => (
                    <td key={j}>{value?.toString() || ''}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PatientQuery;