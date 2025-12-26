import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
  // ใช้ state และ useEffect เพื่อป้องกันการอ่าน localStorage ใน server
  const [schoolInfo, setSchoolInfo] = React.useState({
    logo: null,
    name: 'โรงเรียนปิยมิตรวิทยา'
  });

  React.useEffect(() => {
    // ตรวจสอบว่าเราอยู่ใน browser
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('schoolInfo');
        if (saved) {
          const parsed = JSON.parse(saved);
          setSchoolInfo(parsed);
        }
      } catch (error) {
        console.error('Error reading localStorage:', error);
      }
    }
  }, []);

  return (
    <header className="flex justify-between items-center p-4 border-b bg-white">
      {/* ซ้าย: Logo + ชื่อโรงเรียน */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-[#8C215D] to-[#C34487] rounded-full flex items-center justify-center text-white font-bold mr-3">
          {schoolInfo.logo ? (
            <img 
              src={schoolInfo.logo} 
              alt="School Logo" 
              className="w-full h-full rounded-full object-cover" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<span>ป</span>';
              }}
            />
          ) : (
            <span>ป</span>
          )}
        </div>
        <h1 className="text-[#8C215D] text-xl font-bold">
          {schoolInfo.name}
        </h1>
      </div>
      
      {/* ขวา: ผู้ใช้งาน */}
      <div className="flex items-center">
        <FaUserAlt className="text-[#8C215D] mr-2" />
        <span>ผู้ดูแลระบบ</span>
      </div>
    </header>
  );
};

export default Header;