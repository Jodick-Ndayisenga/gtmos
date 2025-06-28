import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Clock,
  Target,
  AlertTriangle,
  CheckCircle,
  Calendar,
  FileText,
  MessageSquare,
  Award,
  Filter,
  Download
} from 'lucide-react';

export function WorkloadAnalytics() {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter' | 'year'>('month');
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  const workloadData = {
    currentLoad: {
      totalStudents: 6,
      maxCapacity: 8,
      utilizationRate: 75,
      newStudentsThisYear: 2,
      graduatingStudents: 1
    },
    timeAllocation: {
      supervision: 12, // hours per week
      reviews: 8,
      meetings: 6,
      administrative: 4,
      research: 10
    },
    studentDistribution: [
      { phase: 'Proposal', count: 1, avgTime: 2.5 },
      { phase: 'Research', count: 3, avgTime: 4.2 },
      { phase: 'Writing', count: 1, avgTime: 6.1 },
      { phase: 'Defense Prep', count: 1, avgTime: 3.8 }
    ],
    performanceMetrics: {
      avgFeedbackTime: 2.8,
      studentSatisfaction: 4.6,
      completionRate: 85,
      onTimeGraduation: 92,
      publicationsWithStudents: 4
    },
    monthlyTrend: [
      { month: 'Aug', supervision: 10, reviews: 6, meetings: 4, admin: 3 },
      { month: 'Sep', supervision: 12, reviews: 8, meetings: 5, admin: 4 },
      { month: 'Oct', supervision: 14, reviews: 10, meetings: 6, admin: 4 },
      { month: 'Nov', supervision: 11, reviews: 7, meetings: 5, admin: 3 },
      { month: 'Dec', supervision: 8, reviews: 5, meetings: 3, admin: 2 },
      { month: 'Jan', supervision: 12, reviews: 8, meetings: 6, admin: 4 }
    ],
    upcomingDeadlines: [
      { student: 'Sarah Johnson', task: 'Literature Review', dueDate: '2024-01-15', priority: 'high' },
      { student: 'David Kim', task: 'Methodology Chapter', dueDate: '2024-01-18', priority: 'urgent' },
      { student: 'Emily Rodriguez', task: 'Committee Meeting', dueDate: '2024-01-22', priority: 'medium' },
      { student: 'Michael Thompson', task: 'Proposal Defense', dueDate: '2024-02-01', priority: 'high' }
    ],
    workloadComparison: {
      departmentAvg: {
        students: 5.2,
        feedbackTime: 3.5,
        satisfaction: 4.1,
        completionRate: 78
      },
      universityAvg: {
        students: 4.8,
        feedbackTime: 4.1,
        satisfaction: 3.9,
        completionRate: 72
      }
    }
  };

  const getUtilizationColor = (rate: number) => {
    if (rate >= 90) return 'text-red-600 bg-red-50';
    if (rate >= 75) return 'text-yellow-600 bg-yellow-50';
    return 'text-green-600 bg-green-50';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'text-red-600 bg-red-50 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-blue-600 bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Workload Analytics</h1>
            <p className="text-blue-100 mt-1">Comprehensive analysis of supervision workload and performance</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-3xl font-bold">{workloadData.currentLoad.utilizationRate}%</div>
              <div className="text-blue-100 text-sm">Capacity Utilization</div>
            </div>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Current Workload Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Current Students</p>
              <p className="text-2xl font-semibold text-gray-900">
                {workloadData.currentLoad.totalStudents}/{workloadData.currentLoad.maxCapacity}
              </p>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
          <div className="mt-2 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 rounded-full h-2"
              style={{ width: `${workloadData.currentLoad.utilizationRate}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Feedback Time</p>
              <p className="text-2xl font-semibold text-green-600">{workloadData.performanceMetrics.avgFeedbackTime}d</p>
            </div>
            <Clock className="h-8 w-8 text-green-600" />
          </div>
          <p className="text-xs text-gray-500 mt-1">Below target (3d)</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Satisfaction</p>
              <p className="text-2xl font-semibold text-purple-600">{workloadData.performanceMetrics.studentSatisfaction}</p>
            </div>
            <Award className="h-8 w-8 text-purple-600" />
          </div>
          <p className="text-xs text-gray-500 mt-1">Above dept avg (4.1)</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completion Rate</p>
              <p className="text-2xl font-semibold text-teal-600">{workloadData.performanceMetrics.completionRate}%</p>
            </div>
            <Target className="h-8 w-8 text-teal-600" />
          </div>
          <p className="text-xs text-gray-500 mt-1">Above dept avg (78%)</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Publications</p>
              <p className="text-2xl font-semibold text-orange-600">{workloadData.performanceMetrics.publicationsWithStudents}</p>
            </div>
            <FileText className="h-8 w-8 text-orange-600" />
          </div>
          <p className="text-xs text-gray-500 mt-1">This academic year</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Time Allocation Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <BarChart3 className="h-5 w-5 text-blue-600 mr-2" />
              Weekly Time Allocation
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {Object.entries(workloadData.timeAllocation).map(([activity, hours]) => (
                <div key={activity} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      activity === 'supervision' ? 'bg-blue-500' :
                      activity === 'reviews' ? 'bg-green-500' :
                      activity === 'meetings' ? 'bg-purple-500' :
                      activity === 'administrative' ? 'bg-orange-500' : 'bg-gray-500'
                    }`}></div>
                    <span className="text-sm text-gray-700 capitalize">{activity}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`rounded-full h-2 ${
                          activity === 'supervision' ? 'bg-blue-500' :
                          activity === 'reviews' ? 'bg-green-500' :
                          activity === 'meetings' ? 'bg-purple-500' :
                          activity === 'administrative' ? 'bg-orange-500' : 'bg-gray-500'
                        }`}
                        style={{ width: `${(hours / 15) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{hours}h</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Total Weekly Hours</span>
                <span className="text-lg font-bold text-gray-900">
                  {Object.values(workloadData.timeAllocation).reduce((a, b) => a + b, 0)}h
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Student Distribution by Phase */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Users className="h-5 w-5 text-purple-600 mr-2" />
              Student Distribution by Phase
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {workloadData.studentDistribution.map((phase, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{phase.phase}</h4>
                    <span className="text-lg font-bold text-gray-900">{phase.count}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Avg time per week</span>
                    <span className="font-medium">{phase.avgTime}h</span>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 rounded-full h-2"
                      style={{ width: `${(phase.count / 6) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Trend Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
              Monthly Workload Trend
            </h3>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as any)}
              className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">Last Year</option>
            </select>
          </div>
        </div>
        <div className="p-6">
          <div className="h-64 flex items-end justify-between space-x-2">
            {workloadData.monthlyTrend.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full space-y-1">
                  <div 
                    className="w-full bg-blue-600 rounded-t-sm"
                    style={{ height: `${(data.supervision / 15) * 150}px` }}
                    title={`Supervision: ${data.supervision}h`}
                  ></div>
                  <div 
                    className="w-full bg-green-600"
                    style={{ height: `${(data.reviews / 15) * 150}px` }}
                    title={`Reviews: ${data.reviews}h`}
                  ></div>
                  <div 
                    className="w-full bg-purple-600"
                    style={{ height: `${(data.meetings / 15) * 150}px` }}
                    title={`Meetings: ${data.meetings}h`}
                  ></div>
                  <div 
                    className="w-full bg-orange-600"
                    style={{ height: `${(data.admin / 15) * 150}px` }}
                    title={`Admin: ${data.admin}h`}
                  ></div>
                </div>
                <div className="text-xs text-gray-600 mt-2">{data.month}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded"></div>
              <span>Supervision</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-600 rounded"></div>
              <span>Reviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-600 rounded"></div>
              <span>Meetings</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-600 rounded"></div>
              <span>Administrative</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Deadlines */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
              Upcoming Deadlines
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {workloadData.upcomingDeadlines.map((deadline, index) => (
                <div key={index} className={`p-3 rounded-lg border ${getPriorityColor(deadline.priority)}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">{deadline.task}</h4>
                      <p className="text-sm text-gray-600">{deadline.student}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">
                        {new Date(deadline.dueDate).toLocaleDateString()}
                      </div>
                      <div className="text-xs uppercase tracking-wide opacity-75">
                        {deadline.priority}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Comparison */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Award className="h-5 w-5 text-yellow-600 mr-2" />
              Performance Comparison
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Students per Supervisor</span>
                  <div className="flex space-x-4 text-sm">
                    <span className="text-blue-600 font-medium">You: {workloadData.currentLoad.totalStudents}</span>
                    <span className="text-gray-500">Dept: {workloadData.workloadComparison.departmentAvg.students}</span>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 rounded-full h-2" style={{ width: '75%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Avg Feedback Time (days)</span>
                  <div className="flex space-x-4 text-sm">
                    <span className="text-green-600 font-medium">You: {workloadData.performanceMetrics.avgFeedbackTime}</span>
                    <span className="text-gray-500">Dept: {workloadData.workloadComparison.departmentAvg.feedbackTime}</span>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 rounded-full h-2" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Student Satisfaction</span>
                  <div className="flex space-x-4 text-sm">
                    <span className="text-purple-600 font-medium">You: {workloadData.performanceMetrics.studentSatisfaction}</span>
                    <span className="text-gray-500">Dept: {workloadData.workloadComparison.departmentAvg.satisfaction}</span>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 rounded-full h-2" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Completion Rate (%)</span>
                  <div className="flex space-x-4 text-sm">
                    <span className="text-teal-600 font-medium">You: {workloadData.performanceMetrics.completionRate}%</span>
                    <span className="text-gray-500">Dept: {workloadData.workloadComparison.departmentAvg.completionRate}%</span>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-teal-600 rounded-full h-2" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
          Workload Optimization Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-900 mb-2">Capacity Management</h4>
            <p className="text-sm text-green-700">
              You're at 75% capacity. Consider taking 1-2 more students to optimize your supervision load 
              while maintaining quality.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-900 mb-2">Time Efficiency</h4>
            <p className="text-sm text-blue-700">
              Your feedback time is excellent. Consider sharing your efficient review process with 
              department colleagues.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-medium text-purple-900 mb-2">Student Development</h4>
            <p className="text-sm text-purple-700">
              High satisfaction scores indicate strong mentoring. Consider mentoring junior faculty 
              in supervision best practices.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-medium text-orange-900 mb-2">Research Output</h4>
            <p className="text-sm text-orange-700">
              4 publications with students this year is excellent. Continue encouraging student 
              research publication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}