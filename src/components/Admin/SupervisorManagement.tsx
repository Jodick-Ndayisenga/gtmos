import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter,
  Plus,
  Edit,
  Eye,
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Star,
  BarChart3,
  Calendar,
  MessageSquare,
  FileText,
  Target,
  Activity,
  Download,
  Settings,
  UserCheck,
  UserX,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  BookOpen,
  Zap,
  Shield,
  Globe,
  Layers
} from 'lucide-react';

export function SupervisorManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedSupervisor, setSelectedSupervisor] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'overview' | 'performance' | 'workload'>('overview');

  const supervisors = [
    {
      id: '1',
      name: 'Dr. Sarah Wilson',
      email: 'sarah.wilson@university.edu',
      department: 'Computer Science',
      specialization: ['Machine Learning', 'Data Science', 'AI'],
      status: 'active',
      joinDate: '2019-03-15',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      phone: '+27 11 123 4567',
      location: 'Johannesburg, SA',
      workload: {
        currentStudents: 8,
        maxCapacity: 10,
        utilizationRate: 80,
        newStudentsThisYear: 3,
        graduatingStudents: 2
      },
      performance: {
        avgFeedbackTime: 2.3,
        studentSatisfaction: 4.7,
        completionRate: 92,
        onTimeGraduation: 95,
        publicationsWithStudents: 12,
        avgThesisGrade: 87.5
      },
      recentActivity: [
        { action: 'Approved thesis defense for Michael Chen', time: '2 hours ago', type: 'approval' },
        { action: 'Provided feedback on literature review', time: '1 day ago', type: 'feedback' },
        { action: 'Scheduled committee meeting', time: '2 days ago', type: 'meeting' }
      ],
      students: [
        { name: 'Michael Chen', progress: 85, status: 'on-track', phase: 'Writing' },
        { name: 'Lisa Rodriguez', progress: 92, status: 'excellent', phase: 'Defense Prep' },
        { name: 'James Kim', progress: 45, status: 'at-risk', phase: 'Research' },
        { name: 'Anna Thompson', progress: 78, status: 'on-track', phase: 'Analysis' }
      ],
      metrics: {
        totalSupervised: 34,
        currentlyActive: 8,
        successfulDefenses: 28,
        avgCompletionTime: 18.2,
        researchOutputs: 45,
        conferencesPresentations: 23
      }
    },
    {
      id: '2',
      name: 'Prof. Michael Chen',
      email: 'michael.chen@university.edu',
      department: 'Engineering',
      specialization: ['Robotics', 'Automation', 'Control Systems'],
      status: 'active',
      joinDate: '2016-08-22',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      phone: '+27 11 987 6543',
      location: 'Cape Town, SA',
      workload: {
        currentStudents: 12,
        maxCapacity: 12,
        utilizationRate: 100,
        newStudentsThisYear: 4,
        graduatingStudents: 3
      },
      performance: {
        avgFeedbackTime: 3.1,
        studentSatisfaction: 4.4,
        completionRate: 88,
        onTimeGraduation: 91,
        publicationsWithStudents: 18,
        avgThesisGrade: 84.2
      },
      recentActivity: [
        { action: 'Conducted thesis proposal review', time: '4 hours ago', type: 'review' },
        { action: 'Submitted progress report', time: '1 day ago', type: 'report' },
        { action: 'Attended department meeting', time: '3 days ago', type: 'meeting' }
      ],
      students: [
        { name: 'David Park', progress: 67, status: 'on-track', phase: 'Research' },
        { name: 'Emma Wilson', progress: 89, status: 'excellent', phase: 'Writing' },
        { name: 'Robert Johnson', progress: 34, status: 'needs-attention', phase: 'Proposal' }
      ],
      metrics: {
        totalSupervised: 56,
        currentlyActive: 12,
        successfulDefenses: 48,
        avgCompletionTime: 19.8,
        researchOutputs: 67,
        conferencesPresentations: 34
      }
    },
    {
      id: '3',
      name: 'Dr. Elizabeth Williams',
      email: 'elizabeth.williams@university.edu',
      department: 'Business Studies',
      specialization: ['Strategic Management', 'Innovation', 'Entrepreneurship'],
      status: 'active',
      joinDate: '2020-01-10',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      phone: '+27 11 555 0123',
      location: 'Pretoria, SA',
      workload: {
        currentStudents: 6,
        maxCapacity: 8,
        utilizationRate: 75,
        newStudentsThisYear: 2,
        graduatingStudents: 1
      },
      performance: {
        avgFeedbackTime: 1.8,
        studentSatisfaction: 4.9,
        completionRate: 95,
        onTimeGraduation: 98,
        publicationsWithStudents: 8,
        avgThesisGrade: 91.3
      },
      recentActivity: [
        { action: 'Published joint research paper', time: '1 hour ago', type: 'publication' },
        { action: 'Mentored junior supervisor', time: '6 hours ago', type: 'mentoring' },
        { action: 'Reviewed thesis methodology', time: '1 day ago', type: 'review' }
      ],
      students: [
        { name: 'Sarah Martinez', progress: 94, status: 'excellent', phase: 'Defense Prep' },
        { name: 'Kevin Brown', progress: 76, status: 'on-track', phase: 'Analysis' },
        { name: 'Maria Garcia', progress: 82, status: 'on-track', phase: 'Writing' }
      ],
      metrics: {
        totalSupervised: 18,
        currentlyActive: 6,
        successfulDefenses: 16,
        avgCompletionTime: 16.5,
        researchOutputs: 28,
        conferencesPresentations: 15
      }
    },
    {
      id: '4',
      name: 'Dr. James Rodriguez',
      email: 'james.rodriguez@university.edu',
      department: 'Sciences',
      specialization: ['Biochemistry', 'Molecular Biology', 'Genetics'],
      status: 'overloaded',
      joinDate: '2018-06-30',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      phone: '+27 11 444 5678',
      location: 'Durban, SA',
      workload: {
        currentStudents: 15,
        maxCapacity: 10,
        utilizationRate: 150,
        newStudentsThisYear: 6,
        graduatingStudents: 1
      },
      performance: {
        avgFeedbackTime: 6.2,
        studentSatisfaction: 3.8,
        completionRate: 76,
        onTimeGraduation: 82,
        publicationsWithStudents: 15,
        avgThesisGrade: 79.8
      },
      recentActivity: [
        { action: 'Requested workload adjustment', time: '3 hours ago', type: 'request' },
        { action: 'Delayed feedback submission', time: '2 days ago', type: 'delay' },
        { action: 'Attended supervision training', time: '1 week ago', type: 'training' }
      ],
      students: [
        { name: 'Alex Turner', progress: 56, status: 'at-risk', phase: 'Research' },
        { name: 'Nina Patel', progress: 71, status: 'on-track', phase: 'Analysis' },
        { name: 'Tom Wilson', progress: 23, status: 'needs-attention', phase: 'Proposal' }
      ],
      metrics: {
        totalSupervised: 42,
        currentlyActive: 15,
        successfulDefenses: 32,
        avgCompletionTime: 22.1,
        researchOutputs: 38,
        conferencesPresentations: 19
      }
    }
  ];

  const departmentStats = {
    'Computer Science': { supervisors: 12, avgWorkload: 7.2, satisfaction: 4.5, completion: 89 },
    'Engineering': { supervisors: 15, avgWorkload: 8.1, satisfaction: 4.3, completion: 85 },
    'Business Studies': { supervisors: 8, avgWorkload: 6.5, satisfaction: 4.7, completion: 92 },
    'Sciences': { supervisors: 11, avgWorkload: 9.2, satisfaction: 4.1, completion: 81 },
    'Medicine': { supervisors: 6, avgWorkload: 5.8, satisfaction: 4.8, completion: 94 },
    'Humanities': { supervisors: 9, avgWorkload: 6.9, satisfaction: 4.4, completion: 87 }
  };

  const overallMetrics = {
    totalSupervisors: supervisors.length,
    avgWorkload: 7.3,
    avgSatisfaction: 4.4,
    avgCompletionRate: 87.2,
    overloadedSupervisors: supervisors.filter(s => s.workload.utilizationRate > 100).length,
    underutilizedSupervisors: supervisors.filter(s => s.workload.utilizationRate < 60).length
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-50 border-green-200';
      case 'overloaded': return 'text-red-600 bg-red-50 border-red-200';
      case 'underutilized': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'inactive': return 'text-gray-600 bg-gray-50 border-gray-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getWorkloadColor = (rate: number) => {
    if (rate > 100) return 'text-red-600 bg-red-50';
    if (rate > 85) return 'text-orange-600 bg-orange-50';
    if (rate > 60) return 'text-green-600 bg-green-50';
    return 'text-yellow-600 bg-yellow-50';
  };

  const getPerformanceGrade = (performance: any) => {
    const score = (
      (performance.studentSatisfaction / 5) * 25 +
      (performance.completionRate / 100) * 25 +
      (performance.onTimeGraduation / 100) * 25 +
      (Math.max(0, 10 - performance.avgFeedbackTime) / 10) * 25
    );
    
    if (score >= 90) return { grade: 'A+', color: 'text-green-600' };
    if (score >= 85) return { grade: 'A', color: 'text-green-600' };
    if (score >= 80) return { grade: 'B+', color: 'text-blue-600' };
    if (score >= 75) return { grade: 'B', color: 'text-blue-600' };
    if (score >= 70) return { grade: 'C+', color: 'text-yellow-600' };
    return { grade: 'C', color: 'text-red-600' };
  };

  const filteredSupervisors = supervisors.filter(supervisor => {
    const matchesSearch = supervisor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supervisor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supervisor.specialization.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = filterDepartment === 'all' || supervisor.department === filterDepartment;
    const matchesStatus = filterStatus === 'all' || supervisor.status === filterStatus;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  return (
    <div className="space-y-8">
      {/* Hero Section with 3D Elements */}
      <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-3xl p-8 text-white overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-purple-400 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-indigo-400 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-400 rounded-full blur-lg animate-pulse delay-1500"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Supervisor Management Hub
              </h1>
              <p className="text-purple-100 text-lg">Advanced supervision analytics and workload optimization</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{overallMetrics.avgSatisfaction}</div>
                <div className="text-purple-200 text-sm">Avg Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{overallMetrics.avgCompletionRate}%</div>
                <div className="text-purple-200 text-sm">Completion Rate</div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-4">
            <button
              onClick={() => setViewMode('overview')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                viewMode === 'overview'
                  ? 'bg-white/20 text-white backdrop-blur-sm border border-white/30'
                  : 'text-purple-200 hover:text-white hover:bg-white/10'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setViewMode('performance')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                viewMode === 'performance'
                  ? 'bg-white/20 text-white backdrop-blur-sm border border-white/30'
                  : 'text-purple-200 hover:text-white hover:bg-white/10'
              }`}
            >
              Performance Analytics
            </button>
            <button
              onClick={() => setViewMode('workload')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                viewMode === 'workload'
                  ? 'bg-white/20 text-white backdrop-blur-sm border border-white/30'
                  : 'text-purple-200 hover:text-white hover:bg-white/10'
              }`}
            >
              Workload Management
            </button>
          </div>
        </div>
      </div>

      {/* Overview Tab */}
      {viewMode === 'overview' && (
        <>
          {/* Key Metrics with 3D Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Total Supervisors', 
                value: overallMetrics.totalSupervisors.toString(), 
                icon: Users, 
                color: 'from-blue-500 to-cyan-500',
                change: '+3 this year',
                trend: 'up'
              },
              { 
                title: 'Avg Workload', 
                value: `${overallMetrics.avgWorkload} students`, 
                icon: BarChart3, 
                color: 'from-green-500 to-emerald-500',
                change: '+0.5 from last year',
                trend: 'up'
              },
              { 
                title: 'Overloaded', 
                value: overallMetrics.overloadedSupervisors.toString(), 
                icon: AlertTriangle, 
                color: 'from-red-500 to-orange-500',
                change: 'Needs attention',
                trend: 'warning'
              },
              { 
                title: 'Avg Satisfaction', 
                value: overallMetrics.avgSatisfaction.toString(), 
                icon: Star, 
                color: 'from-purple-500 to-pink-500',
                change: '+0.2 improvement',
                trend: 'up'
              }
            ].map((metric, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                style={{ 
                  boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                  transform: `perspective(1000px) rotateX(${index * 2}deg)`
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{metric.change}</p>
                  </div>
                  <div className={`p-4 bg-gradient-to-br ${metric.color} rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110`}>
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search supervisors, specializations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full sm:w-80 pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <select
                    value={filterDepartment}
                    onChange={(e) => setFilterDepartment(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="all">All Departments</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Business Studies">Business Studies</option>
                    <option value="Sciences">Sciences</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Humanities">Humanities</option>
                  </select>

                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="overloaded">Overloaded</option>
                    <option value="underutilized">Underutilized</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    <Plus className="h-4 w-4" />
                    <span>Add Supervisor</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <Download className="h-4 w-4" />
                    <span>Export</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Supervisors Grid */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredSupervisors.map((supervisor) => {
                  const performanceGrade = getPerformanceGrade(supervisor.performance);
                  
                  return (
                    <div 
                      key={supervisor.id} 
                      className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                      style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <img
                              className="h-16 w-16 rounded-full object-cover ring-2 ring-gray-200 group-hover:ring-purple-300 transition-all duration-300"
                              src={supervisor.avatar}
                              alt={supervisor.name}
                            />
                            <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                              supervisor.status === 'active' ? 'bg-green-500' :
                              supervisor.status === 'overloaded' ? 'bg-red-500' : 'bg-yellow-500'
                            }`}></div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                              {supervisor.name}
                            </h3>
                            <p className="text-sm text-gray-600">{supervisor.department}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(supervisor.status)}`}>
                                {supervisor.status}
                              </span>
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${performanceGrade.color} bg-gray-50`}>
                                Grade: {performanceGrade.grade}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-purple-600 rounded-lg hover:bg-purple-50">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                            <Edit className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Specializations */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {supervisor.specialization.map((spec, idx) => (
                            <span key={idx} className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Workload Visualization */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Workload</span>
                          <span className={`text-sm font-bold ${getWorkloadColor(supervisor.workload.utilizationRate).split(' ')[0]}`}>
                            {supervisor.workload.currentStudents}/{supervisor.workload.maxCapacity} ({supervisor.workload.utilizationRate}%)
                          </span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-3">
                          <div 
                            className={`rounded-full h-3 transition-all duration-1000 ${
                              supervisor.workload.utilizationRate > 100 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                              supervisor.workload.utilizationRate > 85 ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                              supervisor.workload.utilizationRate > 60 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                              'bg-gradient-to-r from-yellow-500 to-orange-500'
                            }`}
                            style={{ 
                              width: `${Math.min(100, supervisor.workload.utilizationRate)}%`,
                              boxShadow: supervisor.workload.utilizationRate > 100 ? '0 2px 10px rgba(239, 68, 68, 0.3)' : '0 2px 10px rgba(34, 197, 94, 0.3)'
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Performance Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-3 bg-gray-50 rounded-xl">
                          <div className="text-lg font-bold text-purple-600">{supervisor.performance.studentSatisfaction}</div>
                          <div className="text-xs text-gray-600">Satisfaction</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-xl">
                          <div className="text-lg font-bold text-green-600">{supervisor.performance.completionRate}%</div>
                          <div className="text-xs text-gray-600">Completion</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-xl">
                          <div className="text-lg font-bold text-blue-600">{supervisor.performance.avgFeedbackTime}d</div>
                          <div className="text-xs text-gray-600">Feedback Time</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-xl">
                          <div className="text-lg font-bold text-orange-600">{supervisor.performance.publicationsWithStudents}</div>
                          <div className="text-xs text-gray-600">Publications</div>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4" />
                          <span className="truncate">{supervisor.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <span>{supervisor.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{supervisor.location}</span>
                        </div>
                      </div>

                      {/* Expanded Details */}
                      {selectedSupervisor === supervisor.id && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Current Students */}
                            <div>
                              <h5 className="font-medium text-gray-900 mb-2">Current Students</h5>
                              <div className="space-y-2">
                                {supervisor.students.slice(0, 3).map((student, idx) => (
                                  <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                    <div>
                                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                      <div className="text-xs text-gray-600">{student.phase}</div>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-sm font-medium">{student.progress}%</div>
                                      <div className={`text-xs ${
                                        student.status === 'excellent' ? 'text-green-600' :
                                        student.status === 'on-track' ? 'text-blue-600' :
                                        student.status === 'at-risk' ? 'text-orange-600' : 'text-red-600'
                                      }`}>
                                        {student.status}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Recent Activity */}
                            <div>
                              <h5 className="font-medium text-gray-900 mb-2">Recent Activity</h5>
                              <div className="space-y-2">
                                {supervisor.recentActivity.slice(0, 3).map((activity, idx) => (
                                  <div key={idx} className="flex items-start space-x-2 text-sm">
                                    <Activity className="h-4 w-4 text-gray-400 mt-0.5" />
                                    <div>
                                      <p className="text-gray-700">{activity.action}</p>
                                      <p className="text-gray-500 text-xs">{activity.time}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex space-x-2 pt-4">
                        <button 
                          onClick={() => setSelectedSupervisor(selectedSupervisor === supervisor.id ? null : supervisor.id)}
                          className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm transition-colors"
                        >
                          <Eye className="h-3 w-3" />
                          <span>{selectedSupervisor === supervisor.id ? 'Hide' : 'View'} Details</span>
                        </button>
                        <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm transition-colors">
                          <MessageSquare className="h-3 w-3" />
                          <span>Message</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Performance Analytics Tab */}
      {viewMode === 'performance' && (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white rounded-t-2xl">
              <h3 className="text-xl font-bold flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Performance Analytics Dashboard
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Performance Distribution */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Performance Grade Distribution</h4>
                  <div className="space-y-4">
                    {supervisors.map((supervisor, index) => {
                      const grade = getPerformanceGrade(supervisor.performance);
                      return (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                          <div className="flex items-center space-x-3">
                            <img className="h-8 w-8 rounded-full object-cover" src={supervisor.avatar} alt={supervisor.name} />
                            <div>
                              <div className="font-medium text-gray-900">{supervisor.name}</div>
                              <div className="text-sm text-gray-600">{supervisor.department}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-lg font-bold ${grade.color}`}>{grade.grade}</div>
                            <div className="text-sm text-gray-600">{supervisor.performance.studentSatisfaction}/5</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Department Comparison */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Department Performance Comparison</h4>
                  <div className="space-y-4">
                    {Object.entries(departmentStats).map(([dept, stats], index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="font-medium text-gray-900">{dept}</h5>
                          <span className="text-sm text-gray-600">{stats.supervisors} supervisors</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div className="text-center">
                            <div className="font-semibold text-blue-600">{stats.avgWorkload}</div>
                            <div className="text-gray-600">Avg Load</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-green-600">{stats.satisfaction}</div>
                            <div className="text-gray-600">Satisfaction</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-purple-600">{stats.completion}%</div>
                            <div className="text-gray-600">Completion</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Workload Management Tab */}
      {viewMode === 'workload' && (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white rounded-t-2xl">
              <h3 className="text-xl font-bold flex items-center">
                <BarChart3 className="h-6 w-6 mr-2" />
                Workload Distribution & Optimization
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Workload Visualization */}
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-4">Supervisor Workload Distribution</h4>
                  <div className="h-80 flex items-end justify-between space-x-2 bg-gradient-to-t from-orange-50 to-transparent rounded-xl p-4">
                    {supervisors.map((supervisor, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center group">
                        <div 
                          className={`w-full rounded-t-lg transition-all duration-1000 hover:scale-105 cursor-pointer ${
                            supervisor.workload.utilizationRate > 100 ? 'bg-gradient-to-t from-red-500 to-red-400' :
                            supervisor.workload.utilizationRate > 85 ? 'bg-gradient-to-t from-orange-500 to-orange-400' :
                            supervisor.workload.utilizationRate > 60 ? 'bg-gradient-to-t from-green-500 to-green-400' :
                            'bg-gradient-to-t from-yellow-500 to-yellow-400'
                          }`}
                          style={{ 
                            height: `${Math.min((supervisor.workload.utilizationRate / 150) * 250, 250)}px`,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                          }}
                          title={`${supervisor.name}: ${supervisor.workload.utilizationRate}% utilization`}
                        ></div>
                        <div className="text-xs text-gray-600 mt-2 text-center transform -rotate-45 origin-center w-16">
                          {supervisor.name.split(' ')[1]}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {supervisor.workload.utilizationRate}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workload Alerts */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Workload Alerts</h4>
                  <div className="space-y-3">
                    {supervisors
                      .filter(s => s.workload.utilizationRate > 100 || s.workload.utilizationRate < 60)
                      .map((supervisor, index) => (
                        <div 
                          key={index} 
                          className={`p-3 rounded-xl border ${
                            supervisor.workload.utilizationRate > 100 ? 'bg-red-50 border-red-200' : 'bg-yellow-50 border-yellow-200'
                          }`}
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <AlertTriangle className={`h-4 w-4 ${
                              supervisor.workload.utilizationRate > 100 ? 'text-red-600' : 'text-yellow-600'
                            }`} />
                            <span className="font-medium text-gray-900">{supervisor.name}</span>
                          </div>
                          <div className="text-sm text-gray-700">
                            {supervisor.workload.utilizationRate > 100 
                              ? `Overloaded: ${supervisor.workload.utilizationRate}% capacity`
                              : `Underutilized: ${supervisor.workload.utilizationRate}% capacity`
                            }
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            {supervisor.workload.currentStudents}/{supervisor.workload.maxCapacity} students
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}