import React, { useState } from 'react';
import { 
  FileText, 
  Upload, 
  Download, 
  Eye, 
  MessageSquare,
  Clock,
  CheckCircle,
  AlertTriangle,
  Search,
  Filter,
  Calendar,
  User,
  Star,
  MoreVertical
} from 'lucide-react';

export function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

  const documents = [
    {
      id: '1',
      name: 'Thesis_Proposal_v3.pdf',
      type: 'proposal',
      version: 3,
      status: 'approved',
      uploadDate: '2023-10-12',
      size: '2.4 MB',
      uploadedBy: 'Sarah Johnson',
      reviewedBy: 'Dr. Michael Chen',
      reviewDate: '2023-10-14',
      feedback: {
        rating: 4.5,
        comments: 'Excellent proposal with clear objectives. Minor revisions needed in methodology section.',
        categories: [
          { name: 'Clarity', rating: 5 },
          { name: 'Methodology', rating: 4 },
          { name: 'Literature Review', rating: 4 },
          { name: 'Feasibility', rating: 5 }
        ]
      },
      versions: [
        { version: 1, date: '2023-09-28', status: 'needs-revision' },
        { version: 2, date: '2023-10-05', status: 'needs-revision' },
        { version: 3, date: '2023-10-12', status: 'approved' }
      ]
    },
    {
      id: '2',
      name: 'Literature_Review_Draft_v2.docx',
      type: 'chapter',
      version: 2,
      status: 'under-review',
      uploadDate: '2024-01-08',
      size: '1.8 MB',
      uploadedBy: 'Sarah Johnson',
      reviewedBy: 'Dr. Michael Chen',
      reviewDate: null,
      feedback: {
        rating: 4.0,
        comments: 'Good progress. Need to include more recent studies from 2023. Structure is solid.',
        categories: [
          { name: 'Content Quality', rating: 4 },
          { name: 'Organization', rating: 4 },
          { name: 'Citations', rating: 3 },
          { name: 'Analysis', rating: 4 }
        ]
      },
      versions: [
        { version: 1, date: '2023-12-20', status: 'needs-revision' },
        { version: 2, date: '2024-01-08', status: 'under-review' }
      ]
    },
    {
      id: '3',
      name: 'Data_Collection_Plan.pdf',
      type: 'methodology',
      version: 1,
      status: 'approved',
      uploadDate: '2023-12-15',
      size: '1.2 MB',
      uploadedBy: 'Sarah Johnson',
      reviewedBy: 'Dr. Michael Chen',
      reviewDate: '2023-12-18',
      feedback: {
        rating: 4.8,
        comments: 'Comprehensive data collection plan. Well-structured approach with clear timelines.',
        categories: [
          { name: 'Methodology', rating: 5 },
          { name: 'Timeline', rating: 5 },
          { name: 'Ethics', rating: 4 },
          { name: 'Feasibility', rating: 5 }
        ]
      },
      versions: [
        { version: 1, date: '2023-12-15', status: 'approved' }
      ]
    },
    {
      id: '4',
      name: 'Research_Ethics_Application.pdf',
      type: 'ethics',
      version: 1,
      status: 'pending',
      uploadDate: '2024-01-10',
      size: '0.8 MB',
      uploadedBy: 'Sarah Johnson',
      reviewedBy: null,
      reviewDate: null,
      feedback: null,
      versions: [
        { version: 1, date: '2024-01-10', status: 'pending' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-600 bg-green-50 border-green-200';
      case 'under-review': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'needs-revision': return 'text-red-600 bg-red-50 border-red-200';
      case 'pending': return 'text-gray-600 bg-gray-50 border-gray-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="h-4 w-4" />;
      case 'under-review': return <Clock className="h-4 w-4" />;
      case 'needs-revision': return <AlertTriangle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'proposal': return 'bg-blue-100 text-blue-800';
      case 'chapter': return 'bg-purple-100 text-purple-800';
      case 'methodology': return 'bg-green-100 text-green-800';
      case 'ethics': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || doc.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const documentStats = {
    total: documents.length,
    approved: documents.filter(d => d.status === 'approved').length,
    underReview: documents.filter(d => d.status === 'under-review').length,
    needsRevision: documents.filter(d => d.status === 'needs-revision').length,
    avgRating: documents.filter(d => d.feedback).reduce((acc, d) => acc + d.feedback!.rating, 0) / documents.filter(d => d.feedback).length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Document Management</h1>
            <p className="text-green-100 mt-1">Manage thesis documents and track review progress</p>
          </div>
          <button className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 flex items-center space-x-2">
            <Upload className="h-4 w-4" />
            <span>Upload Document</span>
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Documents</p>
              <p className="text-2xl font-semibold text-gray-900">{documentStats.total}</p>
            </div>
            <FileText className="h-8 w-8 text-gray-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Approved</p>
              <p className="text-2xl font-semibold text-green-600">{documentStats.approved}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Under Review</p>
              <p className="text-2xl font-semibold text-yellow-600">{documentStats.underReview}</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Need Revision</p>
              <p className="text-2xl font-semibold text-red-600">{documentStats.needsRevision}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Rating</p>
              <p className="text-2xl font-semibold text-blue-600">{documentStats.avgRating.toFixed(1)}</p>
            </div>
            <Star className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="approved">Approved</option>
                <option value="under-review">Under Review</option>
                <option value="needs-revision">Needs Revision</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        {/* Documents List */}
        <div className="divide-y divide-gray-200">
          {filteredDocuments.map((document) => (
            <div key={document.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-medium text-gray-900 truncate">
                        {document.name}
                      </h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(document.type)}`}>
                        {document.type}
                      </span>
                      <span className="text-sm text-gray-500">v{document.version}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Uploaded {new Date(document.uploadDate).toLocaleDateString()}</span>
                      </span>
                      <span>{document.size}</span>
                      <span className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{document.uploadedBy}</span>
                      </span>
                    </div>
                    {document.feedback && (
                      <div className="mt-2 flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-3 w-3 ${
                                star <= document.feedback!.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">{document.feedback.rating}/5</span>
                        <span className="text-sm text-gray-500">by {document.reviewedBy}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(document.status)}`}>
                    {getStatusIcon(document.status)}
                    <span className="ml-1 capitalize">{document.status.replace('-', ' ')}</span>
                  </span>
                  <div className="flex items-center space-x-1">
                    <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                      <Download className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                      <MessageSquare className="h-4 w-4" />
                    </button>
                    <button 
                      className="p-1 text-gray-400 hover:text-gray-600 rounded"
                      onClick={() => setSelectedDocument(selectedDocument === document.id ? null : document.id)}
                    >
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {selectedDocument === document.id && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Version History */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Version History</h4>
                      <div className="space-y-2">
                        {document.versions.map((version, idx) => (
                          <div key={idx} className="flex items-center justify-between p-2 bg-white rounded border">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium">v{version.version}</span>
                              <span className="text-sm text-gray-600">
                                {new Date(version.date).toLocaleDateString()}
                              </span>
                            </div>
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(version.status)}`}>
                              {version.status.replace('-', ' ')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Feedback Details */}
                    {document.feedback && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Detailed Feedback</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-white rounded border">
                            <p className="text-sm text-gray-700 mb-2">{document.feedback.comments}</p>
                            <div className="space-y-1">
                              {document.feedback.categories.map((category, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                  <span className="text-xs text-gray-600">{category.name}</span>
                                  <div className="flex items-center space-x-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star
                                        key={star}
                                        className={`h-3 w-3 ${
                                          star <= category.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                        }`}
                                      />
                                    ))}
                                    <span className="text-xs text-gray-600 ml-1">{category.rating}/5</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}