// src/pages/ParentHomePage.js
import React from 'react';

const ParentHomePage = () => {
  const children = [
    {
      id: 1,
      name: 'ด.ช. สมหวัง ใจดี',
      classroom: 'ป.1/1',
      feeStatus: 'paid',
      lastPayment: '2024-01-15',
      nextPayment: '2024-02-15',
      amount: '1,500 ฿'
    },
    {
      id: 2, 
      name: 'ด.ญ. สมใจ ใจดี',
      classroom: 'ป.3/2',
      feeStatus: 'pending',
      lastPayment: '2024-01-10',
      nextPayment: '2024-02-10',
      amount: '1,800 ฿'
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>👨‍👩‍👧‍👦 หน้าหลัก - ผู้ปกครอง</h1>
      <p>ยินดีต้อนรับ! นี่คือข้อมูลนักเรียนของคุณ</p>
      
      <div style={{ marginTop: '30px' }}>
        <h2>📋 บัญชีนักเรียนของฉัน</h2>
        
        {children.map(child => (
          <div key={child.id} style={{
            background: child.feeStatus === 'paid' ? '#e8f5e8' : '#fff3e0',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '15px',
            border: `2px solid ${child.feeStatus === 'paid' ? '#4caf50' : '#ff9800'}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>{child.name}</h3>
              <p style={{ margin: '5px 0', color: '#7f8c8d' }}>ห้อง: {child.classroom}</p>
              <p style={{ margin: '5px 0', color: '#7f8c8d' }}>ค่าธรรมเนียม: {child.amount}</p>
              <p style={{ margin: '5px 0' }}>
                สถานะ: 
                <span style={{
                  padding: '4px 8px',
                  borderRadius: '4px',
                  marginLeft: '8px',
                  backgroundColor: child.feeStatus === 'paid' ? '#4caf50' : '#ff9800',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {child.feeStatus === 'paid' ? '✅ ชำระแล้ว' : '⏳ รอชำระ'}
                </span>
              </p>
              <p style={{ margin: '5px 0', color: '#7f8c8d', fontSize: '14px' }}>
                ชำระล่าสุด: {child.lastPayment} | ครั้งต่อไป: {child.nextPayment}
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{
                padding: '8px 16px',
                background: '#2196f3',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                💳 ชำระเงิน
              </button>
              <button style={{
                padding: '8px 16px',
                background: '#9c27b0',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                📋 ดูประวัติ
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* การแจ้งเตือน */}
      <div style={{
        background: '#e3f2fd',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '30px',
        border: '2px dashed #2196f3'
      }}>
        <h3>🔔 แจ้งเตือนสำหรับคุณ</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li>✅ ด.ญ. สมใจ ใจดี ชำระเงินเรียบร้อยแล้ว</li>
          <li>💰 ค่าธรรมเนียมเดือนกุมภาพันธ์พร้อมชำระแล้ว</li>
          <li>📅 นัดประชุมผู้ปกครอง 15 ก.พ. 2024</li>
        </ul>
      </div>
    </div>
  );
};

export default ParentHomePage;
