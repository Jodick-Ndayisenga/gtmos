import React, { useState } from 'react';
import { 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Calendar,
  FileText,
  MessageSquare,
  TrendingUp,
  Target,
  ChevronRight,
  Download,
  Upload
} from 'lucide-react';

export function MilestonesPage() {
  const [selectedMilestone, setSelectedMilestone] = useState<string | null>(null);

  const milestones = [
    {
      id: '1',
      name: 'Thesis Proposal',
      description: 'Submit initial thesis proposal with research objectives and methodology',
      status: 'completed',
      dueDate: '2023-10-15',
      completedDate: '2023-10-12',
      progress: 100,
      documents: [
        { name: 'Thesis_Proposal_v3.pdf', status: 'approved', uploadDate: '2023-10-12' }
      ],
      feedback: {
        rating: 4.5,
        comments: 'Excellent proposal with clear objectives. Minor revisions needed in methodology section.',
        providedBy: 'Dr. Michael Chen',
        date: '2023-10-14'
      }
    },
    {
      id: '2',
      name: 'Proposal Defense',
      description: 'Present and defend thesis proposal to committee',
      status: 'completed',
      dueDate: '2023-11-20',
      completedDate: '2023-11-18',
      progress: 100,
      documents: [
        { name: 'Defense_Presentation.pptx', status: 'approved', uploadDate: '2023-11-17' },
        { name: 'Committee_Feedback.pdf', status: 'approved', uploadDate: '2023-11-20' }
      ],
      feedback: {
        rating: 4.8,
        comments: 'Outstanding presentation. Committee approved with minor suggestions for literature review expansion.',
        providedBy: 'Committee',
        date: '2023-11-18'
      }
    },
    {
      id: '3',
      name: 'Literature Review',
      description: 'Complete comprehensive literature review chapter',
      status: 'in-progress',
      dueDate: '2024-01-15',
      completedDate: null,
      progress: 75,
      documents: [
        { name: 'Literature_Review_Draft_v2.docx', status: 'under-review', uploadDate: '2024-01-08' }
      ],
      feedback: {
        rating: 4.0,
        comments: 'Good progress. Need to include more recent studies from 2023. Structure is solid.',
        providedBy: 'Dr. Michael Chen',
        date: '2024-01-10'
      }
    },
    {
      id: '4',
      name: 'Data Collection',
      description: 'Collect and prepare research data according to approved methodology',
      status: 'in-progress',
      dueDate: '2024-03-01',
      completedDate: null,
      progress: 45,
      documents: [
        { name: 'Data_Collection_Plan.pdf', status: 'approved', uploadDate: '2023-12-15' }
      ],
      feedback: null
    },
    {
      id: '5',
      name: 'Methodology Chapter',
      description: 'Write detailed methodology chapter with data analysis approach',
      status: 'pending',
      dueDate: '2024-04-15',
      completedDate: null,
      progress: 0,
      documents: [],
      feedback: null
    },
    {
      id: '6',
      name: 'Results & Analysis',
      description: 'Complete data analysis and write results chapter',
      status: 'pending',
      dueDate: '2024-06-01',
      completedDate: null,
      progress: 0,
      documents: [],
      feedback: null
    },
    {
      id: '7',
      name: 'Final Draft',
      description: 'Submit complete thesis draft for final review',
      status: 'pending',
      dueDate: '2024-07-15',
      completedDate: null,
      progress: 0,
      documents: [],
      feedback: null
    },
    {
      id: '8',
      name: 'Thesis Defense',
      description: 'Final oral defense of completed thesis',
      status: 'pending',
      dueDate: '2024-08-15',
      completedDate: null,
      progress: 0,
      documents: [],
      feedback: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50 border-green-200';
      case 'in-progress': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'overdue': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'in-progress': return <Clock className="h-5 w-5 text-blue-600" />;
      case 'overdue': return <AlertTriangle className="h-5 w-5 text-red-600" />;
      default: return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const overallProgress = Math.round(milestones.reduce((acc, m) => acc + m.progress, 0) / milestones.length);

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Thesis Milestones</h1>
            <p className="text-purple-100 mt-1">Track your progress through key thesis stages</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">{overallProgress}%</div>
            <div className="text-purple-100 text-sm">Overall Progress</div>
          </div>
        </div>
        <div className="mt-4 bg-purple-500 bg-opacity-30 rounded-full h-3">
          <div 
            className="bg-white rounded-full h-3 transition-all duration-500"
            style={{ width: `${overallProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Milestone Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-semibold text-green-600">
                {milestones.filter(m => m.status === 'completed').length}
              </p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">In Progress</p>
              <p className="text-2xl font-semibold text-blue-600">
                {milestones.filter(m => m.status === 'in-progress').length}
              </p>
            </div>
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Upcoming</p>
              <p className="text-2xl font-semibold text-gray-600">
                {milestones.filter(m => m.status === 'pending').length}
              </p>
            </div>
            <Target className="h-8 w-8 text-gray-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Next Deadline</p>
              <p className="text-lg font-semibold text-orange-600">Jan 15</p>
            </div>
            <Calendar className="h-8 w-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Timeline Visualization */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <TrendingUp className="h-5 w-5 text-purple-600 mr-2" />
            Milestone Timeline
          </h3>
        </div>
        <div className="p-6">
          <div className="relative">
            {milestones.map((milestone, index) => (
              <div key={milestone.id} className="flex items-start space-x-4 pb-8 last:pb-0">
                {/* Timeline Line */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200"></div>
                )}
                
                {/* Status Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center ${getStatusColor(milestone.status)}`}>
                  {getStatusIcon(milestone.status)}
                </div>

                {/* Milestone Content */}
                <div className="flex-1 min-w-0">
                  <div 
                    className="cursor-pointer"
                    onClick={() => setSelectedMilestone(selectedMilestone === milestone.id ? null : milestone.id)}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-medium text-gray-900">{milestone.name}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">
                          Due: {new Date(milestone.dueDate).toLocaleDateString()}
                        </span>
                        <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform ${
                          selectedMilestone === milestone.id ? 'rotate-90' : ''
                        }`} />
                      </div>
                    </div>
                    <p className="text-gray-600 mt-1">{milestone.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="mt-3 flex items-center space-x-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            milestone.status === 'completed' ? 'bg-green-500' :
                            milestone.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                          }`}
                          style={{ width: `${milestone.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{milestone.progress}%</span>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedMilestone === milestone.id && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      {/* Documents */}
                      {milestone.documents.length > 0 && (
                        <div className="mb-4">
                          <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                            <FileText className="h-4 w-4 mr-1" />
                            Documents
                          </h5>
                          <div className="space-y-2">
                            {milestone.documents.map((doc, idx) => (
                              <div key={idx} className="flex items-center justify-between p-2 bg-white rounded border">
                                <div className="flex items-center space-x-2">
                                  <FileText className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm">{doc.name}</span>
                                  <span className={`px-2 py-1 text-xs rounded-full ${
                                    doc.status === 'approved' ? 'bg-green-100 text-green-800' :
                                    doc.status === 'under-review' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-gray-100 text-gray-800'
                                  }`}>
                                    {doc.status}
                                  </span>
                                </div>
                                <button className="text-blue-600 hover:text-blue-800">
                                  <Download className="h-4 w-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Feedback */}
                      {milestone.feedback && (
                        <div className="mb-4">
                          <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Latest Feedback
                          </h5>
                          <div className="p-3 bg-white rounded border">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">{milestone.feedback.providedBy}</span>
                              <div className="flex items-center space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <div
                                    key={star}
                                    className={`h-3 w-3 rounded-full ${
                                      star <= milestone.feedback!.rating ? 'bg-yellow-400' : 'bg-gray-200'
                                    }`}
                                  ></div>
                                ))}
                                <span className="text-sm text-gray-600 ml-1">
                                  {milestone.feedback.rating}/5
                                </span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-700">{milestone.feedback.comments}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(milestone.feedback.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        {milestone.status === 'in-progress' && (
                          <button className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                            <Upload className="h-3 w-3" />
                            <span>Upload Document</span>
                          </button>
                        )}
                        <button className="flex items-center space-x-1 px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700">
                          <MessageSquare className="h-3 w-3" />
                          <span>Contact Supervisor</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}