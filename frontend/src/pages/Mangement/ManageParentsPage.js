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

const ManageParentsPage = () => {
  const [parents, setParents] = useState([
    { id: 1, prefix: 'นาย', firstName: 'สมพงษ์', lastName: 'ดีมาก', studentName: 'สมชาย ดีมาก', relationship: 'บิดา' },
    { id: 2, prefix: 'นาง', firstName: 'สมหญิง', lastName: 'สุขใจ', studentName: 'สมหญิง สุขใจ', relationship: 'มารดา' },
    { id: 3, prefix: 'นาย', firstName: 'วิชัย', lastName: 'พัฒนาการ', studentName: 'วิชัย พัฒนาการ', relationship: 'บิดา' },
    { id: 4, prefix: 'นาง', firstName: 'วรรณา', lastName: 'ศรีเมือง', studentName: 'วรรณา ศรีเมือง', relationship: 'มารดา' },
  ]);

  const [filters, setFilters] = useState({
    relationship: '',
    search: ''
  });

  const relationships = ['ทั้งหมด', 'บิดา', 'มารดา', 'ผู้ปกครอง'];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleDeleteParent = (id) => {
    if (window.confirm('คุณแน่ใจว่าต้องการลบผู้ปกครองคนนี้?')) {
      setParents(prev => prev.filter(parent => parent.id !== id));
      alert('ลบผู้ปกครองสำเร็จ!');
    }
  };

  const handleEditParent = (id) => {
    alert(`กำลังแก้ไขผู้ปกครอง ID: ${id}`);
  };

  const handleAddNewParent = () => {
    alert('เพิ่มผู้ปกครองใหม่');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navigation />

      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">จัดการข้อมูลผู้ปกครอง</h1>
        </div>

        <ActionBar
          onExport={() => console.log('Export parents')}
          onImport={() => console.log('Import parents')}
          onCreateNew={() => console.log('Add new parent')}
          onSearch={(value) => setFilters({ ...filters, search: value })}
          onFilter={(value) => setFilters({ ...filters, relationship: value })}
          searchValue={filters.search}
          filterValue={filters.relationship}
          searchPlaceholder="ค้นหาผู้ปกครอง..."
          exportLabel="นำเข้าข้อมูลผู้ปกครอง"
          importLabel="ส่งออกข้อมูลผู้ปกครอง"
          createNewLabel="เพิ่มผู้ปกครองใหม่"
          primaryColor="#1A8049" // สีเขียว
          
        />

        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaFilter className="inline mr-2" />
                Select Relationship
              </label>
              <select
                name="relationship"
                value={filters.relationship}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C215D]/20 focus:border-[#8C215D]"
              >
                {relationships.map((relationship, index) => (
                  <option key={index} value={relationship}>
                    {relationship}
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Relationship</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fix</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Del</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {parents.map((parent, index) => (
                  <tr key={parent.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {index + 1}.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {parent.prefix}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {parent.firstName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {parent.lastName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {parent.studentName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {parent.relationship}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Button
                        variant="ghost"
                        icon={<FaEdit />}
                        onClick={() => handleEditParent(parent.id)}
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
                        onClick={() => handleDeleteParent(parent.id)}
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
            แสดง <span className="font-medium">1</span> ถึง <span className="font-medium">{parents.length}</span> จาก{' '}
            <span className="font-medium">100</span> รายการ
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

export default ManageParentsPage;