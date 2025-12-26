import React, { useEffect, useRef, useState } from 'react';
import {
  FaBook,
  FaCaretDown,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaSchool,
  FaUserGraduate,
  FaUsers
} from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isManageOpen, setIsManageOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // ✅ เรียงตำแหน่งปุ่ม: Home, Manage, Fees, Setting
  const tabs = [
    { name: 'หน้าหลัก', path: '/home' },
    { name: 'การจัดการ', path: null, isDropdown: true }, // ✅ Manage เป็น dropdown
    { name: 'รายงาน', path: '/fees' },
    { name: 'การตั้งค่า', path: '/settings' }
  ];

  const manageOptions = [
    { 
      name: 'จัดการข้อมูลนักเรียน', 
      path: '/manage/students',
      icon: <FaUserGraduate />
    },
    { 
      name: 'จัดการข้อมูลครู', 
      path: '/manage/teachers',
      icon: <FaChalkboardTeacher />
    },
    { 
      name: 'จัดการข้อมูลผู้ปกครอง', 
      path: '/manage/parents',
      icon: <FaUsers />
    },
    { 
      name: 'จัดการห้องเรียน และ ชั้นปี', 
      path: '/manage/classrooms', // ✅ เปลี่ยน path
      icon: <FaSchool /> // ✅ ใช้ไอคอนโรงเรียน
    },
    { 
      name: 'จัดการรายวิชา', 
      path: '/manage/subjects', // ✅ เปลี่ยน path
      icon: <FaBook /> // ✅ ใช้ไอคอนหนังสือ
    },
    { 
      name: 'จัดการค่าธรรมเนียมการเรียน', 
      path: '/manage/fees', // ✅ เปลี่ยน path
      icon: <FaMoneyBillWave /> // ✅ ใช้ไอคอนเงิน
    }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsManageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-end p-4 bg-gradient-to-r from-[#E66EB2] to-[#E587DC] shadow-sm">
      <div className="flex space-x-8 items-center">
        {tabs.map((tab) => {
          if (tab.isDropdown) {
            return (
              // ✅ Dropdown Manage
              <div key={tab.name} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsManageOpen(!isManageOpen)}
                  className={`px-4 py-1.5 font-medium 
                             transition-all duration-300
                             hover:scale-105
                             focus:outline-none
                             flex items-center gap-2 rounded-md
                             ${location.pathname.startsWith('/manage') || isManageOpen
                                ? 'text-[#8C215D] bg-white shadow-inner' 
                                : 'text-white hover:text-[#8C215D] hover:bg-white/10'
                             }`}
                >
                  <span>{tab.name}</span>
                  <FaCaretDown className={`transition-transform duration-300 ${isManageOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isManageOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-2xl z-50 
                                border border-gray-200 overflow-hidden">
                    <div className="p-1">
                      {manageOptions.map((option) => (
                        <button
                          key={option.name}
                          onClick={() => {
                            navigate(option.path);
                            setIsManageOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 text-gray-700 hover:bg-[#8C215D]/10 
                                   transition-all duration-200 rounded-md
                                   flex items-center gap-3 group"
                        >
                          <div className="text-[#8C215D] group-hover:scale-110 transition-transform">
                            {option.icon}
                          </div>
                          <span className="font-medium group-hover:text-[#8C215D] text-sm">
                            {option.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          }
          
          // ✅ ปุ่มปกติ (Home, Fees, Setting)
          return (
            <button
              key={tab.name}
              onClick={() => navigate(tab.path)}
              className={`px-4 py-1.5 font-medium 
                         transition-all duration-300
                         hover:scale-105
                         focus:outline-none
                         rounded-md
                         ${isActive(tab.path) 
                            ? 'text-[#8C215D] bg-white shadow-inner' 
                            : 'text-white hover:text-[#8C215D] hover:bg-white/10'
                         }`}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;