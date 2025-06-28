import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  Shield,
  UserCheck,
  UserX,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Award,
  AlertTriangle,
  CheckCircle,
  Clock,
  MoreVertical,
  Download,
  Upload,
  Settings,
  Key,
  Lock,
  Unlock,
  UserPlus,
  FileText,
  Activity,
  TrendingUp,
  BarChart3
} from 'lucide-react';

export function UserManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [showUserForm, setShowUserForm] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const users = [
    {
      id: '1',
      name: 'Dr. Sarah Wilson',
      email: 'sarah.wilson@university.edu',
      role: 'supervisor',
      department: 'Computer Science',
      status: 'active',
      lastLogin: '2024-01-13 09:30',
      joinDate: '2019-03-15',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      phone: '+27 11 123 4567',
      location: 'Johannesburg, SA',
      permissions: ['view-students', 'manage-thesis', 'provide-feedback'],
      stats: {
        studentsSupervised: 8,
        thesesCompleted: 23,
        avgRating: 4.7,
        responseTime: 2.3
      },
      recentActivity: [
        { action: 'Provided feedback on thesis draft', time: '2 hours ago' },
        { action: 'Scheduled meeting with student', time: '1 day ago' },
        { action: 'Approved milestone completion', time: '2 days ago' }
      ]
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael.chen@university.edu',
      role: 'student',
      department: 'Engineering',
      status: 'active',
      lastLogin: '2024-01-13 14:15',
      joinDate: '2022-09-01',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      phone: '+27 11 987 6543',
      location: 'Cape Town, SA',
      permissions: ['view-own-thesis', 'submit-documents', 'communicate'],
      stats: {
        thesisProgress: 68,
        documentsSubmitted: 12,
        meetingsAttended: 15,
        avgGrade: 85.2
      },
      recentActivity: [
        { action: 'Submitted literature review draft', time: '3 hours ago' },
        { action: 'Attended supervision meeting', time: '2 days ago' },
        { action: 'Updated thesis proposal', time: '1 week ago' }
      ]
    },
    {
      id: '3',
      name: 'Prof. Elizabeth Williams',
      email: 'elizabeth.williams@university.edu',
      role: 'admin',
      department: 'Graduate School',
      status: 'active',
      lastLogin: '2024-01-13 16:45',
      joinDate: '2015-01-10',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      phone: '+27 11 555 0123',
      location: 'Pretoria, SA',
      permissions: ['full-access', 'user-management', 'system-config', 'reports'],
      stats: {
        usersManaged: 156,
        reportsGenerated: 45,
        issuesResolved: 23,
        systemUptime: 99.7
      },
      recentActivity: [
        { action: 'Generated monthly analytics report', time: '1 hour ago' },
        { action: 'Resolved user access issue', time: '4 hours ago' },
        { action: 'Updated system permissions', time: '1 day ago' }
      ]
    },
    {
      id: '4',
      name: 'Dr. James Rodriguez',
      email: 'james.rodriguez@university.edu',
      role: 'supervisor',
      department: 'Business Studies',
      status: 'inactive',
      lastLogin: '2024-01-05 11:20',
      joinDate: '2020-08-22',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      phone: '+27 11 444 5678',
      location: 'Durban, SA',
      permissions: ['view-students', 'manage-thesis'],
      stats: {
        studentsSupervised: 5,
        thesesCompleted: 12,
        avgRating: 4.2,
        responseTime: 5.1
      },
      recentActivity: [
        { action: 'Last login to system', time: '8 days ago' },
        { action: 'Provided feedback', time: '2 weeks ago' },
        { action: 'Scheduled meeting', time: '3 weeks ago' }
      ]
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      email: 'lisa.thompson@university.edu',
      role: 'student',
      department: 'Sciences',
      status: 'suspended',
      lastLogin: '2023-12-20 09:15',
      joinDate: '2021-02-14',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      phone: '+27 11 333 9876',
      location: 'Port Elizabeth, SA',
      permissions: ['limited-access'],
      stats: {
        thesisProgress: 25,
        documentsSubmitted: 3,
        meetingsAttended: 2,
        avgGrade: 62.5
      },
      recentActivity: [
        { action: 'Account suspended', time: '3 weeks ago' },
        { action: 'Missed deadline warning', time: '1 month ago' },
        { action: 'Submitted incomplete work', time: '6 weeks ago' }
      ]
    },
    {
      id: '6',
      name: 'Dr. Ahmed Hassan',
      email: 'ahmed.hassan@university.edu',
      role: 'supervisor',
      department: 'Medicine',
      status: 'active',
      lastLogin: '2024-01-13 13:22',
      joinDate: '2018-06-30',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      phone: '+27 11 222 3456',
      location: 'Johannesburg, SA',
      permissions: ['view-students', 'manage-thesis', 'provide-feedback', 'committee-member'],
      stats: {
        studentsSupervised: 12,
        thesesCompleted: 34,
        avgRating: 4.9,
        responseTime: 1.8
      },
      recentActivity: [
        { action: 'Approved thesis defense', time: '30 minutes ago' },
        { action: 'Conducted committee meeting', time: '2 hours ago' },
        { action: 'Reviewed research proposal', time: '5 hours ago' }
      ]
    }
  ];

  const userStats = {
    total: users.length,
    active: users.filter(u => u.status === 'active').length,
    inactive: users.filter(u => u.status === 'inactive').length,
    suspended: users.filter(u => u.status === 'suspended').length,
    students: users.filter(u => u.role === 'student').length,
    supervisors: users.filter(u => u.role === 'supervisor').length,
    admins: users.filter(u => u.role === 'admin').length
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-50 border-green-200';
      case 'inactive': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'suspended': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-purple-100 text-purple-800';
      case 'supervisor': return 'bg-blue-100 text-blue-800';
      case 'student': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-4 w-4" />;
      case 'inactive': return <Clock className="h-4 w-4" />;
      case 'suspended': return <AlertTriangle className="h-4 w-4" />;
      default: return <UserX className="h-4 w-4" />;
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <div className="space-y-8">
      {/* Hero Section with 3D Elements */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 text-white overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-purple-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                User Management Center
              </h1>
              <p className="text-slate-300 text-lg">Comprehensive user administration and access control</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{userStats.active}</div>
                <div className="text-slate-300 text-sm">Active Users</div>
              </div>
              <button 
                onClick={() => setShowUserForm(true)}
                className="bg-white text-slate-900 px-6 py-3 rounded-xl hover:bg-slate-100 flex items-center space-x-2 font-medium transition-all duration-300 transform hover:scale-105"
              >
                <UserPlus className="h-5 w-5" />
                <span>Add User</span>
              </button>
            </div>
          </div>

          {/* Real-time User Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-300 text-sm">Total Users</p>
                  <p className="text-2xl font-bold text-white">{userStats.total}</p>
                </div>
                <Users className="h-8 w-8 text-cyan-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-300 text-sm">Students</p>
                  <p className="text-2xl font-bold text-green-400">{userStats.students}</p>
                </div>
                <UserCheck className="h-8 w-8 text-green-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-300 text-sm">Supervisors</p>
                  <p className="text-2xl font-bold text-purple-400">{userStats.supervisors}</p>
                </div>
                <Award className="h-8 w-8 text-purple-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-300 text-sm">Admins</p>
                  <p className="text-2xl font-bold text-orange-400">{userStats.admins}</p>
                </div>
                <Shield className="h-8 w-8 text-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Filters and Search */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users, emails, departments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-80 pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Roles</option>
                <option value="student">Students</option>
                <option value="supervisor">Supervisors</option>
                <option value="admin">Administrators</option>
              </select>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>

            <div className="flex items-center space-x-3">
              {selectedUsers.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{selectedUsers.length} selected</span>
                  <button className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
                    Bulk Actions
                  </button>
                </div>
              )}
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <BarChart3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Users className="h-4 w-4" />
                </button>
              </div>

              <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Users Display */}
        <div className="p-6">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredUsers.map((user) => (
                <div 
                  key={user.id} 
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-200 group-hover:ring-blue-300 transition-all duration-300"
                          src={user.avatar}
                          alt={user.name}
                        />
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                          user.status === 'active' ? 'bg-green-500' :
                          user.status === 'inactive' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {user.name}
                        </h3>
                        <p className="text-sm text-gray-600">{user.department}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => toggleUserSelection(user.id)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <button 
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() => setSelectedUser(selectedUser === user.id ? null : user.id)}
                      >
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(user.status)}`}>
                        {getStatusIcon(user.status)}
                        <span className="ml-1">{user.status}</span>
                      </span>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span className="truncate">{user.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>{user.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{user.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Last login: {new Date(user.lastLogin).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* User Stats */}
                    <div className="bg-gray-50 rounded-xl p-3 mt-4">
                      <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Metrics</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {user.role === 'supervisor' && (
                          <>
                            <div className="text-center">
                              <div className="font-semibold text-blue-600">{user.stats.studentsSupervised}</div>
                              <div className="text-gray-600">Students</div>
                            </div>
                            <div className="text-center">
                              <div className="font-semibold text-green-600">{user.stats.avgRating}</div>
                              <div className="text-gray-600">Rating</div>
                            </div>
                          </>
                        )}
                        {user.role === 'student' && (
                          <>
                            <div className="text-center">
                              <div className="font-semibold text-blue-600">{user.stats.thesisProgress}%</div>
                              <div className="text-gray-600">Progress</div>
                            </div>
                            <div className="text-center">
                              <div className="font-semibold text-green-600">{user.stats.avgGrade}</div>
                              <div className="text-gray-600">Avg Grade</div>
                            </div>
                          </>
                        )}
                        {user.role === 'admin' && (
                          <>
                            <div className="text-center">
                              <div className="font-semibold text-blue-600">{user.stats.usersManaged}</div>
                              <div className="text-gray-600">Users</div>
                            </div>
                            <div className="text-center">
                              <div className="font-semibold text-green-600">{user.stats.systemUptime}%</div>
                              <div className="text-gray-600">Uptime</div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-3">
                      <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm transition-colors">
                        <Eye className="h-3 w-3" />
                        <span>View</span>
                      </button>
                      <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm transition-colors">
                        <Edit className="h-3 w-3" />
                        <span>Edit</span>
                      </button>
                      <button className="px-3 py-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedUser === user.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-3">Recent Activity</h4>
                      <div className="space-y-2">
                        {user.recentActivity.slice(0, 3).map((activity, idx) => (
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
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredUsers.map((user) => (
                <div key={user.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => toggleUserSelection(user.id)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <div className="relative">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src={user.avatar}
                          alt={user.name}
                        />
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border border-white ${
                          user.status === 'active' ? 'bg-green-500' :
                          user.status === 'inactive' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{user.name}</h3>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">{user.department}</span>
                      <span className="text-sm text-gray-500">
                        Last login: {new Date(user.lastLogin).toLocaleDateString()}
                      </span>
                      <div className="flex items-center space-x-1">
                        <button className="p-1 text-gray-400 hover:text-blue-600 rounded">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-red-600 rounded">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* User Form Modal */}
      {showUserForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Add New User</h3>
              <button
                onClick={() => setShowUserForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select role</option>
                    <option value="student">Student</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="admin">Administrator</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select department</option>
                    <option value="computer-science">Computer Science</option>
                    <option value="engineering">Engineering</option>
                    <option value="business">Business Studies</option>
                    <option value="sciences">Sciences</option>
                    <option value="medicine">Medicine</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter location"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Permissions</label>
                <div className="grid grid-cols-2 gap-3">
                  {['view-students', 'manage-thesis', 'provide-feedback', 'generate-reports', 'user-management', 'system-config'].map((permission) => (
                    <label key={permission} className="flex items-center space-x-2">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <span className="text-sm text-gray-700 capitalize">{permission.replace('-', ' ')}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowUserForm(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}