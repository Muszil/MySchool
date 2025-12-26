import React, { useState } from 'react';
import {
  FaEdit,
  FaFilter,
  FaTrash
} from 'react-icons/fa';
import ActionBar from '../../components/ui/ActionBar';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import Navigation from '../../components/ui/Navigation';
import StatsCards from '../../components/ui/StatsCards';

const ManageStudentsPage = () => {
  // ข้อมูลตัวอย่างนักเรียน
  const [students, setStudents] = useState([
    { id: 1, prefix: 'นาย', firstName: 'สมชาย', lastName: 'ดีมาก', classroom: 'ม.1/1' },
    { id: 2, prefix: 'นางสาว', firstName: 'สมหญิง', lastName: 'สุขใจ', classroom: 'ม.1/2' },
    { id: 3, prefix: 'นาย', firstName: 'วิชัย', lastName: 'พัฒนาการ', classroom: 'ม.2/1' },
    { id: 4, prefix: 'นางสาว', firstName: 'วรรณา', lastName: 'ศรีเมือง', classroom: 'ม.2/2' },
    { id: 5, prefix: 'นาย', firstName: 'อนุชา', lastName: 'ใจดี', classroom: 'ม.3/1' },
    { id: 6, prefix: 'นางสาว', firstName: 'กนกวรรณ', lastName: 'แสงทอง', classroom: 'ม.3/2' },
  ]);

  // State สำหรับฟิลเตอร์
  const [filters, setFilters] = useState({
    grade: '',
    class: '',
    search: ''
  });

  // ตัวเลือกเกรดและชั้นเรียน
  const grades = ['ทั้งหมด', 'มัธยมศึกษาปีที่ 1', 'มัธยมศึกษาปีที่ 2', 'มัธยมศึกษาปีที่ 3', 'มัธยมศึกษาปีที่ 4', 'มัธยมศึกษาปีที่ 5', 'มัธยมศึกษาปีที่ 6'];
  const classes = ['ทั้งหมด', '1/1', '1/2', '2/1', '2/2', '3/1', '3/2', '4/1', '4/2', '5/1', '5/2', '6/1', '6/2'];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleDeleteStudent = (id) => {
    if (window.confirm('คุณแน่ใจว่าต้องการลบนักเรียนคนนี้?')) {
      setStudents(prev => prev.filter(student => student.id !== id));
      alert('ลบนักเรียนสำเร็จ!');
    }
  };

  const handleEditStudent = (id) => {
    alert(`กำลังแก้ไขนักเรียน ID: ${id}`);
    // เปิด modal หรือไปหน้าแก้ไข
  };

  const handleAddNewStudent = () => {
    alert('เพิ่มนักเรียนใหม่');
    // เปิด modal หรือไปหน้าเพิ่มใหม่
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navigation />

      <div className="container mx-auto px-4 py-6">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">จัดการข้อมูลนักเรียน</h1>
        </div>

        <StatsCards />

        <ActionBar
          onExport={() => console.log('Export students')}
          onImport={() => console.log('Import students')}
          onCreateNew={() => console.log('Add new student')}
          onSearch={(value) => setFilters({ ...filters, search: value })}
          searchValue={filters.search}
          searchPlaceholder="ค้นหานักเรียน..."
          exportLabel="ส่งออกข้อมูลนักเรียน"
          importLabel="นำเข้าข้อมูลนักเรียน"
          createNewLabel="เพิ่มนักเรียนใหม่"
          
        />


        {/* Filter Section - Select Grade, Select Class */}
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Select Grade */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaFilter className="inline mr-2" />
                Select Grade
              </label>
              <select
                name="grade"
                value={filters.grade}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C215D]/20 focus:border-[#8C215D]"
              >
                {grades.map((grade, index) => (
                  <option key={index} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>

            {/* Select Class */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaFilter className="inline mr-2" />
                Select Class
              </label>
              <select
                name="class"
                value={filters.class}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C215D]/20 focus:border-[#8C215D]"
              >
                {classes.map((cls, index) => (
                  <option key={index} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prefix</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Classroom</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fix</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Del</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {students.map((student, index) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {index + 1}.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.prefix}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.firstName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.lastName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {student.classroom}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Button
                        variant="ghost"
                        icon={<FaEdit />}
                        onClick={() => handleEditStudent(student.id)}
                        className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                        size="sm"
                      >
                        แก้ไข
                      </Button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Button
                        variant="ghost"
                        icon={<FaTrash />}
                        onClick={() => handleDeleteStudent(student.id)}
                        className="text-red-600 hover:text-red-800 hover:bg-red-50"
                        size="sm"
                      >
                        ลบ
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-700">
            แสดง <span className="font-medium">1</span> ถึง <span className="font-medium">{students.length}</span> จาก{' '}
            <span className="font-medium">500</span> รายการ
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm" className="bg-[#8C215D] text-white">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStudentsPage;