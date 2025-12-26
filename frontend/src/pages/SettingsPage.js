import React, { useEffect, useState } from 'react';
import { FaCloudUploadAlt, FaSave } from 'react-icons/fa';
import Button from '../components/ui/Button';
import Header from '../components/ui/Header';
import Input from '../components/ui/Input';
import Navigation from '../components/ui/Navigation';

const SettingsPage = () => {
  const [uploading, setUploading] = useState(false);
  
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

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-4 py-6">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">⚙️ การตั้งค่า</h1>
          <p className="text-gray-600">จัดการข้อมูลโรงเรียนและโลโก้</p>
        </div>

        {/* Settings Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Logo Settings */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b">โลโก้โรงเรียน</h2>
            
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
                <div className="w-64 h-64 mx-auto mb-4">
                  <div className="w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center p-3 border-2 border-dashed border-gray-300 hover:border-[#8C215D] transition-colors">
                    <div className="w-full h-full bg-gradient-to-br from-[#8C215D] to-[#C34487] rounded-full flex items-center justify-center relative overflow-hidden">
                      
                      {schoolInfo.logo ? (
                        <img 
                          src={schoolInfo.logo} 
                          alt="School Logo" 
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : uploading ? (
                        <div className="text-center">
                          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white mx-auto mb-3"></div>
                          <p className="text-sm text-white">กำลังอัพโหลด...</p>
                        </div>
                      ) : (
                        <div className="text-center p-4">
                          <FaCloudUploadAlt className="text-5xl text-white/80 mx-auto mb-3" />
                          <p className="text-sm text-white font-medium">คลิกเพื่ออัพโหลดโลโก้</p>
                          <p className="text-xs text-white/60 mt-1">รองรับไฟล์ JPG, PNG, GIF</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </label>

              <div className="space-y-3">
                <p className="text-gray-600 text-sm">
                  {schoolInfo.logo ? 'คลิกที่โลโก้เพื่อเปลี่ยนรูปภาพ' : 'คลิกที่วงกลมด้านบนเพื่ออัพโหลดโลโก้'}
                </p>
                
                {schoolInfo.logo && (
                  <div className="flex gap-3 justify-center">
                    <Button
                      onClick={handleRemoveLogo}
                      variant="danger"
                      className="px-4 py-2 bg-red-800 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-300"
                    >
                      ลบโลโก้
                    </Button>
                    
                    
                  </div>
                )}
              </div>

              {schoolInfo.logo && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">URL โลโก้:</h3>
                  <p className="text-xs text-gray-600 break-all bg-white p-2 rounded border">
                    {schoolInfo.logo}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: School Info */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b">ข้อมูลโรงเรียน</h2>
            
            <form onSubmit={handleSaveSettings}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ชื่อโรงเรียน
                  </label>
                  <Input
                    placeholder="กรอกชื่อโรงเรียน"
                    value={formData.schoolName}
                    onChange={(e) => setFormData(prev => ({ ...prev, schoolName: e.target.value }))}
                    className="w-full py-3 px-4 border-gray-300 focus:border-[#8C215D] focus:ring-2 focus:ring-[#8C215D]/20 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ชื่อระบบ
                  </label>
                  <Input
                    placeholder="กรอกชื่อระบบ"
                    value={formData.systemName}
                    onChange={(e) => setFormData(prev => ({ ...prev, systemName: e.target.value }))}
                    className="w-full py-3 px-4 border-gray-300 focus:border-[#8C215D] focus:ring-2 focus:ring-[#8C215D]/20 rounded-lg"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  icon={<FaSave />}
                  className="w-full py-3 bg-[#8C215D] hover:bg-[#C34487] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  บันทึกการตั้งค่า
                </Button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-700 mb-3">ข้อมูลระบบ</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Cloudinary Cloud Name:</span>
                  <code className="bg-gray-100 px-2 py-1 rounded">{CLOUD_NAME}</code>
                </div>
                <div className="flex justify-between">
                  <span>Upload Preset:</span>
                  <code className="bg-gray-100 px-2 py-1 rounded">{UPLOAD_PRESET}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;