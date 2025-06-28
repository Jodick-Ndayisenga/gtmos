import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Shield, 
  Clock, 
  CheckCircle,
  XCircle,
  Eye,
  Settings,
  Filter,
  Search,
  Bell,
  Zap,
  Activity,
  TrendingUp,
  BarChart3,
  Download,
  RefreshCw,
  Calendar,
  User,
  FileText,
  MessageSquare,
  Target,
  Database,
  Server,
  Wifi,
  HardDrive,
  Cpu,
  Globe,
  Lock,
  Unlock,
  ArrowUp,
  ArrowDown,
  Minus,
  Plus,
  Edit,
  Trash2
} from 'lucide-react';

export function SystemAlerts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSeverity, setFilterSeverity] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedAlert, setSelectedAlert] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'active' | 'resolved' | 'analytics'>('active');

  const alerts = [
    {
      id: '1',
      type: 'system-performance',
      severity: 'critical',
      title: 'Database Response Time Critical',
      description: 'Database response time has exceeded 5 seconds for the past 15 minutes. Multiple queries are timing out.',
      timestamp: '2024-01-13 14:30:25',
      status: 'active',
      component: 'Database Server',
      affectedUsers: 156,
      estimatedImpact: 'High',
      autoResolution: false,
      assignedTo: 'System Admin',
      priority: 1,
      tags: ['performance', 'database', 'timeout'],
      metrics: {
        responseTime: '5.2s',
        errorRate: '15.3%',
        affectedQueries: 234
      },
      actions: [
        { action: 'Alert triggered', time: '14:30:25', user: 'System' },
        { action: 'Escalated to admin', time: '14:31:00', user: 'Auto-escalation' },
        { action: 'Investigation started', time: '14:32:15', user: 'John Smith' }
      ]
    },
    {
      id: '2',
      type: 'security',
      severity: 'high',
      title: 'Multiple Failed Login Attempts',
      description: 'Detected 25 failed login attempts from IP 192.168.1.100 in the last 10 minutes. Possible brute force attack.',
      timestamp: '2024-01-13 13:45:12',
      status: 'investigating',
      component: 'Authentication Service',
      affectedUsers: 1,
      estimatedImpact: 'Medium',
      autoResolution: true,
      assignedTo: 'Security Team',
      priority: 2,
      tags: ['security', 'authentication', 'brute-force'],
      metrics: {
        failedAttempts: 25,
        sourceIP: '192.168.1.100',
        timeWindow: '10 minutes'
      },
      actions: [
        { action: 'Failed login detected', time: '13:45:12', user: 'System' },
        { action: 'IP temporarily blocked', time: '13:46:00', user: 'Auto-security' },
        { action: 'Security team notified', time: '13:46:30', user: 'System' }
      ]
    },
    {
      id: '3',
      type: 'academic',
      severity: 'medium',
      title: 'Multiple Overdue Milestones',
      description: '12 students have milestones overdue by more than 7 days. Supervisors have been notified.',
      timestamp: '2024-01-13 12:15:45',
      status: 'active',
      component: 'Academic Management',
      affectedUsers: 12,
      estimatedImpact: 'Medium',
      autoResolution: false,
      assignedTo: 'Academic Office',
      priority: 3,
      tags: ['academic', 'milestones', 'overdue'],
      metrics: {
        overdueCount: 12,
        avgOverdueDays: 9.5,
        notifiedSupervisors: 8
      },
      actions: [
        { action: 'Overdue milestones detected', time: '12:15:45', user: 'System' },
        { action: 'Supervisors notified', time: '12:16:00', user: 'Auto-notification' },
        { action: 'Academic office alerted', time: '12:20:00', user: 'System' }
      ]
    },
    {
      id: '4',
      type: 'communication',
      severity: 'medium',
      title: 'Communication Gap Alert',
      description: '8 students have not had any communication with supervisors for over 3 weeks.',
      timestamp: '2024-01-13 11:30:20',
      status: 'active',
      component: 'Communication System',
      affectedUsers: 8,
      estimatedImpact: 'Medium',
      autoResolution: false,
      assignedTo: 'Student Services',
      priority: 4,
      tags: ['communication', 'supervision', 'gap'],
      metrics: {
        silentStudents: 8,
        avgSilenceDays: 24,
        supervisorsContacted: 5
      },
      actions: [
        { action: 'Communication gap detected', time: '11:30:20', user: 'System' },
        { action: 'Supervisors contacted', time: '11:35:00', user: 'Auto-notification' }
      ]
    },
    {
      id: '5',
      type: 'system-capacity',
      severity: 'warning',
      title: 'Storage Capacity Warning',
      description: 'Document storage is at 85% capacity. Consider archiving old documents or expanding storage.',
      timestamp: '2024-01-13 10:45:30',
      status: 'acknowledged',
      component: 'File Storage',
      affectedUsers: 0,
      estimatedImpact: 'Low',
      autoResolution: false,
      assignedTo: 'IT Infrastructure',
      priority: 5,
      tags: ['storage', 'capacity', 'infrastructure'],
      metrics: {
        currentUsage: '85%',
        totalCapacity: '2TB',
        growthRate: '2.3% per month'
      },
      actions: [
        { action: 'Storage threshold reached', time: '10:45:30', user: 'System' },
        { action: 'IT team notified', time: '10:46:00', user: 'Auto-notification' },
        { action: 'Alert acknowledged', time: '11:15:00', user: 'Mike Johnson' }
      ]
    },
    {
      id: '6',
      type: 'grievance',
      severity: 'high',
      title: 'Urgent Grievance Escalation',
      description: 'A critical grievance has been escalated and requires immediate administrative attention.',
      timestamp: '2024-01-13 09:20:15',
      status: 'resolved',
      component: 'Grievance System',
      affectedUsers: 1,
      estimatedImpact: 'High',
      autoResolution: false,
      assignedTo: 'Ombudsman Office',
      priority: 1,
      tags: ['grievance', 'escalation', 'urgent'],
      metrics: {
        grievanceId: 'GRV-2024-001',
        escalationLevel: 3,
        responseTime: '2.5 hours'
      },
      actions: [
        { action: 'Grievance escalated', time: '09:20:15', user: 'System' },
        { action: 'Ombudsman notified', time: '09:21:00', user: 'Auto-escalation' },
        { action: 'Investigation completed', time: '11:45:00', user: 'Dr. Patricia Williams' },
        { action: 'Resolution implemented', time: '12:30:00', user: 'Dr. Patricia Williams' }
      ]
    }
  ];

  const alertStats = {
    total: alerts.length,
    active: alerts.filter(a => a.status === 'active').length,
    critical: alerts.filter(a => a.severity === 'critical').length,
    resolved: alerts.filter(a => a.status === 'resolved').length,
    avgResolutionTime: 4.2,
    systemUptime: 99.7,
    totalAffectedUsers: alerts.reduce((sum, alert) => sum + alert.affectedUsers, 0)
  };

  const alertTrends = [
    { period: 'Mon', critical: 2, high: 5, medium: 8, warning: 12 },
    { period: 'Tue', critical: 1, high: 3, medium: 6, warning: 10 },
    { period: 'Wed', critical: 3, high: 7, medium: 9, warning: 15 },
    { period: 'Thu', critical: 1, high: 4, medium: 7, warning: 11 },
    { period: 'Fri', critical: 2, high: 6, medium: 10, warning: 14 },
    { period: 'Sat', critical: 0, high: 2, medium: 4, warning: 6 },
    { period: 'Sun', critical: 1, high: 3, medium: 5, warning: 8 }
  ];

  const systemHealth = {
    database: { status: 'warning', value: 87, trend: 'down' },
    api: { status: 'healthy', value: 98, trend: 'stable' },
    storage: { status: 'warning', value: 85, trend: 'up' },
    network: { status: 'healthy', value: 99, trend: 'stable' },
    security: { status: 'healthy', value: 96, trend: 'up' },
    authentication: { status: 'healthy', value: 99, trend: 'stable' }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200 shadow-red-100';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200 shadow-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200 shadow-yellow-100';
      case 'warning': return 'text-blue-600 bg-blue-50 border-blue-200 shadow-blue-100';
      default: return 'text-gray-600 bg-gray-50 border-gray-200 shadow-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-red-600 bg-red-50';
      case 'investigating': return 'text-yellow-600 bg-yellow-50';
      case 'acknowledged': return 'text-blue-600 bg-blue-50';
      case 'resolved': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'system-performance': return <Cpu className="h-5 w-5" />;
      case 'security': return <Shield className="h-5 w-5" />;
      case 'academic': return <FileText className="h-5 w-5" />;
      case 'communication': return <MessageSquare className="h-5 w-5" />;
      case 'system-capacity': return <HardDrive className="h-5 w-5" />;
      case 'grievance': return <AlertTriangle className="h-5 w-5" />;
      default: return <Bell className="h-5 w-5" />;
    }
  };

  const getHealthIcon = (status: string) => {
    switch (status) {
      case 'healthy': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'warning': return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case 'critical': return <XCircle className="h-5 w-5 text-red-600" />;
      default: return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <ArrowUp className="h-4 w-4 text-red-600" />;
      case 'down': return <ArrowDown className="h-4 w-4 text-green-600" />;
      default: return <Minus className="h-4 w-4 text-gray-600" />;
    }
  };

  const filteredAlerts = alerts.filter(alert => {
    const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.component.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = filterSeverity === 'all' || alert.severity === filterSeverity;
    const matchesType = filterType === 'all' || alert.type === filterType;
    const matchesStatus = filterStatus === 'all' || alert.status === filterStatus;
    return matchesSearch && matchesSeverity && matchesType && matchesStatus;
  });

  return (
    <div className="space-y-8">
      {/* Hero Section with 3D Elements */}
      <div className="relative bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 rounded-3xl p-8 text-white overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-red-400 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-orange-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-yellow-400 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-red-300 rounded-full blur-lg animate-pulse delay-1500"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-orange-200 to-yellow-200 bg-clip-text text-transparent">
                System Alert Command Center
              </h1>
              <p className="text-orange-100 text-lg">Real-time monitoring and intelligent alert management</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">{alertStats.critical}</div>
                <div className="text-orange-200 text-sm">Critical Alerts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{alertStats.systemUptime}%</div>
                <div className="text-orange-200 text-sm">System Uptime</div>
              </div>
            </div>
          </div>

          {/* Real-time System Status */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-200 text-sm">Active Alerts</p>
                  <p className="text-2xl font-bold text-white">{alertStats.active}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-200 text-sm">Affected Users</p>
                  <p className="text-2xl font-bold text-yellow-400">{alertStats.totalAffectedUsers}</p>
                </div>
                <User className="h-8 w-8 text-yellow-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-200 text-sm">Avg Resolution</p>
                  <p className="text-2xl font-bold text-green-400">{alertStats.avgResolutionTime}h</p>
                </div>
                <Clock className="h-8 w-8 text-green-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-200 text-sm">Resolved Today</p>
                  <p className="text-2xl font-bold text-cyan-400">{alertStats.resolved}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-cyan-400" />
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
              onClick={() => setViewMode('active')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                viewMode === 'active'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4" />
                <span>Active Alerts ({alertStats.active})</span>
              </div>
            </button>
            <button
              onClick={() => setViewMode('resolved')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                viewMode === 'resolved'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Resolved Alerts</span>
              </div>
            </button>
            <button
              onClick={() => setViewMode('analytics')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                viewMode === 'analytics'
                  ? 'border-red-500 text-red-600'
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
          {/* Active Alerts Tab */}
          {viewMode === 'active' && (
            <div className="space-y-6">
              {/* System Health Dashboard */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Activity className="h-5 w-5 text-blue-600 mr-2" />
                  Real-time System Health
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(systemHealth).map(([component, health]) => (
                    <div key={component} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          {getHealthIcon(health.status)}
                          <span className="font-medium text-gray-900 capitalize">{component.replace('-', ' ')}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {getTrendIcon(health.trend)}
                          <span className="text-lg font-bold text-gray-900">{health.value}%</span>
                        </div>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className={`rounded-full h-2 transition-all duration-1000 ${
                            health.status === 'healthy' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                            health.status === 'warning' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                            'bg-gradient-to-r from-red-500 to-red-600'
                          }`}
                          style={{ width: `${health.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search alerts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full sm:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  
                  <select
                    value={filterSeverity}
                    onChange={(e) => setFilterSeverity(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="all">All Severities</option>
                    <option value="critical">Critical</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="warning">Warning</option>
                  </select>

                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="all">All Types</option>
                    <option value="system-performance">System Performance</option>
                    <option value="security">Security</option>
                    <option value="academic">Academic</option>
                    <option value="communication">Communication</option>
                    <option value="system-capacity">System Capacity</option>
                    <option value="grievance">Grievance</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                    <RefreshCw className="h-4 w-4" />
                    <span>Refresh</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                    <Download className="h-4 w-4" />
                    <span>Export</span>
                  </button>
                </div>
              </div>

              {/* Alerts List */}
              <div className="space-y-4">
                {filteredAlerts.filter(a => a.status !== 'resolved').map((alert) => (
                  <div 
                    key={alert.id} 
                    className={`p-6 rounded-xl border-l-4 transition-all duration-300 hover:shadow-lg ${getSeverityColor(alert.severity)}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`p-2 rounded-lg ${getSeverityColor(alert.severity).split(' ')[1]} ${getSeverityColor(alert.severity).split(' ')[2]}`}>
                            {getTypeIcon(alert.type)}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{alert.title}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>{alert.component}</span>
                              <span>{new Date(alert.timestamp).toLocaleString()}</span>
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(alert.status)}`}>
                                {alert.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-4">{alert.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="bg-white p-3 rounded-lg border border-gray-200">
                            <div className="text-sm text-gray-600">Affected Users</div>
                            <div className="text-lg font-semibold text-gray-900">{alert.affectedUsers}</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg border border-gray-200">
                            <div className="text-sm text-gray-600">Impact Level</div>
                            <div className="text-lg font-semibold text-gray-900">{alert.estimatedImpact}</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg border border-gray-200">
                            <div className="text-sm text-gray-600">Assigned To</div>
                            <div className="text-lg font-semibold text-gray-900">{alert.assignedTo}</div>
                          </div>
                        </div>

                        {/* Alert Metrics */}
                        {alert.metrics && (
                          <div className="bg-gray-50 p-3 rounded-lg mb-4">
                            <h5 className="font-medium text-gray-900 mb-2">Metrics</h5>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                              {Object.entries(alert.metrics).map(([key, value]) => (
                                <div key={key} className="flex justify-between">
                                  <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                                  <span className="font-medium text-gray-900">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {alert.tags.map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button 
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          onClick={() => setSelectedAlert(selectedAlert === alert.id ? null : alert.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                          <CheckCircle className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {selectedAlert === alert.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h5 className="font-medium text-gray-900 mb-3">Action Timeline</h5>
                        <div className="space-y-2">
                          {alert.actions.map((action, idx) => (
                            <div key={idx} className="flex items-start space-x-3 text-sm">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <span className="text-gray-700">{action.action}</span>
                                  <span className="text-gray-500">{action.time}</span>
                                </div>
                                <span className="text-gray-500">by {action.user}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resolved Alerts Tab */}
          {viewMode === 'resolved' && (
            <div className="space-y-4">
              {filteredAlerts.filter(a => a.status === 'resolved').map((alert) => (
                <div key={alert.id} className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <h4 className="font-medium text-gray-900">{alert.title}</h4>
                        <span className="text-sm text-gray-500">
                          Resolved {new Date(alert.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">{alert.description}</p>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Analytics Tab */}
          {viewMode === 'analytics' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Alert Trends */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Weekly Alert Trends</h3>
                  </div>
                  <div className="p-6">
                    <div className="h-64 flex items-end justify-between space-x-2">
                      {alertTrends.map((data, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div className="w-full space-y-1">
                            <div 
                              className="w-full bg-red-600 rounded-t-sm"
                              style={{ height: `${(data.critical / 5) * 60}px` }}
                              title={`Critical: ${data.critical}`}
                            ></div>
                            <div 
                              className="w-full bg-orange-600"
                              style={{ height: `${(data.high / 10) * 60}px` }}
                              title={`High: ${data.high}`}
                            ></div>
                            <div 
                              className="w-full bg-yellow-600"
                              style={{ height: `${(data.medium / 15) * 60}px` }}
                              title={`Medium: ${data.medium}`}
                            ></div>
                            <div 
                              className="w-full bg-blue-600"
                              style={{ height: `${(data.warning / 20) * 60}px` }}
                              title={`Warning: ${data.warning}`}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-600 mt-2">{data.period}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-center space-x-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-600 rounded"></div>
                        <span>Critical</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-600 rounded"></div>
                        <span>High</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-yellow-600 rounded"></div>
                        <span>Medium</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-600 rounded"></div>
                        <span>Warning</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alert Distribution */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Alert Type Distribution</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {['system-performance', 'security', 'academic', 'communication', 'system-capacity', 'grievance'].map((type, index) => {
                        const count = alerts.filter(a => a.type === type).length;
                        const percentage = (count / alerts.length) * 100;
                        
                        return (
                          <div key={type} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              {getTypeIcon(type)}
                              <span className="text-sm text-gray-700 capitalize">{type.replace('-', ' ')}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div 
                                  className={`rounded-full h-2 ${
                                    index === 0 ? 'bg-red-500' :
                                    index === 1 ? 'bg-orange-500' :
                                    index === 2 ? 'bg-yellow-500' :
                                    index === 3 ? 'bg-green-500' :
                                    index === 4 ? 'bg-blue-500' : 'bg-purple-500'
                                  }`}
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium text-gray-900 w-8">{count}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
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