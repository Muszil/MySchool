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

const ManageTeachersPage = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, prefix: 'ครู', firstName: 'สมหมาย', lastName: 'สอนดี', subject: 'คณิตศาสตร์' },
    { id: 2, prefix: 'ครู', firstName: 'สุนีย์', lastName: 'ใจดี', subject: 'วิทยาศาสตร์' },
    { id: 3, prefix: 'ครู', firstName: 'ประยูร', lastName: 'สอนเก่ง', subject: 'ภาษาอังกฤษ' },
    { id: 4, prefix: 'ครู', firstName: 'วรรณา', lastName: 'สอนดี', subject: 'ภาษาไทย' },
  ]);

  const [filters, setFilters] = useState({
    subject: '',
    search: ''
  });

  const subjects = ['ทั้งหมด', 'คณิตศาสตร์', 'วิทยาศาสตร์', 'ภาษาอังกฤษ', 'ภาษาไทย', 'สังคมศึกษา'];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleDeleteTeacher = (id) => {
    if (window.confirm('คุณแน่ใจว่าต้องการลบครูคนนี้?')) {
      setTeachers(prev => prev.filter(teacher => teacher.id !== id));
      alert('ลบครูสำเร็จ!');
    }
  };

  const handleEditTeacher = (id) => {
    alert(`กำลังแก้ไขครู ID: ${id}`);
  };

  const handleAddNewTeacher = () => {
    alert('เพิ่มครูใหม่');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navigation />

      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">จัดการข้อมูลครู</h1>
        </div>

        <ActionBar
          onExport={() => console.log('Export teachers')}
          onImport={() => console.log('Import teachers')}
          onCreateNew={() => console.log('Add new teacher')}
          onSearch={(value) => setFilters({ ...filters, search: value })}
          searchValue={filters.search}
          searchPlaceholder="ค้นหาครู..."
          exportLabel="นำเข้าข้อมูลครู"
          importLabel="ส่งออกข้อมูลครู"
          createNewLabel="เพิ่มครูใหม่"
          
          //showImport={false} // ซ่อนปุ่มนำเข้า
        />

        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaFilter className="inline mr-2" />
                Select Subject
              </label>

              <select
                name="subject"
                value={filters.subject}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C215D]/20 focus:border-[#8C215D]"
              >
                {subjects.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prefix</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fix</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Del</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {teachers.map((teacher, index) => (
                  <tr key={teacher.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {index + 1}.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {teacher.prefix}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {teacher.firstName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {teacher.lastName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {teacher.subject}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Button
                        variant="ghost"
                        icon={<FaEdit />}
                        onClick={() => handleEditTeacher(teacher.id)}
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
                        onClick={() => handleDeleteTeacher(teacher.id)}
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

        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-700">
            แสดง <span className="font-medium">1</span> ถึง <span className="font-medium">{teachers.length}</span> จาก{' '}
            <span className="font-medium">50</span> รายการ
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

export default ManageTeachersPage;