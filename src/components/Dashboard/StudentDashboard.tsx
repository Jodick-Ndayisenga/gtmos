import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  BookOpen, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp,
  MessageSquare,
  Calendar,
  FileText,
  User
} from 'lucide-react';

export function StudentDashboard() {
  const { user } = useAuth();

  const thesisProgress = 68;
  const upcomingDeadlines = [
    { id: '1', title: 'Literature Review Draft', dueDate: '2024-01-15', type: 'milestone', overdue: false },
    { id: '2', title: 'Methodology Chapter', dueDate: '2024-01-08', type: 'milestone', overdue: true },
    { id: '3', title: 'Supervisor Meeting', dueDate: '2024-01-10', type: 'meeting', overdue: false },
  ];

  const recentActivities = [
    { id: '1', type: 'feedback', description: 'Received feedback on Chapter 2', time: '2 hours ago', icon: MessageSquare },
    { id: '2', type: 'document', description: 'Uploaded revised proposal', time: '1 day ago', icon: FileText },
    { id: '3', type: 'meeting', description: 'Meeting with Dr. Chen completed', time: '2 days ago', icon: Calendar },
  ];

  const milestones = [
    { name: 'Proposal Submission', status: 'completed', date: '2023-09-15' },
    { name: 'Proposal Defense', status: 'completed', date: '2023-10-20' },
    { name: 'Literature Review', status: 'in-progress', date: '2024-01-15' },
    { name: 'Data Collection', status: 'pending', date: '2024-03-01' },
    { name: 'Final Draft', status: 'pending', date: '2024-06-15' },
    { name: 'Defense', status: 'pending', date: '2024-08-01' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {user?.name?.split(' ')[0]}!</h1>
            <p className="text-blue-100 mt-1">Continue your thesis journey</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{thesisProgress}%</div>
            <div className="text-blue-100 text-sm">Overall Progress</div>
          </div>
        </div>
        <div className="mt-4 bg-blue-500 bg-opacity-30 rounded-full h-2">
          <div 
            className="bg-white rounded-full h-2 transition-all duration-300"
            style={{ width: `${thesisProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Current Phase</p>
              <p className="text-xl font-semibold text-gray-900">Research</p>
            </div>
            <BookOpen className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Days to Next Deadline</p>
              <p className="text-xl font-semibold text-red-600">3</p>
            </div>
            <Clock className="h-8 w-8 text-red-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed Milestones</p>
              <p className="text-xl font-semibold text-green-600">2/6</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Reviews</p>
              <p className="text-xl font-semibold text-yellow-600">1</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Thesis Progress */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
              Thesis Milestones
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`h-3 w-3 rounded-full ${
                    milestone.status === 'completed' ? 'bg-green-500' :
                    milestone.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${
                        milestone.status === 'completed' ? 'text-green-700' :
                        milestone.status === 'in-progress' ? 'text-blue-700' : 'text-gray-500'
                      }`}>
                        {milestone.name}
                      </span>
                      <span className="text-sm text-gray-500">{milestone.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Clock className="h-5 w-5 text-red-600 mr-2" />
              Upcoming Deadlines
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline) => (
                <div key={deadline.id} className={`p-4 rounded-lg border-l-4 ${
                  deadline.overdue ? 'border-red-500 bg-red-50' : 'border-yellow-500 bg-yellow-50'
                }`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">{deadline.title}</h4>
                      <p className="text-sm text-gray-600 capitalize">{deadline.type}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-sm font-medium ${
                        deadline.overdue ? 'text-red-600' : 'text-yellow-600'
                      }`}>
                        {deadline.overdue ? 'Overdue' : deadline.dueDate}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Icon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.description}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Supervisor Info */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Supervision Team</h3>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
              alt="Supervisor"
            />
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">Dr. Michael Chen</h4>
              <p className="text-sm text-gray-600">Primary Supervisor</p>
              <p className="text-sm text-gray-500">Computer Science Department</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}