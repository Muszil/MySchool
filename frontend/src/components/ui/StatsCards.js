import React from 'react';
import {
    FaCashRegister,
    FaClipboardCheck,
    FaMoneyBillWave,
    FaUserGraduate
} from 'react-icons/fa';

const StatsCards = () => {
  const stats = [
    { 
      title: "ยอดนักเรียนทั้งหมด", 
      value: "500",
      color: "#FE8946",
      icon: <FaUserGraduate />
    },
    { 
      title: "ยอดการลงทะเบียน", 
      value: "500",
      color: "#F7D123",
      icon: <FaClipboardCheck />
    },
    { 
      title: "ยอดผู้ชำระ", 
      value: "500",
      color: "#7DBCFF",
      icon: <FaMoneyBillWave />
    },
    { 
      title: "ยอดการชำระ", 
      value: "500",
      color: "#1A8049",
      icon: <FaCashRegister />
    }
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">สถิติ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="relative p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            style={{ 
              backgroundColor: stat.color,
              color: '#FFFFFF'
            }}
          >
            {/* เอฟเฟกต์พื้นหลัง */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white/30"></div>
            <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-white/10"></div>
            
            {/* ไอคอน */}
            <div className="text-3xl mb-3 opacity-80">
              {stat.icon}
            </div>
            
            {/* ข้อมูล */}
            <h3 className="text-xl font-medium mb-2 text-white/90">
              {stat.title}
            </h3>
            <p className="text-2xl font-bold mb-1">
              {stat.value}
            </p>
            
            {/* เอฟเฟกต์ hover */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCards;