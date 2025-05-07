import { useState } from 'react';
import { useDB } from '../PgliteContext';

const PatientForm = () => {
  const db = useDB();
  const [form, setForm] = useState({ name: '', age: '', gender: '', contact: '', notes: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.execute(`INSERT INTO patients (name, age, gender, contact, notes)
      VALUES (?, ?, ?, ?, ?)`, [form.name, form.age, form.gender, form.contact, form.notes]);
    alert("Patient registered successfully");
    setForm({ name: '', age: '', gender: '', contact: '', notes: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input className="input" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input className="input" type="number" placeholder="Age" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} />
      <select className="input" value={form.gender} onChange={e => setForm({ ...form, gender: e.target.value })}>
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input className="input" placeholder="Contact" value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} />
      <textarea className="input" placeholder="Notes" value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
      <button type="submit" className="btn">Register</button>
    </form>
  );
};

export default PatientForm;
