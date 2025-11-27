// src/components/Navigation.js
import React from 'react';

const Navigation = ({ currentPage, onPageChange, user, onLogout }) => {
  const teacherMenu = [
    { id: 'home', label: '🏠 หน้าหลัก' },
    { id: 'students', label: '📚 นักเรียน' },
    { id: 'payments', label: '💰 การชำระเงิน' },
    { id: 'reports', label: '📊 รายงาน' },
    { id: 'settings', label: '⚙️ ตั้งค่า', icon: '⚙️' }
  ];

  const parentMenu = [
    { id: 'home', label: '🏠 หน้าหลัก' },
    { id: 'payments', label: '💰 ชำระเงิน' },
    { id: 'history', label: '📋 ประวัติ' },
    { id: 'settings', label: '⚙️ ตั้งค่า', icon: '⚙️' }
  ];

  const menuItems = user?.role === 'teacher' ? teacherMenu : parentMenu;

  return (
    <nav style={{ 
      background: '#2c3e50', 
      padding: '15px 20px',
      marginBottom: '20px',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            style={{
              background: currentPage === item.id ? '#3498db' : 'transparent',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'white' }}>
        <span>สวัสดี, {user?.name}</span>
        <button 
          onClick={onLogout}
          style={{
            background: '#e74c3c',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          ออกจากระบบ
        </button>
      </div>
    </nav>
  );
};

export default Navigation;