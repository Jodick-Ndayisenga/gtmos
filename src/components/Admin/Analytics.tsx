import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  GraduationCap,
  Clock,
  Target,
  Award,
  AlertTriangle,
  CheckCircle,
  Calendar,
  FileText,
  MessageSquare,
  Download,
  Filter,
  Eye,
  Zap,
  Globe,
  Activity,
  Star,
  ArrowUp,
  ArrowDown,
  Minus,
  PieChart,
  LineChart,
  BarChart,
  TrendingDown
} from 'lucide-react';

export function Analytics() {
  const [timeRange, setTimeRange] = useState('12m');
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'overview' | 'detailed' | 'predictive'>('overview');

  const analyticsData = {
    overview: {
      totalStudents: 1247,
      totalSupervisors: 89,
      activeTheses: 892,
      completedTheses: 355,
      avgCompletionTime: 18.5,
      successRate: 87.3,
      satisfactionScore: 4.2,
      systemUtilization: 78.5
    },
    trends: {
      studentEnrollment: [
        { period: 'Jan', value: 1180, change: 5.2 },
        { period: 'Feb', value: 1195, change: 1.3 },
        { period: 'Mar', value: 1210, change: 1.3 },
        { period: 'Apr', value: 1225, change: 1.2 },
        { period: 'May', value: 1235, change: 0.8 },
        { period: 'Jun', value: 1240, change: 0.4 },
        { period: 'Jul', value: 1245, change: 0.4 },
        { period: 'Aug', value: 1250, change: 0.4 },
        { period: 'Sep', value: 1248, change: -0.2 },
        { period: 'Oct', value: 1247, change: -0.1 },
        { period: 'Nov', value: 1245, change: -0.2 },
        { period: 'Dec', value: 1247, change: 0.2 }
      ],
      completionRates: [
        { period: 'Q1', rate: 85.2, target: 80 },
        { period: 'Q2', rate: 87.1, target: 80 },
        { period: 'Q3', rate: 86.8, target: 80 },
        { period: 'Q4', rate: 87.3, target: 80 }
      ],
      satisfactionTrend: [
        { period: 'Jan', score: 4.1 },
        { period: 'Feb', score: 4.0 },
        { period: 'Mar', score: 4.2 },
        { period: 'Apr', score: 4.3 },
        { period: 'May', score: 4.2 },
        { period: 'Jun', score: 4.4 },
        { period: 'Jul', score: 4.3 },
        { period: 'Aug', score: 4.2 },
        { period: 'Sep', score: 4.1 },
        { period: 'Oct', score: 4.2 },
        { period: 'Nov', score: 4.3 },
        { period: 'Dec', score: 4.2 }
      ]
    },
    departmentPerformance: [
      { 
        name: 'Computer Science', 
        students: 245, 
        completion: 89.2, 
        avgTime: 17.2, 
        satisfaction: 4.4,
        trend: 'up',
        change: 3.2
      },
      { 
        name: 'Engineering', 
        students: 198, 
        completion: 85.7, 
        avgTime: 19.1, 
        satisfaction: 4.1,
        trend: 'up',
        change: 1.8
      },
      { 
        name: 'Business', 
        students: 167, 
        completion: 91.3, 
        avgTime: 16.8, 
        satisfaction: 4.3,
        trend: 'up',
        change: 2.5
      },
      { 
        name: 'Sciences', 
        students: 156, 
        completion: 82.4, 
        avgTime: 20.3, 
        satisfaction: 3.9,
        trend: 'down',
        change: -1.2
      },
      { 
        name: 'Humanities', 
        students: 134, 
        completion: 88.1, 
        avgTime: 18.7, 
        satisfaction: 4.2,
        trend: 'stable',
        change: 0.3
      },
      { 
        name: 'Social Sciences', 
        students: 128, 
        completion: 86.9, 
        avgTime: 19.5, 
        satisfaction: 4.0,
        trend: 'up',
        change: 1.1
      },
      { 
        name: 'Arts', 
        students: 89, 
        completion: 84.2, 
        avgTime: 21.1, 
        satisfaction: 4.1,
        trend: 'stable',
        change: -0.1
      },
      { 
        name: 'Medicine', 
        students: 78, 
        completion: 93.6, 
        avgTime: 15.9, 
        satisfaction: 4.6,
        trend: 'up',
        change: 4.1
      },
      { 
        name: 'Law', 
        students: 52, 
        completion: 90.4, 
        avgTime: 17.8, 
        satisfaction: 4.3,
        trend: 'up',
        change: 2.8
      }
    ],
    supervisorMetrics: {
      avgStudentsPerSupervisor: 5.8,
      avgFeedbackTime: 4.2,
      supervisorSatisfaction: 4.1,
      workloadDistribution: [
        { range: '1-3 students', count: 23, percentage: 25.8 },
        { range: '4-6 students', count: 41, percentage: 46.1 },
        { range: '7-9 students', count: 19, percentage: 21.3 },
        { range: '10+ students', count: 6, percentage: 6.8 }
      ]
    },
    systemMetrics: {
      communicationVolume: 15420,
      documentSubmissions: 3247,
      meetingsScheduled: 892,
      grievancesSubmitted: 12,
      alertsGenerated: 156,
      systemUptime: 99.7,
      avgResponseTime: 245,
      userSatisfaction: 4.3
    },
    predictiveInsights: [
      {
        metric: 'Completion Rate',
        prediction: 88.5,
        confidence: 92,
        trend: 'increasing',
        factors: ['Improved supervision', 'Better communication tools', 'Enhanced support']
      },
      {
        metric: 'Average Completion Time',
        prediction: 17.8,
        confidence: 87,
        trend: 'decreasing',
        factors: ['Streamlined processes', 'Better milestone tracking', 'Proactive interventions']
      },
      {
        metric: 'Student Satisfaction',
        prediction: 4.4,
        confidence: 89,
        trend: 'increasing',
        factors: ['Enhanced communication', 'Faster feedback', 'Better support systems']
      }
    ]
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <ArrowUp className="h-4 w-4 text-green-600" />;
      case 'down': return <ArrowDown className="h-4 w-4 text-red-600" />;
      default: return <Minus className="h-4 w-4 text-gray-600" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section with 3D Elements */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-8 text-white overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-purple-400 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-pink-400 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-400 rounded-full blur-lg animate-pulse delay-1500"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Advanced Analytics Center
              </h1>
              <p className="text-indigo-100 text-lg">Comprehensive insights and predictive analytics for thesis management</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{analyticsData.overview.successRate}%</div>
                <div className="text-indigo-200 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{analyticsData.overview.satisfactionScore}</div>
                <div className="text-indigo-200 text-sm">Satisfaction</div>
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
                  : 'text-indigo-200 hover:text-white hover:bg-white/10'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setViewMode('detailed')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                viewMode === 'detailed'
                  ? 'bg-white/20 text-white backdrop-blur-sm border border-white/30'
                  : 'text-indigo-200 hover:text-white hover:bg-white/10'
              }`}
            >
              Detailed Analysis
            </button>
            <button
              onClick={() => setViewMode('predictive')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                viewMode === 'predictive'
                  ? 'bg-white/20 text-white backdrop-blur-sm border border-white/30'
                  : 'text-indigo-200 hover:text-white hover:bg-white/10'
              }`}
            >
              Predictive Insights
            </button>
          </div>
        </div>
      </div>

      {/* Overview Tab */}
      {viewMode === 'overview' && (
        <>
          {/* Key Performance Indicators with 3D Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Total Students', 
                value: analyticsData.overview.totalStudents.toLocaleString(), 
                icon: Users, 
                color: 'from-blue-500 to-cyan-500',
                change: '+5.2%',
                trend: 'up'
              },
              { 
                title: 'Active Theses', 
                value: analyticsData.overview.activeTheses.toLocaleString(), 
                icon: FileText, 
                color: 'from-green-500 to-emerald-500',
                change: '+3.1%',
                trend: 'up'
              },
              { 
                title: 'Avg Completion', 
                value: `${analyticsData.overview.avgCompletionTime}mo`, 
                icon: Clock, 
                color: 'from-orange-500 to-red-500',
                change: '-1.2mo',
                trend: 'up'
              },
              { 
                title: 'Success Rate', 
                value: `${analyticsData.overview.successRate}%`, 
                icon: Target, 
                color: 'from-purple-500 to-pink-500',
                change: '+2.3%',
                trend: 'up'
              }
            ].map((kpi, index) => (
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
                    <p className="text-sm text-gray-600 mb-1">{kpi.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{kpi.value}</p>
                    <div className={`flex items-center space-x-1 mt-2 text-sm ${getTrendColor(kpi.trend)}`}>
                      {getTrendIcon(kpi.trend)}
                      <span>{kpi.change}</span>
                    </div>
                  </div>
                  <div className={`p-4 bg-gradient-to-br ${kpi.color} rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110`}>
                    <kpi.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Department Performance with 3D Visualization */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold flex items-center">
                  <BarChart3 className="h-6 w-6 mr-2" />
                  Department Performance Matrix
                </h3>
                <select 
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="bg-white/20 text-white rounded-lg px-3 py-1 text-sm border-0 focus:ring-2 focus:ring-white/50"
                >
                  <option value="3m">Last 3 months</option>
                  <option value="6m">Last 6 months</option>
                  <option value="12m">Last 12 months</option>
                  <option value="24m">Last 24 months</option>
                </select>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 3D Bar Chart Visualization */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Completion Rates by Department</h4>
                  <div className="h-80 flex items-end justify-between space-x-2 bg-gradient-to-t from-indigo-50 to-transparent rounded-xl p-4">
                    {analyticsData.departmentPerformance.slice(0, 6).map((dept, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center group">
                        <div 
                          className="w-full bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-lg transition-all duration-1000 hover:from-indigo-600 hover:to-indigo-500 cursor-pointer transform hover:scale-105 group-hover:shadow-2xl"
                          style={{ 
                            height: `${(dept.completion / 100) * 250}px`,
                            boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
                            transform: `perspective(1000px) rotateX(${index * 3}deg) rotateY(${index * 2}deg)`
                          }}
                          title={`${dept.name}: ${dept.completion}%`}
                        >
                          <div className="h-full flex items-end justify-center pb-2">
                            <span className="text-white text-xs font-bold transform rotate-90 origin-center">
                              {dept.completion}%
                            </span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-600 mt-2 text-center transform -rotate-45 origin-center w-16">
                          {dept.name.split(' ')[0]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Department Details */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Department Insights</h4>
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {analyticsData.departmentPerformance.map((dept, index) => (
                      <div 
                        key={index} 
                        className="group bg-gradient-to-r from-gray-50 to-indigo-50 p-4 rounded-xl hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-102 border border-gray-200 hover:border-indigo-300"
                        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-medium text-gray-900">{dept.name}</h5>
                              <div className="flex items-center space-x-2">
                                {getTrendIcon(dept.trend)}
                                <span className={`text-sm font-medium ${getTrendColor(dept.trend)}`}>
                                  {dept.change > 0 ? '+' : ''}{dept.change}%
                                </span>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4 text-sm">
                              <div>
                                <div className="text-gray-600">Students</div>
                                <div className="font-semibold text-gray-900">{dept.students}</div>
                              </div>
                              <div>
                                <div className="text-gray-600">Completion</div>
                                <div className="font-semibold text-green-600">{dept.completion}%</div>
                              </div>
                              <div>
                                <div className="text-gray-600">Satisfaction</div>
                                <div className="font-semibold text-purple-600">{dept.satisfaction}</div>
                              </div>
                            </div>
                            
                            <div className="mt-3">
                              <div className="flex justify-between text-xs text-gray-600 mb-1">
                                <span>Performance Score</span>
                                <span>{Math.round((dept.completion + dept.satisfaction * 20) / 2)}%</span>
                              </div>
                              <div className="bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full h-2 transition-all duration-1000"
                                  style={{ width: `${Math.round((dept.completion + dept.satisfaction * 20) / 2)}%` }}
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
          </div>

          {/* System Metrics Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white rounded-t-2xl">
                <h3 className="text-xl font-bold flex items-center">
                  <Activity className="h-6 w-6 mr-2" />
                  System Activity Metrics
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Communications', value: analyticsData.systemMetrics.communicationVolume.toLocaleString(), icon: MessageSquare, color: 'text-blue-600' },
                    { label: 'Documents', value: analyticsData.systemMetrics.documentSubmissions.toLocaleString(), icon: FileText, color: 'text-green-600' },
                    { label: 'Meetings', value: analyticsData.systemMetrics.meetingsScheduled.toLocaleString(), icon: Calendar, color: 'text-purple-600' },
                    { label: 'Grievances', value: analyticsData.systemMetrics.grievancesSubmitted.toString(), icon: AlertTriangle, color: 'text-red-600' }
                  ].map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                      <metric.icon className={`h-8 w-8 mx-auto mb-2 ${metric.color}`} />
                      <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white rounded-t-2xl">
                <h3 className="text-xl font-bold flex items-center">
                  <Star className="h-6 w-6 mr-2" />
                  Quality Metrics
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {[
                    { label: 'System Uptime', value: analyticsData.systemMetrics.systemUptime, unit: '%', target: 99.5 },
                    { label: 'Avg Response Time', value: analyticsData.systemMetrics.avgResponseTime, unit: 'ms', target: 300 },
                    { label: 'User Satisfaction', value: analyticsData.systemMetrics.userSatisfaction, unit: '/5', target: 4.0 }
                  ].map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                        <span className="text-lg font-bold text-gray-900">
                          {metric.value}{metric.unit}
                        </span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-3">
                        <div 
                          className={`rounded-full h-3 transition-all duration-1000 ${
                            metric.value >= metric.target ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                            metric.value >= metric.target * 0.8 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                            'bg-gradient-to-r from-red-500 to-red-600'
                          }`}
                          style={{ 
                            width: `${Math.min(100, (metric.value / (metric.target * 1.2)) * 100)}%`,
                            boxShadow: metric.value >= metric.target ? '0 2px 10px rgba(34, 197, 94, 0.3)' : '0 2px 10px rgba(239, 68, 68, 0.3)'
                          }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Target: {metric.target}{metric.unit}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Detailed Analysis Tab */}
      {viewMode === 'detailed' && (
        <div className="space-y-8">
          {/* Trend Analysis */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white rounded-t-2xl">
              <h3 className="text-xl font-bold flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Detailed Trend Analysis
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Student Enrollment Trend */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Student Enrollment Trend</h4>
                  <div className="h-64 flex items-end justify-between space-x-1 bg-gradient-to-t from-blue-50 to-transparent rounded-xl p-4">
                    {analyticsData.trends.studentEnrollment.map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center group">
                        <div 
                          className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm transition-all duration-500 hover:from-blue-600 hover:to-blue-500 cursor-pointer"
                          style={{ height: `${(data.value / 1300) * 200}px` }}
                          title={`${data.period}: ${data.value} students (${data.change > 0 ? '+' : ''}${data.change}%)`}
                        ></div>
                        <div className="text-xs text-gray-600 mt-2">{data.period}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Completion Rates */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Quarterly Completion Rates</h4>
                  <div className="space-y-4">
                    {analyticsData.trends.completionRates.map((data, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900">{data.period}</span>
                          <span className="text-lg font-bold text-green-600">{data.rate}%</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full h-3"
                            style={{ width: `${data.rate}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Target: {data.target}%</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Satisfaction Trend */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Satisfaction Score Trend</h4>
                  <div className="h-64 flex items-end justify-between space-x-1 bg-gradient-to-t from-purple-50 to-transparent rounded-xl p-4">
                    {analyticsData.trends.satisfactionTrend.map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center group">
                        <div 
                          className="w-full bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm transition-all duration-500 hover:from-purple-600 hover:to-purple-500 cursor-pointer"
                          style={{ height: `${(data.score / 5) * 200}px` }}
                          title={`${data.period}: ${data.score}/5`}
                        ></div>
                        <div className="text-xs text-gray-600 mt-2">{data.period}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supervisor Workload Analysis */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white rounded-t-2xl">
              <h3 className="text-xl font-bold flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Supervisor Workload Distribution
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Workload Distribution</h4>
                  <div className="space-y-4">
                    {analyticsData.supervisorMetrics.workloadDistribution.map((range, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900">{range.range}</span>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gray-900">{range.count}</div>
                            <div className="text-sm text-gray-600">{range.percentage}%</div>
                          </div>
                        </div>
                        <div className="bg-gray-200 rounded-full h-3">
                          <div 
                            className={`rounded-full h-3 transition-all duration-1000 ${
                              index === 0 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                              index === 1 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                              index === 2 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                              'bg-gradient-to-r from-red-500 to-red-600'
                            }`}
                            style={{ width: `${range.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Key Metrics</h4>
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {analyticsData.supervisorMetrics.avgStudentsPerSupervisor}
                      </div>
                      <div className="text-sm text-blue-800">Avg Students per Supervisor</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {analyticsData.supervisorMetrics.avgFeedbackTime}d
                      </div>
                      <div className="text-sm text-green-800">Avg Feedback Time</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        {analyticsData.supervisorMetrics.supervisorSatisfaction}
                      </div>
                      <div className="text-sm text-purple-800">Supervisor Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Predictive Insights Tab */}
      {viewMode === 'predictive' && (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white rounded-t-2xl">
              <h3 className="text-xl font-bold flex items-center">
                <Zap className="h-6 w-6 mr-2" />
                AI-Powered Predictive Insights
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {analyticsData.predictiveInsights.map((insight, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-emerald-50 p-6 rounded-xl border border-emerald-200">
                    <div className="text-center mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{insight.metric}</h4>
                      <div className="text-3xl font-bold text-emerald-600 mb-1">{insight.prediction}</div>
                      <div className="text-sm text-gray-600">Predicted Value</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Confidence Level</span>
                        <span className="text-sm font-medium text-emerald-600">{insight.confidence}%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full h-2"
                          style={{ width: `${insight.confidence}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Key Factors</h5>
                      <div className="space-y-1">
                        {insight.factors.map((factor, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span>{factor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Export and Actions */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Export & Actions</h3>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export Report</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Eye className="h-4 w-4" />
              <span>Schedule Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}