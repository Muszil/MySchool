// src/hooks/useStudents.js
import { useEffect, useState } from 'react';
import { studentService } from '../services/studentService';

// ต้องใช้ named export ด้วย "export" นำหน้า
export const useStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      setLoading(true);
      const data = await studentService.getAll();
      setStudents(data);
    } catch (err) {
      setError('Failed to load students');
      console.error('Error loading students:', err);
    } finally {
      setLoading(false);
    }
  };

  const addStudent = async (studentData) => {
    try {
      const newStudent = await studentService.create(studentData);
      setStudents(prev => [...prev, newStudent]);
      return newStudent;
    } catch (err) {
      setError('Failed to add student');
      throw err;
    }
  };

  return {
    students,
    loading,
    error,
    reloadStudents: loadStudents,
    addStudent
  };
};