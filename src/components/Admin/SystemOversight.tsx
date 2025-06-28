import React, { useState } from 'react';
import { 
  Shield, 
  Users, 
  AlertTriangle, 
  TrendingUp,
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
  Wifi,
  Lock,
  CheckCircle,
  XCircle,
  Clock,
  BarChart3,
  FileText,
  MessageSquare,
  Calendar,
  Target,
  Award,
  Layers,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';

export function SystemOversight() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');
  const [activeMetric, setActiveMetric] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const systemHealth = {
    overall: 98.5,
    database: 99.2,
    api: 97.8,
    frontend: 99.1,
    notifications: 96.5,
    storage: 98.9,
    security: 99.7
  };

  const performanceMetrics = {
    activeUsers: 156,
    totalSessions: 1247,
    avgSessionDuration: 45.2,
    pageLoadTime: 1.8,
    apiResponseTime: 245,
    errorRate: 0.12,
    throughput: 2847,
    concurrentUsers: 89
  };

  const securityMetrics = {
    loginAttempts: 1456,
    failedLogins: 23,
    blockedIPs: 5,
    suspiciousActivity: 2,
    dataBreaches: 0,
    vulnerabilities: 1,
    lastSecurityScan: '2024-01-13',
    encryptionStatus: 'Active'
  };

  const userActivity = [
    { time: '00:00', users: 12, load: 15 },
    { time: '04:00', users: 8, load: 10 },
    { time: '08:00', users: 45, load: 35 },
    { time: '12:00', users: 89, load: 68 },
    { time: '16:00', users: 156, load: 85 },
    { time: '20:00', users: 67, load: 45 },
    { time: '24:00', users: 23, load: 20 }
  ];

  const systemAlerts = [
    {
      id: '1',
      type: 'performance',
      severity: 'warning',
      title: 'High Memory Usage',
      description: 'Database server memory usage at 87%',
      timestamp: '2024-01-13 14:30',
      status: 'active',
      component: 'Database'
    },
    {
      id: '2',
      type: 'security',
      severity: 'high',
      title: 'Multiple Failed Login Attempts',
      description: '15 failed login attempts from IP 192.168.1.100',
      timestamp: '2024-01-13 13:45',
      status: 'investigating',
      component: 'Authentication'
    },
    {
      id: '3',
      type: 'availability',
      severity: 'critical',
      title: 'API Endpoint Timeout',
      description: '/api/documents endpoint experiencing timeouts',
      timestamp: '2024-01-13 12:15',
      status: 'resolved',
      component: 'API Gateway'
    }
  ];

  const deviceBreakdown = [
    { device: 'Desktop', users: 89, percentage: 57 },
    { device: 'Mobile', users: 45, percentage: 29 },
    { device: 'Tablet', users: 22, percentage: 14 }
  ];

  const getHealthColor = (value: number) => {
    if (value >= 98) return 'text-green-600';
    if (value >= 95) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-blue-600 bg-blue-50 border-blue-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'text-green-600 bg-green-50';
      case 'investigating': return 'text-yellow-600 bg-yellow-50';
      case 'active': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case 'Desktop': return <Monitor className="h-5 w-5" />;
      case 'Mobile': return <Smartphone className="h-5 w-5" />;
      case 'Tablet': return <Tablet className="h-5 w-5" />;
      default: return <Monitor className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-400 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                System Oversight Center
              </h1>
              <p className="text-blue-100 text-lg">Real-time monitoring and system administration</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className={`text-3xl font-bold ${getHealthColor(systemHealth.overall)}`}>
                  {systemHealth.overall}%
                </div>
                <div className="text-blue-200 text-sm">System Health</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{performanceMetrics.activeUsers}</div>
                <div className="text-blue-200 text-sm">Active Users</div>
              </div>
            </div>
          </div>

          {/* Real-time Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">API Response</p>
                  <p className="text-2xl font-bold text-white">{performanceMetrics.apiResponseTime}ms</p>
                </div>
                <Zap className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="mt-2 bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full h-2 w-3/4"></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Error Rate</p>
                  <p className="text-2xl font-bold text-green-400">{performanceMetrics.errorRate}%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
              <div className="mt-2 bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full h-2 w-1/12"></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Throughput</p>
                  <p className="text-2xl font-bold text-cyan-400">{performanceMetrics.throughput}</p>
                </div>
                <Activity className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="mt-2 bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full h-2 w-5/6"></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Concurrent Users</p>
                  <p className="text-2xl font-bold text-purple-400">{performanceMetrics.concurrentUsers}</p>
                </div>
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <div className="mt-2 bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-2 w-3/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Health Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white rounded-t-2xl">
            <h3 className="text-xl font-bold flex items-center">
              <Activity className="h-6 w-6 mr-2" />
              System Health Monitor
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {Object.entries(systemHealth).map(([component, health]) => (
                <div key={component} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 capitalize">
                      {component.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className={`text-lg font-bold ${getHealthColor(health)}`}>
                      {health}%
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-3 rounded-full transition-all duration-1000 ease-out ${
                        health >= 98 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                        health >= 95 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                        'bg-gradient-to-r from-red-500 to-red-600'
                      }`}
                      style={{ 
                        width: `${health}%`,
                        boxShadow: health >= 98 ? '0 2px 10px rgba(34, 197, 94, 0.3)' : 
                                  health >= 95 ? '0 2px 10px rgba(251, 191, 36, 0.3)' :
                                  '0 2px 10px rgba(239, 68, 68, 0.3)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white rounded-t-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                System Alerts
              </h3>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                {systemAlerts.filter(a => a.status === 'active').length} Active
              </span>
            </div>
          </div>
          <div className="p-6 max-h-96 overflow-y-auto">
            <div className="space-y-4">
              {systemAlerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className={`p-4 rounded-xl border-l-4 transition-all duration-300 hover:shadow-lg ${getSeverityColor(alert.severity)}`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-900">{alert.title}</h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(alert.status)}`}>
                          {alert.status}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">{alert.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{alert.timestamp}</span>
                        <span>{alert.component}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                        <Eye className="h-4 w-4" />
                      </button>
                      {alert.status === 'active' && (
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                          <CheckCircle className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Analytics */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center">
              <BarChart3 className="h-6 w-6 mr-2" />
              Performance Analytics
            </h3>
            <div className="flex items-center space-x-4">
              <select 
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="bg-white/20 text-white rounded-lg px-3 py-1 text-sm border-0"
              >
                <option value="1h">Last Hour</option>
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
              </select>
              <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* User Activity Chart */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">User Activity (24h)</h4>
              <div className="h-64 flex items-end justify-between space-x-2 bg-gradient-to-t from-purple-50 to-transparent rounded-xl p-4">
                {userActivity.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center group">
                    <div 
                      className="w-full bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-lg transition-all duration-500 hover:from-purple-600 hover:to-purple-500 cursor-pointer transform hover:scale-105"
                      style={{ 
                        height: `${(data.users / 160) * 200}px`,
                        boxShadow: '0 4px 20px rgba(147, 51, 234, 0.3)'
                      }}
                      title={`${data.time}: ${data.users} users, ${data.load}% load`}
                    ></div>
                    <div className="text-xs text-gray-600 mt-2">{data.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Breakdown */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Device Breakdown</h4>
              <div className="space-y-4">
                {deviceBreakdown.map((device, index) => (
                  <div key={device.device} className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {getDeviceIcon(device.device)}
                        <span className="font-medium text-gray-900">{device.device}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">{device.users}</div>
                        <div className="text-sm text-gray-600">{device.percentage}%</div>
                      </div>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className={`rounded-full h-2 transition-all duration-1000 ${
                          index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                          index === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                          'bg-gradient-to-r from-purple-500 to-pink-500'
                        }`}
                        style={{ width: `${device.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Dashboard */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 text-white rounded-t-2xl">
          <h3 className="text-xl font-bold flex items-center">
            <Shield className="h-6 w-6 mr-2" />
            Security Overview
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <div className="flex items-center justify-between mb-4">
                <Lock className="h-8 w-8 text-green-600" />
                <span className="text-2xl font-bold text-green-600">{securityMetrics.dataBreaches}</span>
              </div>
              <div className="text-sm font-medium text-green-800">Data Breaches</div>
              <div className="text-xs text-green-600 mt-1">Last 30 days</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <Eye className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-blue-600">{securityMetrics.failedLogins}</span>
              </div>
              <div className="text-sm font-medium text-blue-800">Failed Logins</div>
              <div className="text-xs text-blue-600 mt-1">Today</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
              <div className="flex items-center justify-between mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
                <span className="text-2xl font-bold text-orange-600">{securityMetrics.blockedIPs}</span>
              </div>
              <div className="text-sm font-medium text-orange-800">Blocked IPs</div>
              <div className="text-xs text-orange-600 mt-1">Active blocks</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
                <span className="text-sm font-bold text-purple-600">{securityMetrics.encryptionStatus}</span>
              </div>
              <div className="text-sm font-medium text-purple-800">Encryption</div>
              <div className="text-xs text-purple-600 mt-1">All data encrypted</div>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 p-4 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">Last Security Scan</div>
                <div className="text-xs text-gray-600">{new Date(securityMetrics.lastSecurityScan).toLocaleDateString()}</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600 font-medium">All systems secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}