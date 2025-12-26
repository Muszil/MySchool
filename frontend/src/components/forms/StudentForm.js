import React, { useState } from 'react';
import Button from '../ui/Button';

const StudentForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    Prefix: '',
    First_NameStd: '',
    Last_NameStd: '',
    Classrooms_ID: '',
    Parent_ID: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      Prefix: '',
      First_NameStd: '',
      Last_NameStd: '',
      Classrooms_ID: '',
      Parent_ID: ''
    });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h3>{initialData ? 'แก้ไขนักเรียน' : 'เพิ่มนักเรียนใหม่'}</h3>
      
      <div className="form-group">
        <label>คำนำหน้า:</label>
        <input
          type="text"
          name="Prefix"
          value={formData.Prefix}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>ชื่อ:</label>
        <input
          type="text"
          name="First_NameStd"
          value={formData.First_NameStd}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>นามสกุล:</label>
        <input
          type="text"
          name="Last_NameStd"
          value={formData.Last_NameStd}
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit">
        {initialData ? 'อัพเดท' : 'บันทึก'}
      </Button>
    </form>
  );
};

export default StudentForm;