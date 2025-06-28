import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Users, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp,
  MessageSquare,
  Calendar,
  FileText,
  Star,
  BarChart3
} from 'lucide-react';

export function SupervisorDashboard() {
  const { user } = useAuth();

  const students = [
    { 
      id: '1', 
      name: 'Sarah Johnson', 
      program: 'MSc Computer Science',
      progress: 68,
      status: 'on-track',
      lastCommunication: '2 days ago',
      upcomingDeadline: 'Literature Review - Jan 15',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    { 
      id: '2', 
      name: 'David Kim', 
      program: 'MSc Data Science',
      progress: 45,
      status: 'at-risk',
      lastCommunication: '1 week ago',
      upcomingDeadline: 'Methodology - Jan 10',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    { 
      id: '3', 
      name: 'Emily Rodriguez', 
      program: 'MSc AI',
      progress: 82,
      status: 'excellent',
      lastCommunication: '1 day ago',
      upcomingDeadline: 'Data Analysis - Feb 1',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  ];

  const pendingTasks = [
    { id: '1', type: 'review', title: 'Review Sarah\'s Literature Review Draft', student: 'Sarah Johnson', dueDate: 'Today', priority: 'high' },
    { id: '2', type: 'feedback', title: 'Provide feedback on David\'s proposal', student: 'David Kim', dueDate: 'Jan 8', priority: 'urgent' },
    { id: '3', type: 'meeting', title: 'Weekly meeting with Emily', student: 'Emily Rodriguez', dueDate: 'Jan 10', priority: 'medium' },
  ];

  const supervisionMetrics = {
    totalStudents: 6,
    activeStudents: 6,
    avgFeedbackTime: 3.2,
    completionRate: 85,
    avgProgress: 65
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome, Dr. {user?.name?.split(' ')[1]}!</h1>
            <p className="text-teal-100 mt-1">Supervising {supervisionMetrics.totalStudents} graduate students</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{supervisionMetrics.completionRate}%</div>
            <div className="text-teal-100 text-sm">Completion Rate</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Students</p>
              <p className="text-xl font-semibold text-gray-900">{supervisionMetrics.activeStudents}</p>
            </div>
            <Users className="h-8 w-8 text-teal-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Feedback Time</p>
              <p className="text-xl font-semibold text-blue-600">{supervisionMetrics.avgFeedbackTime}d</p>
            </div>
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Progress</p>
              <p className="text-xl font-semibold text-green-600">{supervisionMetrics.avgProgress}%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Reviews</p>
              <p className="text-xl font-semibold text-orange-600">3</p>
            </div>
            <FileText className="h-8 w-8 text-orange-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Student Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Users className="h-5 w-5 text-teal-600 mr-2" />
              Student Overview
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {students.map((student) => (
                <div key={student.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={student.avatar}
                    alt={student.name}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">{student.name}</h4>
                        <p className="text-sm text-gray-600">{student.program}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          student.status === 'excellent' ? 'bg-green-100 text-green-800' :
                          student.status === 'on-track' ? 'bg-blue-100 text-blue-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {student.status === 'excellent' ? 'Excellent' :
                           student.status === 'on-track' ? 'On Track' : 'At Risk'}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Progress: {student.progress}%</span>
                        <span>Last contact: {student.lastCommunication}</span>
                      </div>
                      <div className="mt-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`rounded-full h-2 ${
                            student.status === 'excellent' ? 'bg-green-500' :
                            student.status === 'on-track' ? 'bg-blue-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Next: {student.upcomingDeadline}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
              Pending Tasks
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {pendingTasks.map((task) => (
                <div key={task.id} className={`p-4 rounded-lg border-l-4 ${
                  task.priority === 'urgent' ? 'border-red-500 bg-red-50' :
                  task.priority === 'high' ? 'border-orange-500 bg-orange-50' : 'border-blue-500 bg-blue-50'
                }`}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{task.title}</h4>
                      <p className="text-sm text-gray-600">Student: {task.student}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-sm font-medium ${
                        task.priority === 'urgent' ? 'text-red-600' :
                        task.priority === 'high' ? 'text-orange-600' : 'text-blue-600'
                      }`}>
                        {task.dueDate}
                      </span>
                      <div className={`text-xs uppercase tracking-wide ${
                        task.priority === 'urgent' ? 'text-red-500' :
                        task.priority === 'high' ? 'text-orange-500' : 'text-blue-500'
                      }`}>
                        {task.priority}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <BarChart3 className="h-5 w-5 text-purple-600 mr-2" />
            Supervision Performance
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">{supervisionMetrics.completionRate}%</div>
              <div className="text-sm text-gray-600">Student Completion Rate</div>
              <div className="text-xs text-gray-500 mt-1">Above department average (78%)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{supervisionMetrics.avgFeedbackTime}</div>
              <div className="text-sm text-gray-600">Avg Feedback Time (days)</div>
              <div className="text-xs text-gray-500 mt-1">Below target (5 days)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">4.8</div>
              <div className="text-sm text-gray-600">Student Rating</div>
              <div className="flex justify-center mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={`h-4 w-4 ${star <= 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}