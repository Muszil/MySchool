// src/data/mockData.js
export const mockStudents = [
    {
      Students_ID: 1,
      Prefix: 'ด.ช.',
      First_NameStd: 'สมชาย',
      Last_NameStd: 'ใจดี',
      Classrooms_ID: 1,
      Classroom_Name: 'ป.1/1',
      Parent_ID: 1
    },
    {
      Students_ID: 2,
      Prefix: 'ด.ญ.', 
      First_NameStd: 'สมหญิง',
      Last_NameStd: 'รักเรียน',
      Classrooms_ID: 1,
      Classroom_Name: 'ป.1/1',
      Parent_ID: 2
    }
  ];
  
  export const mockClassrooms = [
    { Classrooms_ID: 1, Grade: 'ป.1', room: '1' },
    { Classrooms_ID: 2, Grade: 'ป.1', room: '2' },
    { Classrooms_ID: 3, Grade: 'ป.2', room: '1' }
  ];
  
  export const mockPayments = [
    {
      Payments_ID: 1,
      Students_ID: 1,
      Student_Name: 'สมชาย ใจดี',
      Date_Paid: '2024-01-15',
      Amounts_Paid: 1500.00,
      Balance_Paid: 0.00,
      Interest_Paid: 0.00,
      Status_Paid: 'Paid',
      approved: true,
      Slip_image: ''
    }
  ];