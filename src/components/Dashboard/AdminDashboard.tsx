import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Users, 
  Shield, 
  AlertTriangle, 
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  BarChart3,
  UserCheck,
  FileText,
  MessageSquare,
  HelpCircle,
  Activity,
  Globe,
  Zap,
  Database,
  Server,
  Eye,
  Settings,
  Download,
  Filter,
  Search,
  Bell,
  Cpu,
  HardDrive,
  Wifi
} from 'lucide-react';

export function AdminDashboard() {
  const { user } = useAuth();
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [activeMetric, setActiveMetric] = useState<string | null>(null);

  const systemMetrics = {
    totalStudents: 245,
    totalSupervisors: 38,
    activeTheses: 189,
    completedTheses: 56,
    avgCompletionTime: 18.5,
    systemUptime: 99.8,
    pendingGrievances: 3,
    overdueDeadlines: 12,
    systemLoad: 68,
    storageUsed: 72,
    networkLatency: 45,
    activeUsers: 156
  };

  const recentAlerts = [
    { 
      id: '1', 
      type: 'critical', 
      title: 'System Performance Alert',
      message: 'Database response time increased by 40% in the last hour', 
      severity: 'critical', 
      time: '5 minutes ago',
      category: 'system'
    },
    { 
      id: '2', 
      type: 'overdue', 
      title: 'Multiple Overdue Milestones',
      message: '5 students have overdue milestones requiring immediate attention', 
      severity: 'high', 
      time: '2 hours ago',
      category: 'academic'
    },
    { 
      id: '3', 
      type: 'communication', 
      title: 'Communication Gap Alert',
      message: 'No communication logged for 8 students in 3+ weeks', 
      severity: 'medium', 
      time: '4 hours ago',
      category: 'supervision'
    },
    { 
      id: '4', 
      type: 'grievance', 
      title: 'New Grievance Submitted',
      message: 'Urgent grievance submitted - requires immediate investigation', 
      severity: 'critical', 
      time: '6 hours ago',
      category: 'grievance'
    },
    { 
      id: '5', 
      type: 'capacity', 
      title: 'Supervisor Capacity Warning',
      message: 'Dr. Smith approaching maximum student capacity (7/8)', 
      severity: 'medium', 
      time: '1 day ago',
      category: 'workload'
    }
  ];

  const departmentStats = [
    { name: 'Computer Science', students: 68, completion: 82, avgTime: 17.2, risk: 'low', trend: '+5%' },
    { name: 'Engineering', students: 45, completion: 76, avgTime: 19.8, risk: 'medium', trend: '-2%' },
    { name: 'Business', students: 52, completion: 88, avgTime: 16.5, risk: 'low', trend: '+8%' },
    { name: 'Sciences', students: 43, completion: 71, avgTime: 21.2, risk: 'high', trend: '-7%' },
    { name: 'Humanities', students: 37, completion: 79, avgTime: 18.9, risk: 'medium', trend: '+3%' }
  ];

  const performanceData = [
    { month: 'Jul', students: 220, completions: 12, grievances: 2, satisfaction: 4.2 },
    { month: 'Aug', students: 235, completions: 15, grievances: 1, satisfaction: 4.3 },
    { month: 'Sep', students: 242, completions: 18, grievances: 3, satisfaction: 4.1 },
    { month: 'Oct', students: 248, completions: 14, grievances: 2, satisfaction: 4.4 },
    { month: 'Nov', students: 245, completions: 16, grievances: 4, satisfaction: 4.2 },
    { month: 'Dec', students: 240, completions: 22, grievances: 1, satisfaction: 4.5 },
    { month: 'Jan', students: 245, completions: 8, grievances: 3, satisfaction: 4.3 }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200 shadow-red-100';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200 shadow-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200 shadow-yellow-100';
      default: return 'text-blue-600 bg-blue-50 border-blue-200 shadow-blue-100';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'bg-red-100 text-red-800 shadow-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 shadow-yellow-200';
      default: return 'bg-green-100 text-green-800 shadow-green-200';
    }
  };

  const getMetricColor = (value: number, type: string) => {
    if (type === 'uptime') return value >= 99 ? 'text-green-600' : value >= 95 ? 'text-yellow-600' : 'text-red-600';
    if (type === 'load') return value <= 70 ? 'text-green-600' : value <= 85 ? 'text-yellow-600' : 'text-red-600';
    return 'text-blue-600';
  };

  return (
    <div className="space-y-8">
      {/* Hero Section with 3D Elements */}
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 text-white overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-xl transform rotate-45"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-purple-500 rounded-full blur-lg transform -rotate-12"></div>
          <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-indigo-500 rounded-full blur-2xl transform rotate-12"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                System Command Center
              </h1>
              <p className="text-slate-300 text-lg">Graduate Thesis Management & Oversight System</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{systemMetrics.systemUptime}%</div>
                <div className="text-slate-300 text-sm">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{systemMetrics.activeUsers}</div>
                <div className="text-slate-300 text-sm">Active Users</div>
              </div>
            </div>
          </div>

          {/* Real-time System Status */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-300 text-sm">System Load</p>
                  <p className={`text-2xl font-bold ${getMetricColor(systemMetrics.systemLoad, 'load')}`}>
                    {systemMetrics.systemLoad}%
                  </p>
                </div>
                <Cpu className="h-8 w-8 text-blue-400" />
              </div>
              <div className="mt-2 bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full h-2 transition-all duration-500"
                  style={{ width: `${systemMetrics.systemLoad}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-300 text-sm">Storage Used</p>
                  <p className={`text-2xl font-bold ${getMetricColor(systemMetrics.storageUsed, 'load')}`}>
                    {systemMetrics.storageUsed}%
                  </p>
                </div>
                <HardDrive className="h-8 w-8 text-purple-400" />
              </div>
              <div className="mt-2 bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-2 transition-all duration-500"
                  style={{ width: `${systemMetrics.storageUsed}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-300 text-sm">Network Latency</p>
                  <p className="text-2xl font-bold text-green-400">{systemMetrics.networkLatency}ms</p>
                </div>
                <Wifi className="h-8 w-8 text-green-400" />
              </div>
              <div className="mt-2 bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full h-2 w-1/4"></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-300 text-sm">Database Status</p>
                  <p className="text-2xl font-bold text-green-400">Optimal</p>
                </div>
                <Database className="h-8 w-8 text-green-400" />
              </div>
              <div className="flex items-center mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-slate-300 text-xs">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Performance Indicators with 3D Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Students</p>
              <p className="text-3xl font-bold text-gray-900">{systemMetrics.totalStudents}</p>
              <p className="text-sm text-green-600 mt-1">↗ +12 this month</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        <div 
          className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Active Supervisors</p>
              <p className="text-3xl font-bold text-gray-900">{systemMetrics.totalSupervisors}</p>
              <p className="text-sm text-blue-600 mt-1">↗ 95% utilization</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg group-hover:shadow-teal-200 transition-all duration-300">
              <UserCheck className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        <div 
          className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Critical Alerts</p>
              <p className="text-3xl font-bold text-red-600">{recentAlerts.filter(a => a.severity === 'critical').length}</p>
              <p className="text-sm text-red-600 mt-1">⚠ Requires attention</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg group-hover:shadow-red-200 transition-all duration-300">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        <div 
          className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Avg Completion</p>
              <p className="text-3xl font-bold text-gray-900">{systemMetrics.avgCompletionTime}mo</p>
              <p className="text-sm text-green-600 mt-1">↘ -2.3mo improvement</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-purple-200 transition-all duration-300">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Advanced Alert Management */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                Critical System Alerts
              </h3>
              <div className="flex items-center space-x-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {recentAlerts.length} Active
                </span>
                <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                  <Settings className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="p-6 max-h-96 overflow-y-auto">
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className={`p-4 rounded-xl border-l-4 transition-all duration-300 hover:shadow-lg ${getSeverityColor(alert.severity)}`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-900">{alert.title}</h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full uppercase tracking-wider ${
                          alert.severity === 'critical' ? 'bg-red-100 text-red-800' :
                          alert.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {alert.severity}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">{alert.message}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{alert.time}</span>
                        <span className="capitalize">{alert.category}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                        <CheckCircle className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Department Performance with 3D Visualization */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold flex items-center">
                <BarChart3 className="h-6 w-6 mr-2" />
                Department Performance
              </h3>
              <select className="bg-white/20 text-white rounded-lg px-3 py-1 text-sm border-0 focus:ring-2 focus:ring-white/50">
                <option value="completion">Completion Rate</option>
                <option value="time">Avg Time</option>
                <option value="satisfaction">Satisfaction</option>
              </select>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {departmentStats.map((dept, index) => (
                <div 
                  key={dept.name} 
                  className="group bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-105"
                  style={{ 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    transform: `perspective(1000px) rotateX(${index * 2}deg)`
                  }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{dept.name}</h4>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(dept.risk)}`}>
                            {dept.risk} risk
                          </span>
                          <span className={`text-sm font-medium ${
                            dept.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {dept.trend}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{dept.students} students</p>
                      
                      {/* 3D Progress Bars */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>Completion Rate</span>
                          <span>{dept.completion}%</span>
                        </div>
                        <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${dept.completion}%`,
                              boxShadow: '0 2px 10px rgba(34, 197, 94, 0.3)'
                            }}
                          ></div>
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

      {/* Advanced Analytics Dashboard */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center">
              <Activity className="h-6 w-6 mr-2" />
              System Performance Analytics
            </h3>
            <div className="flex items-center space-x-4">
              <select 
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="bg-white/20 text-white rounded-lg px-3 py-1 text-sm border-0 focus:ring-2 focus:ring-white/50"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="p-6">
          {/* 3D Chart Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Student Enrollment Trend</h4>
              <div className="h-64 flex items-end justify-between space-x-2 bg-gradient-to-t from-blue-50 to-transparent rounded-xl p-4">
                {performanceData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center group">
                    <div 
                      className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-500 hover:from-blue-600 hover:to-blue-500 cursor-pointer transform hover:scale-105"
                      style={{ 
                        height: `${(data.students / 250) * 200}px`,
                        boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
                        transform: `perspective(1000px) rotateX(${index * 3}deg)`
                      }}
                      title={`${data.month}: ${data.students} students`}
                    ></div>
                    <div className="text-xs text-gray-600 mt-2 font-medium">{data.month}</div>
                    <div className="text-xs text-gray-500">{data.students}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">System Health Metrics</h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-green-800">System Uptime</span>
                    <span className="text-lg font-bold text-green-600">{systemMetrics.systemUptime}%</span>
                  </div>
                  <div className="bg-green-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full h-2"
                      style={{ width: `${systemMetrics.systemUptime}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-800">Active Sessions</span>
                    <span className="text-lg font-bold text-blue-600">{systemMetrics.activeUsers}</span>
                  </div>
                  <div className="bg-blue-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full h-2"
                      style={{ width: '78%' }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-purple-800">Data Processing</span>
                    <span className="text-lg font-bold text-purple-600">92%</span>
                  </div>
                  <div className="bg-purple-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-2 w-11/12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions with 3D Effects */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white">
          <h3 className="text-xl font-bold flex items-center">
            <Zap className="h-6 w-6 mr-2" />
            Quick Actions & System Controls
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="group p-6 text-left bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200 hover:from-red-100 hover:to-red-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <Shield className="h-8 w-8 text-red-600 group-hover:scale-110 transition-transform" />
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="font-semibold text-red-900 mb-1">Review Grievances</div>
              <div className="text-sm text-red-700">Handle {systemMetrics.pendingGrievances} pending cases</div>
            </button>

            <button className="group p-6 text-left bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 hover:from-orange-100 hover:to-orange-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <AlertTriangle className="h-8 w-8 text-orange-600 group-hover:scale-110 transition-transform" />
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div className="font-semibold text-orange-900 mb-1">Address Alerts</div>
              <div className="text-sm text-orange-700">Resolve {recentAlerts.length} system issues</div>
            </button>

            <button className="group p-6 text-left bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:from-green-100 hover:to-green-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <FileText className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform" />
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="font-semibold text-green-900 mb-1">Generate Reports</div>
              <div className="text-sm text-green-700">Performance analytics & insights</div>
            </button>

            <button className="group p-6 text-left bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <Users className="h-8 w-8 text-purple-600 group-hover:scale-110 transition-transform" />
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>
              <div className="font-semibold text-purple-900 mb-1">Manage Users</div>
              <div className="text-sm text-purple-700">User administration & permissions</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}