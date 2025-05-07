import { useState } from 'react';
import { useDB } from '../PgliteContext';

const SQLQuery = () => {
  const db = useDB();
  const [query, setQuery] = useState("SELECT * FROM patients;");
  const [results, setResults] = useState([]);

  const handleRun = async () => {
    try {
      const res = await db.query(query);
      setResults(res);
    } catch (err) {
      alert("SQL Error: " + err.message);
    }
  };

  return (
    <div>
      <textarea className="input w-full" rows={3} value={query} onChange={e => setQuery(e.target.value)} />
      <button className="btn my-2" onClick={handleRun}>Run Query</button>
      <div className="overflow-x-auto">
        {results.length > 0 && (
          <table className="table-auto border">
            <thead>
              <tr>{Object.keys(results[0]).map((key) => <th key={key} className="border px-2">{key}</th>)}</tr>
            </thead>
            <tbody>
              {results.map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((val, j) => <td key={j} className="border px-2">{val}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SQLQuery;
ś