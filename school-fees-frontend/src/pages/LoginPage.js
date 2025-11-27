import React, { useEffect, useState } from 'react';
import { FaCog, FaLock, FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import PasswordInput from '../components/ui/PasswordInput';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // โหลดข้อมูลโรงเรียนจาก localStorage
  const [schoolInfo, setSchoolInfo] = useState({
    logo: null,
    name: 'โรงเรียนปิยมิตรวิทยา',
    systemName: 'ระบบจัดการโรงเรียน'
  });

  const navigate = useNavigate();

  // โหลดข้อมูลเมื่อ component โหลด
  useEffect(() => {
    const saved = localStorage.getItem('schoolInfo');
    if (saved) {
      const parsed = JSON.parse(saved);
      setSchoolInfo(parsed);
      console.log('📁 โหลดการตั้งค่าแล้ว:', parsed);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    console.log('School settings:', schoolInfo);
    navigate('/home'); // ✅ ใช้ navigate
  };

  const handleParentRegister = () => {
    console.log('ไปหน้าลงทะเบียนผู้ปกครอง');
  };

  const handleGoToSettings = () => {
    navigate('/settings'); // ✅ ใช้ navigate
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(-135deg,#E66EB2,#E587DC)] flex items-center justify-center p-6">
      <div className="w-full max-w-md">

        {/* โลโก้โรงเรียน - แสดงจาก localStorage */}
        <div className="w-52 h-52 mx-auto mb-6">
          <div className="w-full h-full bg-white rounded-full shadow-2xl flex items-center justify-center p-3">
            <div className="w-full h-full bg-gradient-to-br from-[#8C215D] to-[#C34487] rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {schoolInfo.logo ? (
                <img
                  src={schoolInfo.logo}
                  alt="School Logo"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span>ป</span>
              )}
            </div>
          </div>
        </div>

        {/* การ์ด Login */}
        <Card className="shadow-2xl border-0 p-8 rounded-t-[150px] rounded-b-none">

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {schoolInfo.name}
            </h1>
            <p className="text-gray-600">{schoolInfo.systemName}</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <Input
                icon={<FaUserAlt />}
                iconColor="text-[#8C215D]"
                placeholder="กรอกอีเมลของคุณ"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="px-5 py-4 text-lg border-gray-300 focus:border-[#8C215D] focus:ring-2 focus:ring-[#8C215D]/20 rounded-xl"
              />

              <PasswordInput
                icon={<FaLock />}
                iconColor="text-[#8C215D]"
                placeholder="กรอกรหัสผ่าน"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="px-5 py-4 text-lg border-gray-300 focus:border-[#8C215D] focus:ring-2 focus:ring-[#8C215D]/20 rounded-xl"
              />

              <button
                type="submit"
                style={{ backgroundColor: '#8C215D' }}
                className="w-full px-5 py-3 text-white shadow-lg hover:shadow-xl transition-all rounded-[150px] hover:bg-[#C34487] font-semibold text-lg"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </form>

          {/* ส่วนลงทะเบียนผู้ปกครอง */}
          <div className="mt-6">
            <Button
              variant="text"
              className="w-full border-blue-500 text-blue-500 hover:bg-blue-50"
              onClick={handleParentRegister}
            >
              ลงทะเบียนผู้ปกครอง
            </Button>
          </div>

        </Card>

        {/* ปุ่มไปหน้าตั้งค่า */}
        <div className="text-center mb-4 mt-6">
          <Button
            variant="ghost"
            icon={<FaCog />}
            className="text-white hover:text-white/80 hover:bg-white/10"
            onClick={handleGoToSettings}
          >
            การตั้งค่า
          </Button>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;

/*
import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const validUsers = {
    't@gmail.com': {
      password: '1234',
      user: {
        id: 1,
        name: 'ครูสมชาย',
        email: 't@gmail.com',
        role: 'teacher'
      }
    },
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

    if (!userData) {
      setError('❌ ไม่พบบัญชีผู้ใช้นี้');
      return;
    }

    if (userData.password !== password) {
      setError('❌ รหัสผ่านไม่ถูกต้อง');
      return;
    }

    onLogin(userData.user);
  };

  const handleDemoLogin = (email, password) => {
    setFormData({ email, password });
  };

  return (
    // Container หลัก - พื้นหลังไล่ระดับสี
    <div className="min-h-screen flex items-end justify-center bg-gradient-to-r from-pink-400 to-purple-500 p-5">
      
      //{ กล่อง Login - มุมโค้งด้านบน }
      <div className="bg-white p-8 rounded-t-[100px] rounded-b-none shadow-2xl w-full max-w-md border border-gray-100">
        
        //{ Header }
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">🏫 School Fees System</h1>
          <p className="text-gray-600">ระบบจัดการค่าธรรมเนียมโรงเรียน</p>
        </div>

        //{ Form }
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
              {error}
            </div>
          )}

          //{ Email Input }
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              อีเมล
            </label>
            <input
              type="email"
              placeholder="กรอกอีเมลของคุณ"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              required
            />
          </div>
          
          //{ Password Input }
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              รหัสผ่าน
            </label>
            <input
              type="password"
              placeholder="กรอกรหัสผ่าน"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              required
            />
          </div>

          //{ Login Button }
          <button 
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        //{ Demo Accounts }
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center font-semibold text-gray-700 mb-4">บัญชีทดลองใช้งาน:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:border-purple-300 transition-colors">
              <h4 className="font-semibold text-gray-800 mb-2">👩‍🏫 ครู</h4>
              <p className="text-sm text-gray-600">t@gmail.com</p>
              <p className="text-sm text-gray-600">รหัสผ่าน: 1234</p>
              <button 
                onClick={() => handleDemoLogin('t@gmail.com', '1234')}
                className="mt-2 w-full bg-gray-600 text-white py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
              >
                ใช้บัญชีนี้
              </button>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:border-purple-300 transition-colors">
              <h4 className="font-semibold text-gray-800 mb-2">👨‍👩‍👧‍👦 ผู้ปกครอง</h4>
              <p className="text-sm text-gray-600">p@gmail.com</p>
              <p className="text-sm text-gray-600">รหัสผ่าน: 1234</p>
              <button 
                onClick={() => handleDemoLogin('p@gmail.com', '1234')}
                className="mt-2 w-full bg-gray-600 text-white py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
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
*/