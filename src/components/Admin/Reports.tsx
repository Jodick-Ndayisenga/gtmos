import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Calendar, 
  Filter,
  BarChart3,
  TrendingUp,
  Users,
  GraduationCap,
  Clock,
  Target,
  Award,
  AlertTriangle,
  CheckCircle,
  Eye,
  Settings,
  RefreshCw,
  Send,
  Share,
  Bookmark,
  Star,
  Globe,
  Database,
  Activity,
  Zap,
  PieChart,
  LineChart,
  Mail,
  Printer,
  Save,
  Upload,
  Search,
  Plus,
  Edit,
  Trash2,
  Copy,
  ExternalLink,
  Shield,
  MessageSquare
} from 'lucide-react';

export function Reports() {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState('last-month');
  const [reportFormat, setReportFormat] = useState('pdf');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [viewMode, setViewMode] = useState<'templates' | 'scheduled' | 'generated'>('templates');
  const [showReportBuilder, setShowReportBuilder] = useState(false);

  const reportTemplates = [
    {
      id: '1',
      name: 'Monthly Academic Progress Report',
      description: 'Comprehensive overview of student progress, milestone completions, and academic performance metrics',
      category: 'Academic',
      frequency: 'Monthly',
      lastGenerated: '2024-01-01',
      recipients: ['Academic Office', 'Department Heads'],
      metrics: ['Student Progress', 'Milestone Completion', 'Thesis Submissions', 'Defense Success Rate'],
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      popularity: 95,
      estimatedTime: '5-10 minutes',
      dataPoints: 1247,
      charts: ['Progress Trends', 'Department Comparison', 'Timeline Analysis']
    },
    {
      id: '2',
      name: 'Supervisor Performance Analytics',
      description: 'Detailed analysis of supervisor workload, student satisfaction, and supervision effectiveness',
      category: 'Performance',
      frequency: 'Quarterly',
      lastGenerated: '2023-12-15',
      recipients: ['HR Department', 'Faculty Management'],
      metrics: ['Workload Distribution', 'Student Satisfaction', 'Completion Rates', 'Feedback Quality'],
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      popularity: 87,
      estimatedTime: '8-15 minutes',
      dataPoints: 892,
      charts: ['Performance Matrix', 'Workload Distribution', 'Satisfaction Trends']
    },
    {
      id: '3',
      name: 'System Health & Usage Report',
      description: 'Technical performance metrics, system uptime, user activity, and resource utilization',
      category: 'Technical',
      frequency: 'Weekly',
      lastGenerated: '2024-01-08',
      recipients: ['IT Department', 'System Administrators'],
      metrics: ['System Uptime', 'User Activity', 'Performance Metrics', 'Error Rates'],
      icon: Activity,
      color: 'from-purple-500 to-pink-500',
      popularity: 78,
      estimatedTime: '3-7 minutes',
      dataPoints: 2156,
      charts: ['Uptime Trends', 'Usage Patterns', 'Performance Metrics']
    },
    {
      id: '4',
      name: 'Grievance & Resolution Analysis',
      description: 'Comprehensive analysis of grievances, resolution times, satisfaction rates, and trend analysis',
      category: 'Compliance',
      frequency: 'Monthly',
      lastGenerated: '2024-01-01',
      recipients: ['Ombudsman Office', 'Senior Management'],
      metrics: ['Grievance Volume', 'Resolution Times', 'Satisfaction Rates', 'Type Distribution'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      popularity: 92,
      estimatedTime: '6-12 minutes',
      dataPoints: 156,
      charts: ['Resolution Trends', 'Type Analysis', 'Satisfaction Metrics']
    },
    {
      id: '5',
      name: 'Financial & Resource Allocation',
      description: 'Budget utilization, resource allocation efficiency, and cost-per-student analysis',
      category: 'Financial',
      frequency: 'Quarterly',
      lastGenerated: '2023-12-31',
      recipients: ['Finance Department', 'Budget Committee'],
      metrics: ['Budget Utilization', 'Cost per Student', 'Resource Efficiency', 'ROI Analysis'],
      icon: Target,
      color: 'from-yellow-500 to-orange-500',
      popularity: 83,
      estimatedTime: '10-20 minutes',
      dataPoints: 567,
      charts: ['Budget Trends', 'Cost Analysis', 'Efficiency Metrics']
    },
    {
      id: '6',
      name: 'Communication Effectiveness Report',
      description: 'Analysis of communication patterns, response times, and engagement metrics across the platform',
      category: 'Communication',
      frequency: 'Bi-weekly',
      lastGenerated: '2024-01-07',
      recipients: ['Communication Team', 'Student Services'],
      metrics: ['Message Volume', 'Response Times', 'Engagement Rates', 'Channel Effectiveness'],
      icon: MessageSquare,
      color: 'from-indigo-500 to-purple-500',
      popularity: 76,
      estimatedTime: '4-8 minutes',
      dataPoints: 3421,
      charts: ['Communication Trends', 'Response Analysis', 'Engagement Metrics']
    }
  ];

  const scheduledReports = [
    {
      id: 'SCH-001',
      template: 'Monthly Academic Progress Report',
      schedule: 'Every 1st of the month at 9:00 AM',
      nextRun: '2024-02-01 09:00',
      recipients: ['academic@university.edu', 'heads@university.edu'],
      status: 'active',
      lastRun: '2024-01-01 09:00',
      format: 'PDF + Excel'
    },
    {
      id: 'SCH-002',
      template: 'System Health & Usage Report',
      schedule: 'Every Monday at 8:00 AM',
      nextRun: '2024-01-15 08:00',
      recipients: ['it@university.edu', 'admin@university.edu'],
      status: 'active',
      lastRun: '2024-01-08 08:00',
      format: 'PDF'
    },
    {
      id: 'SCH-003',
      template: 'Supervisor Performance Analytics',
      schedule: 'Every quarter on the 15th at 10:00 AM',
      nextRun: '2024-04-15 10:00',
      recipients: ['hr@university.edu', 'faculty@university.edu'],
      status: 'paused',
      lastRun: '2023-12-15 10:00',
      format: 'PDF + PowerPoint'
    }
  ];

  const generatedReports = [
    {
      id: 'GEN-001',
      name: 'Monthly Academic Progress Report - January 2024',
      template: 'Monthly Academic Progress Report',
      generatedDate: '2024-01-01 09:15',
      generatedBy: 'System Scheduler',
      size: '2.4 MB',
      format: 'PDF',
      downloads: 23,
      status: 'completed',
      recipients: 8
    },
    {
      id: 'GEN-002',
      name: 'System Health Report - Week 2',
      template: 'System Health & Usage Report',
      generatedDate: '2024-01-08 08:05',
      generatedBy: 'System Scheduler',
      size: '1.8 MB',
      format: 'PDF',
      downloads: 12,
      status: 'completed',
      recipients: 4
    },
    {
      id: 'GEN-003',
      name: 'Custom Department Analysis',
      template: 'Custom Report',
      generatedDate: '2024-01-10 14:30',
      generatedBy: 'Dr. Patricia Williams',
      size: '3.1 MB',
      format: 'Excel',
      downloads: 7,
      status: 'completed',
      recipients: 3
    }
  ];

  const reportStats = {
    totalGenerated: 156,
    scheduledActive: 12,
    avgGenerationTime: 8.5,
    totalDownloads: 1247,
    popularTemplate: 'Monthly Academic Progress Report',
    dataProcessed: '2.4 TB',
    automationRate: 87
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic': return 'bg-blue-100 text-blue-800';
      case 'Performance': return 'bg-green-100 text-green-800';
      case 'Technical': return 'bg-purple-100 text-purple-800';
      case 'Compliance': return 'bg-red-100 text-red-800';
      case 'Financial': return 'bg-yellow-100 text-yellow-800';
      case 'Communication': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-50';
      case 'paused': return 'text-yellow-600 bg-yellow-50';
      case 'completed': return 'text-blue-600 bg-blue-50';
      case 'error': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section with 3D Elements */}
      <div className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 rounded-3xl p-8 text-white overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-teal-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-emerald-300 rounded-full blur-lg animate-pulse delay-1500"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent">
                Advanced Reporting Center
              </h1>
              <p className="text-emerald-100 text-lg">Intelligent analytics and automated report generation</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">{reportStats.totalGenerated}</div>
                <div className="text-emerald-200 text-sm">Reports Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{reportStats.automationRate}%</div>
                <div className="text-emerald-200 text-sm">Automated</div>
              </div>
            </div>
          </div>

          {/* Real-time Report Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-200 text-sm">Active Schedules</p>
                  <p className="text-2xl font-bold text-white">{reportStats.scheduledActive}</p>
                </div>
                <Calendar className="h-8 w-8 text-emerald-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-200 text-sm">Avg Gen Time</p>
                  <p className="text-2xl font-bold text-cyan-400">{reportStats.avgGenerationTime}m</p>
                </div>
                <Clock className="h-8 w-8 text-cyan-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-200 text-sm">Total Downloads</p>
                  <p className="text-2xl font-bold text-teal-400">{reportStats.totalDownloads}</p>
                </div>
                <Download className="h-8 w-8 text-teal-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-200 text-sm">Data Processed</p>
                  <p className="text-2xl font-bold text-yellow-400">{reportStats.dataProcessed}</p>
                </div>
                <Database className="h-8 w-8 text-yellow-400" />
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
              onClick={() => setViewMode('templates')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                viewMode === 'templates'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Report Templates</span>
              </div>
            </button>
            <button
              onClick={() => setViewMode('scheduled')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                viewMode === 'scheduled'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Scheduled Reports ({reportStats.scheduledActive})</span>
              </div>
            </button>
            <button
              onClick={() => setViewMode('generated')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                viewMode === 'generated'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span>Generated Reports</span>
              </div>
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* Report Templates Tab */}
          {viewMode === 'templates' && (
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setShowReportBuilder(true)}
                    className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Create Custom Report</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
                    <Upload className="h-4 w-4" />
                    <span>Import Template</span>
                  </button>
                </div>
                
                <div className="flex items-center space-x-3">
                  <select
                    value={filterDepartment}
                    onChange={(e) => setFilterDepartment(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    <option value="academic">Academic</option>
                    <option value="performance">Performance</option>
                    <option value="technical">Technical</option>
                    <option value="compliance">Compliance</option>
                    <option value="financial">Financial</option>
                  </select>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                    <RefreshCw className="h-4 w-4" />
                    <span>Refresh</span>
                  </button>
                </div>
              </div>

              {/* Report Templates Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {reportTemplates.map((template) => (
                  <div 
                    key={template.id} 
                    className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-4 bg-gradient-to-br ${template.color} rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110`}>
                          <template.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                            {template.name}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(template.category)}`}>
                              {template.category}
                            </span>
                            <span className="text-sm text-gray-500">{template.frequency}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm text-gray-600">{template.popularity}%</span>
                        </div>
                        <button className="p-2 text-gray-400 hover:text-emerald-600 rounded-lg hover:bg-emerald-50">
                          <Eye className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{template.description}</p>

                    {/* Template Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-xl">
                        <div className="text-sm text-gray-600">Data Points</div>
                        <div className="text-lg font-bold text-gray-900">{template.dataPoints.toLocaleString()}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-xl">
                        <div className="text-sm text-gray-600">Est. Time</div>
                        <div className="text-lg font-bold text-gray-900">{template.estimatedTime}</div>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Key Metrics</h5>
                      <div className="flex flex-wrap gap-1">
                        {template.metrics.slice(0, 3).map((metric, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs bg-emerald-100 text-emerald-800 rounded-full">
                            {metric}
                          </span>
                        ))}
                        {template.metrics.length > 3 && (
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                            +{template.metrics.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Charts */}
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Included Charts</h5>
                      <div className="flex flex-wrap gap-1">
                        {template.charts.map((chart, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                            {chart}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <button className="flex-1 flex items-center justify-center space-x-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-sm transition-colors">
                        <Download className="h-3 w-3" />
                        <span>Generate Now</span>
                      </button>
                      <button className="flex-1 flex items-center justify-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm transition-colors">
                        <Calendar className="h-3 w-3" />
                        <span>Schedule</span>
                      </button>
                      <button className="px-4 py-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                        <Edit className="h-3 w-3" />
                      </button>
                    </div>

                    {/* Last Generated */}
                    <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-500">
                      Last generated: {new Date(template.lastGenerated).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scheduled Reports Tab */}
          {viewMode === 'scheduled' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Scheduled Reports</h3>
                <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                  <Plus className="h-4 w-4" />
                  <span>New Schedule</span>
                </button>
              </div>

              <div className="space-y-4">
                {scheduledReports.map((report) => (
                  <div key={report.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-gray-900">{report.template}</h4>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(report.status)}`}>
                            {report.status}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-gray-600 mb-1">Schedule</div>
                            <div className="font-medium text-gray-900">{report.schedule}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 mb-1">Next Run</div>
                            <div className="font-medium text-gray-900">{new Date(report.nextRun).toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 mb-1">Format</div>
                            <div className="font-medium text-gray-900">{report.format}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 mb-1">Recipients</div>
                            <div className="font-medium text-gray-900">{report.recipients.length} recipients</div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {report.recipients.map((recipient, idx) => (
                            <span key={idx} className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                              {recipient}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                          <Send className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Generated Reports Tab */}
          {viewMode === 'generated' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Generated Reports</h3>
                <div className="flex items-center space-x-3">
                  <select
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="last-week">Last Week</option>
                    <option value="last-month">Last Month</option>
                    <option value="last-quarter">Last Quarter</option>
                    <option value="last-year">Last Year</option>
                  </select>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                    <Search className="h-4 w-4" />
                    <span>Search</span>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {generatedReports.map((report) => (
                  <div key={report.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-emerald-50 rounded-xl">
                          <FileText className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{report.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{report.template}</p>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">Generated:</span>
                              <div className="font-medium">{new Date(report.generatedDate).toLocaleDateString()}</div>
                            </div>
                            <div>
                              <span className="text-gray-500">Size:</span>
                              <div className="font-medium">{report.size}</div>
                            </div>
                            <div>
                              <span className="text-gray-500">Downloads:</span>
                              <div className="font-medium">{report.downloads}</div>
                            </div>
                            <div>
                              <span className="text-gray-500">Recipients:</span>
                              <div className="font-medium">{report.recipients}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg" title="Preview">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg" title="Download">
                          <Download className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg" title="Share">
                          <Share className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg" title="More options">
                          <Settings className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Report Builder Modal */}
      {showReportBuilder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Custom Report Builder</h3>
              <button
                onClick={() => setShowReportBuilder(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Report Configuration */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Report Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter report name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Describe what this report will contain"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                    <option value="">Select category</option>
                    <option value="academic">Academic</option>
                    <option value="performance">Performance</option>
                    <option value="technical">Technical</option>
                    <option value="compliance">Compliance</option>
                    <option value="financial">Financial</option>
                    <option value="communication">Communication</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Data Sources</label>
                  <div className="space-y-2">
                    {['Student Data', 'Supervisor Data', 'Thesis Progress', 'Communication Logs', 'System Metrics', 'Grievance Data'].map((source) => (
                      <label key={source} className="flex items-center space-x-2">
                        <input type="checkbox" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded" />
                        <span className="text-sm text-gray-700">{source}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Chart Configuration */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Chart Types</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: 'Bar Chart', icon: BarChart3 },
                      { name: 'Line Chart', icon: LineChart },
                      { name: 'Pie Chart', icon: PieChart },
                      { name: 'Trend Analysis', icon: TrendingUp }
                    ].map((chart) => (
                      <label key={chart.name} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <input type="checkbox" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded" />
                        <chart.icon className="h-4 w-4 text-gray-600" />
                        <span className="text-sm text-gray-700">{chart.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Output Format</label>
                  <div className="space-y-2">
                    {['PDF', 'Excel', 'PowerPoint', 'CSV'].map((format) => (
                      <label key={format} className="flex items-center space-x-2">
                        <input type="checkbox" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded" />
                        <span className="text-sm text-gray-700">{format}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Schedule (Optional)</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                    <option value="">One-time generation</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-8">
              <button
                onClick={() => setShowReportBuilder(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                Create Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}