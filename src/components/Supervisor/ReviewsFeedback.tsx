import React, { useState } from 'react';
import { 
  FileText, 
  Star, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  MessageSquare,
  Download,
  Eye,
  Edit,
  Send,
  Filter,
  Search,
  Calendar,
  User,
  BarChart3,
  TrendingUp
} from 'lucide-react';

export function ReviewsFeedback() {
  const [activeTab, setActiveTab] = useState<'pending' | 'completed' | 'analytics'>('pending');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [feedbackText, setFeedbackText] = useState('');

  const pendingReviews = [
    {
      id: '1',
      studentName: 'Sarah Johnson',
      studentAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      documentTitle: 'Literature Review Draft v2',
      documentType: 'chapter',
      submittedDate: '2024-01-12',
      dueDate: '2024-01-15',
      priority: 'high',
      wordCount: 8500,
      version: 2,
      description: 'Comprehensive literature review covering machine learning applications in healthcare',
      previousFeedback: 'Good structure, needs more recent studies from 2023'
    },
    {
      id: '2',
      studentName: 'David Kim',
      studentAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      documentTitle: 'Methodology Chapter Draft',
      documentType: 'methodology',
      submittedDate: '2024-01-10',
      dueDate: '2024-01-13',
      priority: 'urgent',
      wordCount: 4200,
      version: 1,
      description: 'Detailed methodology for predictive analytics implementation',
      previousFeedback: null
    },
    {
      id: '3',
      studentName: 'Emily Rodriguez',
      studentAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      documentTitle: 'Results Analysis Chapter',
      documentType: 'results',
      submittedDate: '2024-01-13',
      dueDate: '2024-01-18',
      priority: 'medium',
      wordCount: 6800,
      version: 1,
      description: 'Analysis of experimental results with statistical validation',
      previousFeedback: null
    }
  ];

  const completedReviews = [
    {
      id: '4',
      studentName: 'Sarah Johnson',
      studentAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      documentTitle: 'Thesis Proposal v3',
      documentType: 'proposal',
      submittedDate: '2023-10-12',
      reviewedDate: '2023-10-14',
      rating: 4.5,
      feedback: {
        overall: 'Excellent proposal with clear objectives and well-structured methodology.',
        categories: [
          { name: 'Clarity', rating: 5, comment: 'Very clear and well-written' },
          { name: 'Methodology', rating: 4, comment: 'Solid approach, minor improvements needed' },
          { name: 'Literature Review', rating: 4, comment: 'Good coverage of relevant literature' },
          { name: 'Feasibility', rating: 5, comment: 'Realistic timeline and objectives' }
        ],
        timeToReview: 2
      }
    },
    {
      id: '5',
      studentName: 'Emily Rodriguez',
      studentAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      documentTitle: 'Data Collection Plan',
      documentType: 'methodology',
      submittedDate: '2023-12-15',
      reviewedDate: '2023-12-17',
      rating: 4.8,
      feedback: {
        overall: 'Comprehensive and well-thought-out data collection strategy.',
        categories: [
          { name: 'Methodology', rating: 5, comment: 'Excellent methodological approach' },
          { name: 'Ethics', rating: 4, comment: 'Good consideration of ethical issues' },
          { name: 'Timeline', rating: 5, comment: 'Realistic and well-planned timeline' },
          { name: 'Resources', rating: 5, comment: 'Appropriate resource allocation' }
        ],
        timeToReview: 1
      }
    }
  ];

  const reviewAnalytics = {
    totalReviews: 24,
    avgReviewTime: 2.8,
    avgRating: 4.2,
    pendingCount: pendingReviews.length,
    overdueCount: 1,
    thisMonthReviews: 8,
    studentSatisfaction: 4.6,
    reviewDistribution: [
      { category: 'Proposals', count: 6, avgRating: 4.3 },
      { category: 'Chapters', count: 12, avgRating: 4.1 },
      { category: 'Methodology', count: 4, avgRating: 4.5 },
      { category: 'Results', count: 2, avgRating: 4.0 }
    ],
    monthlyTrend: [
      { month: 'Sep', reviews: 3, avgTime: 3.2 },
      { month: 'Oct', reviews: 4, avgTime: 2.8 },
      { month: 'Nov', reviews: 2, avgTime: 2.1 },
      { month: 'Dec', reviews: 3, avgTime: 2.5 },
      { month: 'Jan', reviews: 8, avgTime: 2.8 }
    ]
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'text-red-600 bg-red-50 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-blue-600 bg-blue-50 border-blue-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'proposal': return 'bg-blue-100 text-blue-800';
      case 'chapter': return 'bg-purple-100 text-purple-800';
      case 'methodology': return 'bg-green-100 text-green-800';
      case 'results': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Reviews & Feedback</h1>
            <p className="text-purple-100 mt-1">Manage document reviews and provide structured feedback</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{reviewAnalytics.avgReviewTime}d</div>
            <div className="text-purple-100 text-sm">Avg Review Time</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Reviews</p>
              <p className="text-2xl font-semibold text-orange-600">{reviewAnalytics.pendingCount}</p>
            </div>
            <Clock className="h-8 w-8 text-orange-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Rating Given</p>
              <p className="text-2xl font-semibold text-green-600">{reviewAnalytics.avgRating}</p>
            </div>
            <Star className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">This Month</p>
              <p className="text-2xl font-semibold text-blue-600">{reviewAnalytics.thisMonthReviews}</p>
            </div>
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Student Satisfaction</p>
              <p className="text-2xl font-semibold text-purple-600">{reviewAnalytics.studentSatisfaction}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('pending')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'pending'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Pending Reviews ({reviewAnalytics.pendingCount})</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'completed'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Completed Reviews</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'analytics'
                  ? 'border-purple-500 text-purple-600'
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
          {/* Pending Reviews Tab */}
          {activeTab === 'pending' && (
            <div className="space-y-6">
              {pendingReviews.length > 0 ? (
                <div className="space-y-4">
                  {pendingReviews.map((review) => (
                    <div key={review.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <img
                            className="h-12 w-12 rounded-full object-cover"
                            src={review.studentAvatar}
                            alt={review.studentName}
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-lg font-medium text-gray-900">{review.documentTitle}</h3>
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(review.documentType)}`}>
                                {review.documentType}
                              </span>
                              <span className="text-sm text-gray-500">v{review.version}</span>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                              <span className="flex items-center space-x-1">
                                <User className="h-4 w-4" />
                                <span>{review.studentName}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>Submitted {new Date(review.submittedDate).toLocaleDateString()}</span>
                              </span>
                              <span>{review.wordCount.toLocaleString()} words</span>
                            </div>
                            <p className="text-sm text-gray-700 mb-3">{review.description}</p>
                            {review.previousFeedback && (
                              <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-3">
                                <p className="text-sm text-blue-800">
                                  <strong>Previous feedback:</strong> {review.previousFeedback}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(review.priority)}`}>
                            {review.priority}
                          </span>
                          <div className="text-right">
                            <div className={`text-sm font-medium ${isOverdue(review.dueDate) ? 'text-red-600' : 'text-gray-900'}`}>
                              Due: {new Date(review.dueDate).toLocaleDateString()}
                            </div>
                            {isOverdue(review.dueDate) && (
                              <div className="flex items-center space-x-1 text-red-600">
                                <AlertTriangle className="h-3 w-3" />
                                <span className="text-xs">Overdue</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-4 flex items-center space-x-3">
                        <button className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                          <Eye className="h-3 w-3" />
                          <span>Review Document</span>
                        </button>
                        <button className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                          <Edit className="h-3 w-3" />
                          <span>Provide Feedback</span>
                        </button>
                        <button className="flex items-center space-x-1 px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700">
                          <Download className="h-3 w-3" />
                          <span>Download</span>
                        </button>
                        <button className="flex items-center space-x-1 px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700">
                          <MessageSquare className="h-3 w-3" />
                          <span>Message Student</span>
                        </button>
                      </div>

                      {/* Quick Feedback Form */}
                      {selectedDocument === review.id && (
                        <div className="mt-4 p-4 bg-white rounded border">
                          <h4 className="font-medium text-gray-900 mb-3">Provide Feedback</h4>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Overall Rating</label>
                              <div className="flex items-center space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="h-5 w-5 text-gray-300 hover:text-yellow-400 cursor-pointer" />
                                ))}
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Comments</label>
                              <textarea
                                value={feedbackText}
                                onChange={(e) => setFeedbackText(e.target.value)}
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                placeholder="Provide detailed feedback on the document..."
                              />
                            </div>
                            <div className="flex justify-end space-x-2">
                              <button
                                onClick={() => setSelectedDocument(null)}
                                className="px-3 py-1 text-gray-600 bg-gray-100 rounded text-sm hover:bg-gray-200"
                              >
                                Cancel
                              </button>
                              <button className="flex items-center space-x-1 px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700">
                                <Send className="h-3 w-3" />
                                <span>Submit Feedback</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">All caught up!</h3>
                  <p className="text-gray-600">No pending reviews at the moment.</p>
                </div>
              )}
            </div>
          )}

          {/* Completed Reviews Tab */}
          {activeTab === 'completed' && (
            <div className="space-y-4">
              {completedReviews.map((review) => (
                <div key={review.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={review.studentAvatar}
                        alt={review.studentName}
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-medium text-gray-900">{review.documentTitle}</h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(review.documentType)}`}>
                            {review.documentType}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <span>{review.studentName}</span>
                          <span>Reviewed {new Date(review.reviewedDate).toLocaleDateString()}</span>
                          <span>Review time: {review.feedback.timeToReview} days</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-gray-900">{review.rating}/5</span>
                        </div>
                        <p className="text-sm text-gray-700">{review.feedback.overall}</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              {/* Review Distribution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-medium text-gray-900 mb-4">Review Distribution by Type</h3>
                  <div className="space-y-3">
                    {reviewAnalytics.reviewDistribution.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            index === 0 ? 'bg-blue-500' :
                            index === 1 ? 'bg-purple-500' :
                            index === 2 ? 'bg-green-500' : 'bg-orange-500'
                          }`}></div>
                          <span className="text-sm text-gray-700">{item.category}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">{item.count}</div>
                          <div className="text-xs text-gray-500">{item.avgRating} avg</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Monthly Trend */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-medium text-gray-900 mb-4">Monthly Review Trend</h3>
                  <div className="h-32 flex items-end justify-between space-x-2">
                    {reviewAnalytics.monthlyTrend.map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-purple-600 rounded-t-sm transition-all duration-500 hover:bg-purple-700"
                          style={{ height: `${(data.reviews / 8) * 100}px` }}
                          title={`${data.month}: ${data.reviews} reviews, ${data.avgTime}d avg time`}
                        ></div>
                        <div className="text-xs text-gray-600 mt-2">{data.month}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Performance Insights */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-900 mb-4">Performance Insights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">92%</div>
                    <div className="text-sm text-gray-600">On-time Reviews</div>
                    <div className="text-xs text-gray-500 mt-1">Above target (85%)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">4.2</div>
                    <div className="text-sm text-gray-600">Avg Rating Given</div>
                    <div className="text-xs text-gray-500 mt-1">Balanced feedback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">2.8d</div>
                    <div className="text-sm text-gray-600">Avg Review Time</div>
                    <div className="text-xs text-gray-500 mt-1">Below target (3d)</div>
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