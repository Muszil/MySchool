// src/pages/LoginPage
import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  // เงื่อนไขการ Login
  const validUsers = {
    // ครู
    't@gmail.com': {
      password: '1234',
      user: {
        id: 1,
        name: 'ครูสมชาย',
        email: 't@gmail.com',
        role: 'teacher'
      }
    },
    // ผู้ปกครอง
    'p@gmail.com': {
      password: '1234', 
      user: {
        id: 2,
        name: 'ผู้ปกครองสมหญิง',
        email: 'p@gmail.com',
        role: 'parent'
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const { email, password } = formData;
    const userData = validUsers[email];

    // ตรวจสอบเงื่อนไข
    if (!userData) {
      setError('❌ ไม่พบบัญชีผู้ใช้นี้');
      return;
    }

    if (userData.password !== password) {
      setError('❌ รหัสผ่านไม่ถูกต้อง');
      return;
    }

    // Login สำเร็จ
    console.log('✅ Login successful:', userData.user);
    onLogin(userData.user);
  };

  const handleDemoLogin = (email, password) => {
    setFormData({ email, password });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>🏫 School Fees System</h1>
          <p>ระบบจัดการค่าธรรมเนียมโรงเรียน</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <div className="form-group">
            <label>อีเมล</label>
            <input
              type="email"
              placeholder="กรอกอีเมลของคุณ"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label>รหัสผ่าน</label>
            <input
              type="password"
              placeholder="กรอกรหัสผ่าน"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            เข้าสู่ระบบ
          </button>
        </form>

        <div className="login-demo">
          <p><strong>บัญชีทดลองใช้งาน:</strong></p>
          
          <div className="demo-accounts">
            <div className="demo-account">
              <h4>👩‍🏫 ครู</h4>
              <p>อีเมล: t@gmail.com</p>
              <p>รหัสผ่าน: 1234</p>
              <button 
                onClick={() => handleDemoLogin('t@gmail.com', '1234')}
                className="demo-btn"
              >
                ใช้บัญชีนี้
              </button>
            </div>
            
            <div className="demo-account">
              <h4>👨‍👩‍👧‍👦 ผู้ปกครอง</h4>
              <p>อีเมล: p@gmail.com</p>
              <p>รหัสผ่าน: 1234</p>
              <button 
                onClick={() => handleDemoLogin('p@gmail.com', '1234')}
                className="demo-btn"
              >
                ใช้บัญชีนี้
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;