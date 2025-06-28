import React, { useState } from 'react';
import { 
  MessageSquare, 
  Search, 
  Filter,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Download,
  TrendingUp,
  Users,
  Calendar,
  BarChart3,
  Activity,
  Globe,
  Zap,
  Shield,
  Bell,
  Settings,
  FileText,
  User,
  Mail,
  Phone
} from 'lucide-react';

export function CommunicationsOversight() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [activeTab, setActiveTab] = useState<'overview' | 'monitoring' | 'analytics'>('overview');

  const communicationStats = {
    totalMessages: 2847,
    activeConversations: 156,
    avgResponseTime: 4.2,
    flaggedCommunications: 8,
    noContactStudents: 12,
    escalatedIssues: 3,
    satisfactionScore: 4.3,
    communicationGaps: 15
  };

  const flaggedCommunications = [
    {
      id: '1',
      type: 'no-response',
      participants: ['Dr. Sarah Wilson', 'Michael Chen'],
      lastActivity: '2024-01-01',
      severity: 'high',
      description: 'No supervisor response for 3 weeks',
      studentId: 'STU001',
      supervisorId: 'SUP003',
      thesisTitle: 'AI in Healthcare Diagnostics',
      flagReason: 'Extended silence from supervisor'
    },
    {
      id: '2',
      type: 'inappropriate',
      participants: ['Prof. James Brown', 'Lisa Rodriguez'],
      lastActivity: '2024-01-10',
      severity: 'critical',
      description: 'Inappropriate language detected in communication',
      studentId: 'STU002',
      supervisorId: 'SUP007',
      thesisTitle: 'Blockchain Security Protocols',
      flagReason: 'Automated content filter triggered'
    },
    {
      id: '3',
      type: 'excessive-delay',
      participants: ['Dr. Michael Thompson', 'Anna Kim'],
      lastActivity: '2024-01-08',
      severity: 'medium',
      description: 'Feedback delay exceeding university policy',
      studentId: 'STU003',
      supervisorId: 'SUP012',
      thesisTitle: 'Renewable Energy Systems',
      flagReason: 'Feedback overdue by 10 days'
    },
    {
      id: '4',
      type: 'conflict',
      participants: ['Dr. Emily Davis', 'Robert Johnson'],
      lastActivity: '2024-01-12',
      severity: 'high',
      description: 'Potential conflict detected in communication tone',
      studentId: 'STU004',
      supervisorId: 'SUP005',
      thesisTitle: 'Machine Learning Applications',
      flagReason: 'Sentiment analysis flagged negative tone'
    }
  ];

  const communicationTrends = [
    { date: '2024-01-01', messages: 45, responses: 38, avgTime: 5.2 },
    { date: '2024-01-02', messages: 52, responses: 47, avgTime: 4.8 },
    { date: '2024-01-03', messages: 38, responses: 35, avgTime: 6.1 },
    { date: '2024-01-04', messages: 61, responses: 55, avgTime: 3.9 },
    { date: '2024-01-05', messages: 43, responses: 40, avgTime: 4.5 },
    { date: '2024-01-06', messages: 29, responses: 25, avgTime: 7.2 },
    { date: '2024-01-07', messages: 48, responses: 44, avgTime: 4.1 }
  ];

  const departmentCommunication = [
    { department: 'Computer Science', messages: 892, responseRate: 94, avgTime: 3.8, issues: 2 },
    { department: 'Engineering', messages: 654, responseRate: 87, avgTime: 5.1, issues: 4 },
    { department: 'Business', messages: 543, responseRate: 91, avgTime: 4.2, issues: 1 },
    { department: 'Sciences', messages: 478, responseRate: 83, avgTime: 6.3, issues: 6 },
    { department: 'Humanities', messages: 280, responseRate: 89, avgTime: 4.9, issues: 3 }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-blue-600 bg-blue-50 border-blue-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'no-response': return <Clock className="h-4 w-4" />;
      case 'inappropriate': return <AlertTriangle className="h-4 w-4" />;
      case 'excessive-delay': return <Calendar className="h-4 w-4" />;
      case 'conflict': return <Shield className="h-4 w-4" />;
      default: return <MessageSquare className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 rounded-3xl p-8 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Communications Oversight
              </h1>
              <p className="text-blue-100 text-lg">Monitor and analyze all system communications</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{communicationStats.satisfactionScore}</div>
                <div className="text-blue-200 text-sm">Satisfaction Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">{communicationStats.flaggedCommunications}</div>
                <div className="text-blue-200 text-sm">Flagged Items</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Total Messages</p>
                  <p className="text-2xl font-bold text-white">{communicationStats.totalMessages.toLocaleString()}</p>
                </div>
                <MessageSquare className="h-8 w-8 text-blue-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Active Conversations</p>
                  <p className="text-2xl font-bold text-white">{communicationStats.activeConversations}</p>
                </div>
                <Users className="h-8 w-8 text-green-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Avg Response Time</p>
                  <p className="text-2xl font-bold text-white">{communicationStats.avgResponseTime}h</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">No Contact Students</p>
                  <p className="text-2xl font-bold text-red-400">{communicationStats.noContactStudents}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>Overview</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('monitoring')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'monitoring'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Real-time Monitoring</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'analytics'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span>Analytics</span>
              </div>
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Flagged Communications */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-red-900 flex items-center">
                    <AlertTriangle className="h-6 w-6 mr-2" />
                    Flagged Communications
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      {flaggedCommunications.length} Items
                    </span>
                    <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors">
                      <Settings className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {flaggedCommunications.map((comm) => (
                    <div 
                      key={comm.id} 
                      className={`p-6 rounded-xl border-l-4 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${getSeverityColor(comm.severity)}`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            {getTypeIcon(comm.type)}
                            <h4 className="font-semibold text-gray-900">{comm.description}</h4>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full uppercase tracking-wider ${
                              comm.severity === 'critical' ? 'bg-red-100 text-red-800' :
                              comm.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {comm.severity}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-gray-600 mb-1">Participants</p>
                              <p className="font-medium text-gray-900">{comm.participants.join(' ↔ ')}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-1">Thesis Title</p>
                              <p className="font-medium text-gray-900">{comm.thesisTitle}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>Last Activity: {new Date(comm.lastActivity).toLocaleDateString()}</span>
                            <span>Reason: {comm.flagReason}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                            <CheckCircle className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                            <Download className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Communication Health */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white rounded-t-2xl">
                  <h3 className="text-xl font-bold flex items-center">
                    <BarChart3 className="h-6 w-6 mr-2" />
                    Department Communication Health
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {departmentCommunication.map((dept, index) => (
                      <div 
                        key={dept.department} 
                        className="group bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-105"
                        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-semibold text-gray-900">{dept.department}</h4>
                              <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-600">{dept.messages} messages</span>
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                  dept.issues === 0 ? 'bg-green-100 text-green-800' :
                                  dept.issues <= 2 ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                                }`}>
                                  {dept.issues} issues
                                </span>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-6">
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span className="text-gray-600">Response Rate</span>
                                  <span className="font-medium">{dept.responseRate}%</span>
                                </div>
                                <div className="bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full h-2 transition-all duration-1000"
                                    style={{ width: `${dept.responseRate}%` }}
                                  ></div>
                                </div>
                              </div>
                              
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span className="text-gray-600">Avg Response Time</span>
                                  <span className="font-medium">{dept.avgTime}h</span>
                                </div>
                                <div className="bg-gray-200 rounded-full h-2">
                                  <div 
                                    className={`rounded-full h-2 transition-all duration-1000 ${
                                      dept.avgTime <= 4 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                                      dept.avgTime <= 6 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                                      'bg-gradient-to-r from-red-500 to-red-600'
                                    }`}
                                    style={{ width: `${Math.max(20, 100 - (dept.avgTime * 10))}%` }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Monitoring Tab */}
          {activeTab === 'monitoring' && (
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center">
                  <Activity className="h-6 w-6 mr-2" />
                  Real-time Communication Monitoring
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">Live Activity</h4>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">New message from Dr. Smith</span>
                        <span className="text-xs text-gray-500">2m ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">Meeting scheduled</span>
                        <span className="text-xs text-gray-500">5m ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">Feedback overdue alert</span>
                        <span className="text-xs text-gray-500">8m ago</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Response Time Alerts</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                        <div className="text-sm font-medium text-red-800">Critical Delay</div>
                        <div className="text-xs text-red-600">Dr. Johnson - 5 days overdue</div>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div className="text-sm font-medium text-yellow-800">Warning</div>
                        <div className="text-xs text-yellow-600">Prof. Davis - 2 days overdue</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">System Health</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Message Queue</span>
                        <span className="text-sm font-medium text-green-600">Healthy</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Notification Service</span>
                        <span className="text-sm font-medium text-green-600">Online</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Email Gateway</span>
                        <span className="text-sm font-medium text-green-600">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold flex items-center">
                      <TrendingUp className="h-6 w-6 mr-2" />
                      Communication Analytics
                    </h3>
                    <select 
                      value={selectedTimeRange}
                      onChange={(e) => setSelectedTimeRange(e.target.value)}
                      className="bg-white/20 text-white rounded-lg px-3 py-1 text-sm border-0"
                    >
                      <option value="7d">Last 7 days</option>
                      <option value="30d">Last 30 days</option>
                      <option value="90d">Last 90 days</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}