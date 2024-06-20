import './frontend/css/App.css'
import InvoicePage from "./frontend/pages/InvoicesPage";
// import LeadsPage from "./frontend/pagesSrc/Leads/LeadsPage";
import ProjectPage from "./frontend/pages/ProjectPage";
import ProposalsPage from './frontend/pages/ProposalsPage';
import SettingsPage from "./frontend/pages/SettingsPage";
import StaffPage from "./frontend/pages/StaffPage";
import TimeSheetsPage from "./frontend/reducer/TimeSheetsPage";
import { Form } from './frontend/components/Form/Form';
import Login from './frontend/pages/Login';
import Register from './frontend/pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} /> {/* Default route */}
          <Route path="/invoice" element={<InvoicePage />} />
          {/* <Route path="/leads" element={<LeadsPage />} /> Uncomment if needed */}
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/proposals" element={<ProposalsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/timesheets" element={<TimeSheetsPage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
