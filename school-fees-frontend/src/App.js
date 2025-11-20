// src/App.js
import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage';
import ParentHomePage from './pages/ParentHomePage';
import SettingsPage from './pages/SettingsPage'; // ← เพิ่ม import นี้
import TeacherHomePage from './pages/TeacherHomePage';

function App() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLogin = (userData) => {
    console.log('🔍 UserData received:', userData);
    
    // รับได้ทั้ง userData และ userData.user
    const actualUser = userData.user || userData;
    console.log('🔍 Actual user to set:', actualUser);
    
    setUser(actualUser);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  // ถ้ายังไม่ login
  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Render ตาม role
  const renderHomePage = () => {
    console.log('🎯 Current user:', user);
    console.log('🎯 User role:', user.role);
    
    switch (user.role) {
      case 'teacher':
        console.log('🎯 Rendering TeacherHomePage');
        return <TeacherHomePage />;
      case 'parent':
        console.log('🎯 Rendering ParentHomePage');
        return <ParentHomePage />;
      default:
        console.log('🎯 Unknown role, rendering default');
        return <div>Unknown role: {user.role}</div>;
    }
  };

  const renderPage = () => {
    console.log('📄 Current page:', currentPage);
    
    if (currentPage === 'home') {
      return renderHomePage();
    }
    
    // หน้าอื่นๆ ← แก้ไขส่วนนี้
    switch (currentPage) {
      case 'students':
        return <div>หน้าจัดการนักเรียน (กำลังพัฒนา)</div>;
      case 'payments':
        return <div>หน้าชำระเงิน (กำลังพัฒนา)</div>;
      case 'reports':
        return <div>หน้ารายงาน (กำลังพัฒนา)</div>;
      case 'history':
        return <div>หน้าประวัติ (กำลังพัฒนา)</div>;
      case 'settings': // ← เพิ่ม case นี้
        return <SettingsPage />;
      default:
        return renderHomePage();
    }
  };

  console.log('🔄 App rendering, user:', user);

  return (
    <div className="App">
      <header className="App-header">
        <h1>School Fees System - {user.role === 'teacher' ? '👩‍🏫 ครู' : '👨‍👩‍👧‍👦 ผู้ปกครอง'}</h1>
        <Navigation 
          currentPage={currentPage} 
          onPageChange={setCurrentPage}
          user={user}
          onLogout={handleLogout}
        />
      </header>
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;