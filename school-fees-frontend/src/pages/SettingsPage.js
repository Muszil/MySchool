import React, { useState } from 'react';

const SettingsPage = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    avatar: null
  });

  const [systemSettings, setSystemSettings] = useState({
    notifications: true,
    language: 'th',
    theme: 'light'
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile(prev => ({
          ...prev,
          avatar: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    alert('✅ บันทึกข้อมูลส่วนตัวเรียบร้อยแล้ว');
  };

  const handleSaveSettings = () => {
    alert('✅ บันทึกการตั้งค่าระบบเรียบร้อยแล้ว');
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1>⚙️ การตั้งค่า</h1>
        <p>จัดการข้อมูลส่วนตัวและการตั้งค่าระบบ</p>
      </div>

      <div className="settings-container">
        {/* ข้อมูลส่วนตัว */}
        <div className="settings-section">
          <h2>👤 ข้อมูลส่วนตัว</h2>
          
          <div className="avatar-section">
            <div className="avatar-preview">
              {profile.avatar ? (
                <img src={profile.avatar} alt="Avatar" className="avatar-image" />
              ) : (
                <div className="avatar-placeholder">👤</div>
              )}
            </div>
            
            <div className="avatar-actions">
              <input
                type="file"
                id="avatar-upload"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
              <label htmlFor="avatar-upload" className="btn btn-secondary">
                📁 เลือกไฟล์ภาพ
              </label>
              <button 
                className="btn btn-secondary"
                onClick={() => setProfile(prev => ({ ...prev, avatar: null }))}
              >
                🗑️ ลบภาพ
              </button>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>ชื่อ-นามสกุล</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                placeholder="กรอกชื่อ-นามสกุล"
              />
            </div>

            <div className="form-group">
              <label>อีเมล</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                placeholder="กรอกอีเมล"
              />
            </div>

            <div className="form-group">
              <label>เบอร์โทรศัพท์</label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="กรอกเบอร์โทรศัพท์"
              />
            </div>
          </div>

          <button onClick={handleSaveProfile} className="btn btn-primary">
            💾 บันทึกข้อมูลส่วนตัว
          </button>
        </div>

        {/* การตั้งค่าระบบ */}
        <div className="settings-section">
          <h2>🔧 การตั้งค่าระบบ</h2>
          
          <div className="settings-grid">
            <div className="setting-item">
              <label className="setting-label">
                <span>🔔 การแจ้งเตือน</span>
                <input
                  type="checkbox"
                  checked={systemSettings.notifications}
                  onChange={(e) => setSystemSettings(prev => ({
                    ...prev,
                    notifications: e.target.checked
                  }))}
                />
              </label>
            </div>

            <div className="form-group">
              <label>🌐 ภาษา</label>
              <select
                value={systemSettings.language}
                onChange={(e) => setSystemSettings(prev => ({
                  ...prev,
                  language: e.target.value
                }))}
              >
                <option value="th">ไทย</option>
                <option value="en">English</option>
              </select>
            </div>

            <div className="form-group">
              <label>🎨 โหมดสี</label>
              <select
                value={systemSettings.theme}
                onChange={(e) => setSystemSettings(prev => ({
                  ...prev,
                  theme: e.target.value
                }))}
              >
                <option value="light">โหมดสว่าง</option>
                <option value="dark">โหมดมืด</option>
                <option value="auto">ตามระบบ</option>
              </select>
            </div>
          </div>

          <button onClick={handleSaveSettings} className="btn btn-primary">
            💾 บันทึกการตั้งค่าระบบ
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;