import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaCloudUploadAlt, FaSave } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // ✅ ใช้ useNavigate
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';

const SettingsPage = () => {
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate(); // ✅ ใช้ useNavigate

  const [schoolInfo, setSchoolInfo] = useState(() => {
    const saved = localStorage.getItem('schoolInfo');
    return saved ? JSON.parse(saved) : {
      logo: null,
      name: 'โรงเรียนปิยมิตรวิทยา',
      systemName: 'ระบบจัดการโรงเรียน'
    };
  });

  const [formData, setFormData] = useState({
    schoolName: schoolInfo.name,
    systemName: schoolInfo.systemName
  });

  const CLOUD_NAME = 'dux29zogj';
  const UPLOAD_PRESET = 'school-logo';

  useEffect(() => {
    localStorage.setItem('schoolInfo', JSON.stringify(schoolInfo));
    console.log('💾 บันทึกการตั้งค่าแล้ว:', schoolInfo);
  }, [schoolInfo]);

  useEffect(() => {
    setFormData({
      schoolName: schoolInfo.name,
      systemName: schoolInfo.systemName
    });
  }, [schoolInfo]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    const uploadFormData = new FormData();
    uploadFormData.append('file', file);
    uploadFormData.append('upload_preset', UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        { method: 'POST', body: uploadFormData }
      );
      const data = await response.json();
      if (data.secure_url) {
        setSchoolInfo(prev => ({ 
          ...prev, 
          logo: data.secure_url 
        }));
        console.log('✅ อัพโหลดโลโก้สำเร็จ:', data.secure_url);
        alert('อัพโหลดโลโก้สำเร็จ!');
      }
    } catch (error) {
      console.error('❌ อัพโหลดไม่สำเร็จ:', error);
      alert('อัพโหลดไม่สำเร็จ กรุณาลองใหม่');
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveLogo = () => {
    setSchoolInfo(prev => ({
      ...prev,
      logo: null
    }));
    alert('ลบโลโก้สำเร็จ!');
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setSchoolInfo(prev => ({
      ...prev,
      name: formData.schoolName,
      systemName: formData.systemName
    }));
    alert('บันทึกการตั้งค่าสำเร็จ!');
  };

  const handleBackToLogin = () => {
    navigate('/'); // ✅ ใช้ navigate
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(-135deg,#E66EB2,#E587DC)] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">⚙️ การตั้งค่า</h1>
          <p className="text-white/80">จัดการข้อมูลโรงเรียนและโลโก้</p>
        </div>

        <Card className="shadow-2xl border-0 p-8">
          
          <Button
            variant="text"
            icon={<FaArrowLeft />}
            className="mb-6 text-white hover:text-white/80"
            onClick={handleBackToLogin}
          >
            กลับไปหน้า Login
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">🖼️ โลโก้โรงเรียน</h2>
              
              <div className="text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="logo-upload-input"
                  disabled={uploading}
                />
                
                <label htmlFor="logo-upload-input" className="cursor-pointer block">
                  <div className="w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center p-3 mx-auto">
                    <div className="w-full h-full bg-gradient-to-br from-[#8C215D] to-[#C34487] rounded-full flex items-center justify-center text-white text-2xl font-bold relative">
                      
                      {schoolInfo.logo ? (
                        <img 
                          src={schoolInfo.logo} 
                          alt="School Logo" 
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : uploading ? (
                        <div className="text-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
                          <p className="text-sm">กำลังอัพโหลด...</p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <FaCloudUploadAlt className="text-4xl mx-auto mb-2" />
                          <p className="text-sm">อัพโหลดโลโก้</p>
                        </div>
                      )}
                    </div>
                  </div>
                </label>

                <div className="mt-4 space-y-2">
                  <p className="text-gray-600 text-sm">
                    {schoolInfo.logo ? 'คลิกเพื่อเปลี่ยนโลโก้' : 'คลิกเพื่ออัพโหลดโลโก้'}
                  </p>
                  
                  {schoolInfo.logo && (
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={handleRemoveLogo}
                      className="text-xs"
                    >
                      ลบโลโก้
                    </Button>
                  )}
                </div>

                {schoolInfo.logo && (
                  <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                    <p className="text-xs text-gray-600 break-all">
                      <strong>URL:</strong> {schoolInfo.logo}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">🏫 ข้อมูลโรงเรียน</h2>
              
              <form onSubmit={handleSaveSettings}>
                <div className="space-y-4">
                  <Input
                    label="ชื่อโรงเรียน"
                    placeholder="กรอกชื่อโรงเรียน"
                    value={formData.schoolName}
                    onChange={(e) => setFormData(prev => ({ ...prev, schoolName: e.target.value }))}
                    className="border-gray-300 focus:border-[#8C215D] focus:ring-[#8C215D]/20"
                  />

                  <Input
                    label="ชื่อระบบ"
                    placeholder="กรอกชื่อระบบ"
                    value={formData.systemName}
                    onChange={(e) => setFormData(prev => ({ ...prev, systemName: e.target.value }))}
                    className="border-gray-300 focus:border-[#8C215D] focus:ring-[#8C215D]/20"
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    icon={<FaSave />}
                    className="w-full bg-[#8C215D] hover:bg-[#C34487] text-white"
                  >
                    บันทึกการตั้งค่า
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;