import React from 'react';

const Charts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* กราฟที่ 1 */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-gray-600 mb-4 font-medium">กราฟแสดงจำนวนนักเรียน</h3>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-500">
          กราฟจะแสดงที่นี่
        </div>
      </div>
      
      {/* กราฟที่ 2 */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-gray-600 mb-4 font-medium">กราฟแสดงการชำระเงิน</h3>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-500">
          กราฟจะแสดงที่นี่
        </div>
      </div>
    </div>
  );
};

export default Charts;