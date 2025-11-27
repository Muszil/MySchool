import React from 'react';
import Button from '../ui/Button';

const StudentList = ({ students, onEdit, onDelete }) => {
  return (
    <div className="student-list">
      <table className="table">
        <thead>
          <tr>
            <th>รหัสนักเรียน</th>
            <th>ชื่อ-นามสกุล</th>
            <th>ห้องเรียน</th>
            <th>การจัดการ</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.Students_ID}>
              <td>{student.Students_ID}</td>
              <td>{student.First_NameStd} {student.Last_NameStd}</td>
              <td>{student.Classrooms_ID}</td>
              <td>
                <Button variant="secondary" onClick={() => onEdit?.(student)}>
                  แก้ไข
                </Button>
                <Button variant="secondary" onClick={() => onDelete?.(student.Students_ID)}>
                  ลบ
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;