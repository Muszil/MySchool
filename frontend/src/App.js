import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/Admin_Teacher_HomePage/HomePage';
import LoginPage from './pages/LoginPage';
import ManageParentsPage from './pages/Mangement/ManageParentsPage';
import ManageStudentsPage from './pages/Mangement/ManageStudentsPage';
import ManageTeachersPage from './pages/Mangement/ManageTeachersPage';
import SettingsPage from './pages/SettingsPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          {/* Redirect ไปหน้า Login ถ้าเข้า path อื่น */}
          <Route path="/manage/students" element={<ManageStudentsPage />} />
          <Route path="/manage/teachers" element={<ManageTeachersPage />} />
          <Route path="/manage/parents" element={<ManageParentsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;