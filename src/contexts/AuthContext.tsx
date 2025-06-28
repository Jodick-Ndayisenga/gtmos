import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Student, Supervisor, Administrator } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  switchRole: (role: 'student' | 'supervisor' | 'admin') => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@university.edu',
    role: 'student',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    department: 'Computer Science',
    studentId: 'CS2021001',
    program: 'Master of Science in Computer Science',
    yearOfStudy: 2,
    supervisorId: '2',
    thesisTitle: 'Machine Learning Applications in Healthcare Data Analysis',
    enrollmentDate: '2021-09-01'
  } as Student,
  {
    id: '2',
    name: 'Dr. Michael Chen',
    email: 'michael.chen@university.edu',
    role: 'supervisor',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    department: 'Computer Science',
    staffId: 'STAFF001',
    researchAreas: ['Machine Learning', 'Data Science', 'Healthcare Technology'],
    maxStudents: 8,
    currentStudents: 6,
    avgFeedbackTime: 3.2,
    completionRate: 85
  } as Supervisor,
  {
    id: '3',
    name: 'Prof. Elizabeth Williams',
    email: 'elizabeth.williams@university.edu',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    department: 'Graduate School',
    permissions: ['view-all', 'manage-users', 'handle-grievances', 'generate-reports']
  } as Administrator
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for existing session
    const savedUser = localStorage.getItem('gtmos-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('gtmos-user', JSON.stringify(foundUser));
    } else {
      throw new Error('Invalid credentials');
    }
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('gtmos-user');
  };

  const switchRole = (role: 'student' | 'supervisor' | 'admin') => {
    const newUser = mockUsers.find(u => u.role === role);
    if (newUser) {
      setUser(newUser);
      localStorage.setItem('gtmos-user', JSON.stringify(newUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, switchRole, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}