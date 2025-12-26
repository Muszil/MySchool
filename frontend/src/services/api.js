// myschool/frontend/src/services/api.js
import axios from 'axios';
import API_CONFIG, { CLOUDINARY_CONFIG } from '../config/api';

// Create axios instance for backend API
const api = axios.create({
  baseURL: API_CONFIG.baseURL,
  timeout: API_CONFIG.timeout,
  headers: API_CONFIG.headers
});

// Request interceptor - เพิ่ม token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - handle errors
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error;
    
    if (response?.status === 401) {
      // Unauthorized - ลบ token และ redirect ไป login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    
    if (response?.status === 403) {
      // Forbidden
      console.error('Access forbidden');
    }
    
    if (response?.status === 404) {
      // Not found
      console.error('Resource not found');
    }
    
    if (response?.status === 422) {
      // Validation error
      console.error('Validation error:', response.data.errors);
    }
    
    if (response?.status >= 500) {
      // Server error
      console.error('Server error');
    }
    
    return Promise.reject(error.response?.data || error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (data) => api.post('/auth/register', data),
  logout: () => api.post('/auth/logout'),
  me: () => api.get('/auth/me'),
  refresh: () => api.post('/auth/refresh')
};

// Student API
export const studentAPI = {
  getAll: (params) => api.get('/students', { params }),
  getById: (id) => api.get(`/students/${id}`),
  create: (data) => api.post('/students', data),
  update: (id, data) => api.put(`/students/${id}`, data),
  delete: (id) => api.delete(`/students/${id}`),
  search: (query) => api.get(`/students/search?q=${query}`)
};

// Payment API
export const paymentAPI = {
  getAll: (params) => api.get('/payments', { params }),
  getById: (id) => api.get(`/payments/${id}`),
  create: (data) => api.post('/payments', data),
  update: (id, data) => api.put(`/payments/${id}`, data),
  delete: (id) => api.delete(`/payments/${id}`),
  getByStudentId: (studentId) => api.get(`/payments/student/${studentId}`),
  getSummary: () => api.get('/payments/summary')
};

// Classroom API
export const classroomAPI = {
  getAll: () => api.get('/classrooms'),
  getById: (id) => api.get(`/classrooms/${id}`),
  create: (data) => api.post('/classrooms', data),
  update: (id, data) => api.put(`/classrooms/${id}`, data),
  delete: (id) => api.delete(`/classrooms/${id}`)
};

// Cloudinary Upload Service
export const uploadService = {
  uploadImage: async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
    
    try {
      const response = await axios.post(
        CLOUDINARY_CONFIG.uploadURL,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          timeout: 60000
        }
      );
      return response.data;
    } catch (error) {
      console.error('Upload failed:', error);
      throw error;
    }
  }
};

// Utility functions
export const setupAuthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
  }
};

export const getAuthToken = () => localStorage.getItem('token');

export default api;