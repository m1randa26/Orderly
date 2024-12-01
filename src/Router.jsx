// src/Router.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import MeseroScreen from './App.jsx';
import AdminScreen from './pages/Admin.jsx';  // Página para ADMIN

import App from './App.jsx';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mesero" element={<MeseroScreen />} />
        <Route path="/admin" element={<AdminScreen />} />  {/* Ruta para ADMIN */}

        <Route path="/app" element={<App />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
