import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter,
  TrendingUp,
  Clock,
  MessageSquare,
  FileText,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Star,
  Eye,
  MoreVertical,
  Plus,
  BarChart3,
  Target,
  Award
} from 'lucide-react';

export function StudentsManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const students = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@university.edu',
      program: 'MSc Computer Science',
      thesisTitle: 'Machine Learning Applications in Healthcare Data Analysis',
      progress: 68,
      status: 'on-track',
      enrollmentDate: '2021-09-01',
      expectedCompletion: '2024-08-01',
      lastCommunication: '2024-01-12',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      milestones: {
        completed: 4,
        total: 8,
        current: 'Literature Review'
      },
      documents: {
        submitted: 12,
        pending: 2,
        approved: 8
      },
      meetings: {
        total: 15,
        thisMonth: 3,
        nextScheduled: '2024-01-15'
      },
      performance: {
        rating: 4.5,
        feedbackScore: 4.2,
        timeManagement: 4.8,
        communication: 4.3
      },
      recentActivity: [
        { type: 'document', action: 'Submitted Literature Review Draft v2', date: '2024-01-12' },
        { type: 'meeting', action: 'Attended weekly supervision meeting', date: '2024-01-10' },
        { type: 'milestone', action: 'Completed Proposal Defense', date: '2024-01-05' }
      ]
    },
    {
      id: '2',
      name: 'David Kim',
      email: 'david.kim@university.edu',
      program: 'MSc Data Science',
      thesisTitle: 'Predictive Analytics for Financial Risk Assessment',
      progress: 45,
      status: 'at-risk',
      enrollmentDate: '2022-02-01',
      expectedCompletion: '2024-12-01',
      lastCommunication: '2024-01-05',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      milestones: {
        completed: 2,
        total: 8,
        current: 'Methodology Development'
      },
      documents: {
        submitted: 8,
        pending: 3,
        approved: 4
      },
      meetings: {
        total: 8,
        thisMonth: 1,
        nextScheduled: '2024-01-18'
      },
      performance: {
        rating: 3.2,
        feedbackScore: 3.5,
        timeManagement: 2.8,
        communication: 3.1
      },
      recentActivity: [
        { type: 'alert', action: 'Missed scheduled meeting', date: '2024-01-08' },
        { type: 'document', action: 'Submitted Methodology Draft', date: '2024-01-03' },
        { type: 'communication', action: 'Requested extension for proposal', date: '2023-12-28' }
      ]
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@university.edu',
      program: 'MSc Artificial Intelligence',
      thesisTitle: 'Deep Learning for Natural Language Processing in Legal Documents',
      progress: 82,
      status: 'excellent',
      enrollmentDate: '2021-09-01',
      expectedCompletion: '2024-06-01',
      lastCommunication: '2024-01-13',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      milestones: {
        completed: 6,
        total: 8,
        current: 'Final Draft Preparation'
      },
      documents: {
        submitted: 18,
        pending: 1,
        approved: 16
      },
      meetings: {
        total: 22,
        thisMonth: 4,
        nextScheduled: '2024-01-16'
      },
      performance: {
        rating: 4.9,
        feedbackScore: 4.8,
        timeManagement: 4.9,
        communication: 4.8
      },
      recentActivity: [
        { type: 'document', action: 'Submitted Chapter 5 - Results Analysis', date: '2024-01-13' },
        { type: 'achievement', action: 'Received Best Paper Award at Conference', date: '2024-01-10' },
        { type: 'meeting', action: 'Committee meeting completed', date: '2024-01-08' }
      ]
    },
    {
      id: '4',
      name: 'Michael Thompson',
      email: 'michael.thompson@university.edu',
      program: 'MSc Cybersecurity',
      thesisTitle: 'Blockchain-based Security Framework for IoT Networks',
      progress: 35,
      status: 'needs-attention',
      enrollmentDate: '2022-09-01',
      expectedCompletion: '2025-08-01',
      lastCommunication: '2023-12-20',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      milestones: {
        completed: 2,
        total: 8,
        current: 'Literature Review'
      },
      documents: {
        submitted: 5,
        pending: 2,
        approved: 2
      },
      meetings: {
        total: 6,
        thisMonth: 0,
        nextScheduled: 'Not scheduled'
      },
      performance: {
        rating: 2.8,
        feedbackScore: 3.0,
        timeManagement: 2.2,
        communication: 2.5
      },
      recentActivity: [
        { type: 'alert', action: 'No communication for 3+ weeks', date: '2024-01-13' },
        { type: 'document', action: 'Overdue: Literature Review submission', date: '2024-01-01' },
        { type: 'meeting', action: 'Cancelled meeting without notice', date: '2023-12-18' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-50 border-green-200';
      case 'on-track': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'at-risk': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'needs-attention': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'document': return <FileText className="h-4 w-4 text-blue-600" />;
      case 'meeting': return <Calendar className="h-4 w-4 text-green-600" />;
      case 'milestone': return <Target className="h-4 w-4 text-purple-600" />;
      case 'achievement': return <Award className="h-4 w-4 text-yellow-600" />;
      case 'alert': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'communication': return <MessageSquare className="h-4 w-4 text-gray-600" />;
      default: return <FileText className="h-4 w-4 text-gray-600" />;
    }
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.thesisTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || student.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const studentStats = {
    total: students.length,
    excellent: students.filter(s => s.status === 'excellent').length,
    onTrack: students.filter(s => s.status === 'on-track').length,
    atRisk: students.filter(s => s.status === 'at-risk').length,
    needsAttention: students.filter(s => s.status === 'needs-attention').length,
    avgProgress: Math.round(students.reduce((acc, s) => acc + s.progress, 0) / students.length)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Student Management</h1>
            <p className="text-indigo-100 mt-1">Comprehensive oversight of all supervised students</p>
          </div>
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add Student</span>
          </button>
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{studentStats.total}</div>
            <div className="text-sm text-gray-600">Total Students</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{studentStats.excellent}</div>
            <div className="text-sm text-gray-600">Excellent</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{studentStats.onTrack}</div>
            <div className="text-sm text-gray-600">On Track</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{studentStats.atRisk}</div>
            <div className="text-sm text-gray-600">At Risk</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{studentStats.needsAttention}</div>
            <div className="text-sm text-gray-600">Needs Attention</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{studentStats.avgProgress}%</div>
            <div className="text-sm text-gray-600">Avg Progress</div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search students or thesis titles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="excellent">Excellent</option>
                <option value="on-track">On Track</option>
                <option value="at-risk">At Risk</option>
                <option value="needs-attention">Needs Attention</option>
              </select>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <BarChart3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Users className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Students Display */}
        <div className="p-6">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredStudents.map((student) => (
                <div key={student.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src={student.avatar}
                        alt={student.name}
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{student.name}</h3>
                        <p className="text-sm text-gray-600">{student.program}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(student.status)}`}>
                        {student.status.replace('-', ' ')}
                      </span>
                      <button 
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() => setSelectedStudent(selectedStudent === student.id ? null : student.id)}
                      >
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Thesis Title:</h4>
                    <p className="text-sm text-gray-700">{student.thesisTitle}</p>
                  </div>

                  {/* Progress Visualization */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                      <span className="text-sm font-bold text-gray-900">{student.progress}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className={`rounded-full h-2 transition-all duration-500 ${
                          student.status === 'excellent' ? 'bg-green-500' :
                          student.status === 'on-track' ? 'bg-blue-500' :
                          student.status === 'at-risk' ? 'bg-orange-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900">{student.milestones.completed}/{student.milestones.total}</div>
                      <div className="text-xs text-gray-600">Milestones</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900">{student.documents.approved}</div>
                      <div className="text-xs text-gray-600">Approved Docs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900">{student.meetings.total}</div>
                      <div className="text-xs text-gray-600">Meetings</div>
                    </div>
                  </div>

                  {/* Performance Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-3 w-3 ${
                            star <= student.performance.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">{student.performance.rating}/5</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Last contact: {new Date(student.lastCommunication).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedStudent === student.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Performance Breakdown */}
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Performance Breakdown</h5>
                          <div className="space-y-2">
                            {Object.entries(student.performance).map(([key, value]) => (
                              <div key={key} className="flex justify-between items-center">
                                <span className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                                <div className="flex items-center space-x-2">
                                  <div className="w-16 bg-gray-200 rounded-full h-1">
                                    <div 
                                      className="bg-blue-500 rounded-full h-1"
                                      style={{ width: `${(value / 5) * 100}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-sm font-medium">{value}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Recent Activity */}
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Recent Activity</h5>
                          <div className="space-y-2">
                            {student.recentActivity.slice(0, 3).map((activity, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                {getActivityIcon(activity.type)}
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs text-gray-700">{activity.action}</p>
                                  <p className="text-xs text-gray-500">{new Date(activity.date).toLocaleDateString()}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-4 flex space-x-2">
                        <button className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                          <MessageSquare className="h-3 w-3" />
                          <span>Message</span>
                        </button>
                        <button className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                          <Calendar className="h-3 w-3" />
                          <span>Schedule Meeting</span>
                        </button>
                        <button className="flex items-center space-x-1 px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700">
                          <Eye className="h-3 w-3" />
                          <span>View Details</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredStudents.map((student) => (
                <div key={student.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={student.avatar}
                        alt={student.name}
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{student.name}</h3>
                        <p className="text-sm text-gray-600">{student.program}</p>
                      </div>
                      <div className="hidden md:block">
                        <p className="text-sm text-gray-700 max-w-md truncate">{student.thesisTitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-gray-900">{student.progress}%</div>
                        <div className="text-xs text-gray-600">Progress</div>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(student.status)}`}>
                        {student.status.replace('-', ' ')}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}