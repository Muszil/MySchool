// src/pages/TeacherHomePage.js
import React from 'react';

const TeacherHomePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>👩‍🏫 หน้าหลัก - ครู</h1>
      <p>ยินดีต้อนรับครู! นี่คือแดชบอร์ดสำหรับครู</p>
      
      <div style={{
        background: '#e3f2fd', 
        padding: '20px', 
        borderRadius: '10px', 
        marginTop: '20px',
        border: '2px dashed #2196f3'
      }}>
        <h3>📊 กราฟรายงานการชำระเงิน</h3>
        <p>กราฟจะแสดงที่นี่เมื่อพัฒนาเสร็จ</p>
        <div style={{
          height: '200px',
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '5px',
          marginTop: '10px'
        }}>
          📈 พื้นที่สำหรับกราฟ
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        marginTop: '20px'
      }}>
        <div style={{
          background: '#fff3e0',
          padding: '15px',
          borderRadius: '8px',
          border: '2px dashed #ff9800'
        }}>
          <h4>👥 จำนวนนักเรียน</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#e65100' }}>150 คน</p>
        </div>
        
        <div style={{
          background: '#f3e5f5',
          padding: '15px',
          borderRadius: '8px',
          border: '2px dashed #9c27b0'
        }}>
          <h4>💰 ยอดชำระเงิน</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#7b1fa2' }}>75,000 ฿</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherHomePage;