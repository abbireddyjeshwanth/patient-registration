import { DBProvider } from './PgliteContext';
import PatientForm from './components/PatientForm';
import SQLQuery from './components/SQLQuery';

function App() {
  return (
    <DBProvider>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Patient Registration App</h1>
        <PatientForm />
        <hr className="my-6" />
        <SQLQuery />
      </div>
    </DBProvider>
  );
}

export default App;
