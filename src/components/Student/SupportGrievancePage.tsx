import React, { useState } from 'react';
import { 
  HelpCircle, 
  Shield, 
  AlertTriangle, 
  MessageSquare,
  FileText,
  Lock,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Eye,
  EyeOff,
  Send,
  Plus,
  User,
  Calendar
} from 'lucide-react';

export function SupportGrievancePage() {
  const [activeTab, setActiveTab] = useState<'support' | 'grievance' | 'resources'>('support');
  const [showGrievanceForm, setShowGrievanceForm] = useState(false);
  const [grievanceType, setGrievanceType] = useState('');
  const [isConfidential, setIsConfidential] = useState(true);

  const supportContacts = [
    {
      name: 'Graduate School Office',
      role: 'Academic Support',
      email: 'gradschool@university.edu',
      phone: '+27 11 123 4567',
      hours: 'Mon-Fri 8:00-17:00',
      description: 'General academic queries and thesis-related support'
    },
    {
      name: 'Student Counseling Services',
      role: 'Mental Health Support',
      email: 'counseling@university.edu',
      phone: '+27 11 123 4568',
      hours: '24/7 Crisis Line',
      description: 'Confidential counseling and mental health support'
    },
    {
      name: 'Ombudsman Office',
      role: 'Grievance Resolution',
      email: 'ombudsman@university.edu',
      phone: '+27 11 123 4569',
      hours: 'Mon-Fri 9:00-16:00',
      description: 'Independent grievance investigation and resolution'
    },
    {
      name: 'Ethics Office',
      role: 'Research Ethics',
      email: 'ethics@university.edu',
      phone: '+27 11 123 4570',
      hours: 'Mon-Fri 8:30-16:30',
      description: 'Research ethics guidance and compliance'
    }
  ];

  const grievances = [
    {
      id: 'GRV-2024-001',
      type: 'supervision',
      subject: 'Lack of Regular Supervision Meetings',
      status: 'investigating',
      severity: 'medium',
      submittedDate: '2024-01-05',
      lastUpdate: '2024-01-10',
      isConfidential: true,
      assignedTo: 'Dr. Patricia Williams',
      description: 'Supervisor has not scheduled regular meetings as required by university policy.'
    },
    {
      id: 'GRV-2023-045',
      type: 'misconduct',
      subject: 'Inappropriate Comments During Supervision',
      status: 'resolved',
      severity: 'high',
      submittedDate: '2023-11-15',
      lastUpdate: '2023-12-20',
      isConfidential: true,
      assignedTo: 'Prof. Robert Johnson',
      description: 'Resolved through mediation and supervisor training.'
    }
  ];

  const resources = [
    {
      category: 'Academic Support',
      items: [
        { title: 'Thesis Writing Guidelines', type: 'PDF', url: '#' },
        { title: 'Research Methodology Resources', type: 'Link', url: '#' },
        { title: 'Citation and Referencing Guide', type: 'PDF', url: '#' },
        { title: 'Academic Writing Workshops', type: 'Event', url: '#' }
      ]
    },
    {
      category: 'Mental Health & Wellbeing',
      items: [
        { title: 'Stress Management Techniques', type: 'PDF', url: '#' },
        { title: 'Work-Life Balance for Graduate Students', type: 'Article', url: '#' },
        { title: 'Mindfulness and Meditation Sessions', type: 'Event', url: '#' },
        { title: 'Peer Support Groups', type: 'Link', url: '#' }
      ]
    },
    {
      category: 'University Policies',
      items: [
        { title: 'Student Code of Conduct', type: 'PDF', url: '#' },
        { title: 'Grievance Procedure Policy', type: 'PDF', url: '#' },
        { title: 'Supervision Guidelines', type: 'PDF', url: '#' },
        { title: 'Anti-Harassment Policy', type: 'PDF', url: '#' }
      ]
    },
    {
      category: 'Emergency Contacts',
      items: [
        { title: 'Campus Security: +27 11 123 4500', type: 'Phone', url: 'tel:+27111234500' },
        { title: 'Crisis Helpline: 0800 567 567', type: 'Phone', url: 'tel:0800567567' },
        { title: 'Medical Emergency: 10177', type: 'Phone', url: 'tel:10177' },
        { title: 'Gender-Based Violence Helpline', type: 'Phone', url: 'tel:0800428428' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'text-green-600 bg-green-50 border-green-200';
      case 'investigating': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'open': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'closed': return 'text-gray-600 bg-gray-50 border-gray-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Support & Grievance Center</h1>
            <p className="text-red-100 mt-1">Confidential support and grievance resolution services</p>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-red-200" />
            <span className="text-sm text-red-100">Confidential & Secure</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('support')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'support'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <HelpCircle className="h-4 w-4" />
                <span>Support Services</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('grievance')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'grievance'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4" />
                <span>Grievance System</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'resources'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Resources</span>
              </div>
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* Support Services Tab */}
          {activeTab === 'support' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-900">Need Help?</h3>
                    <p className="text-blue-700 text-sm mt-1">
                      Our support services are here to help you succeed in your graduate studies. 
                      All communications are confidential and professional.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {supportContacts.map((contact, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{contact.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{contact.role}</p>
                        <p className="text-sm text-gray-700 mb-4">{contact.description}</p>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm">
                            <Mail className="h-4 w-4 text-gray-400" />
                            <a href={`mailto:${contact.email}`} className="text-blue-600 hover:text-blue-800">
                              {contact.email}
                            </a>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Phone className="h-4 w-4 text-gray-400" />
                            <a href={`tel:${contact.phone}`} className="text-blue-600 hover:text-blue-800">
                              {contact.phone}
                            </a>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span>{contact.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-yellow-900">Emergency Situations</h3>
                    <p className="text-yellow-700 text-sm mt-1">
                      If you are in immediate danger or experiencing a crisis, please contact campus security 
                      (+27 11 123 4500) or emergency services (10177) immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grievance System Tab */}
          {activeTab === 'grievance' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Grievance Management</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Submit and track formal grievances through our confidential system
                  </p>
                </div>
                <button
                  onClick={() => setShowGrievanceForm(true)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Submit Grievance</span>
                </button>
              </div>

              {/* Grievance Form Modal */}
              {showGrievanceForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-900">Submit New Grievance</h3>
                      <button
                        onClick={() => setShowGrievanceForm(false)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        ×
                      </button>
                    </div>

                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Grievance Type
                        </label>
                        <select
                          value={grievanceType}
                          onChange={(e) => setGrievanceType(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        >
                          <option value="">Select type...</option>
                          <option value="supervision">Supervision Issues</option>
                          <option value="misconduct">Misconduct</option>
                          <option value="discrimination">Discrimination</option>
                          <option value="harassment">Harassment</option>
                          <option value="academic">Academic Concerns</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Brief description of the issue"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Detailed Description
                        </label>
                        <textarea
                          rows={6}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Provide a detailed description of the issue, including dates, people involved, and any relevant context..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Severity Level
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                          <option value="low">Low - Minor concern</option>
                          <option value="medium">Medium - Significant issue</option>
                          <option value="high">High - Serious problem</option>
                          <option value="critical">Critical - Urgent intervention needed</option>
                        </select>
                      </div>

                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id="confidential"
                          checked={isConfidential}
                          onChange={(e) => setIsConfidential(e.target.checked)}
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <label htmlFor="confidential" className="text-sm text-gray-700 flex items-center space-x-2">
                          <Lock className="h-4 w-4 text-gray-400" />
                          <span>Keep this grievance confidential</span>
                        </label>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <Shield className="h-5 w-5 text-red-600 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-red-900">Confidentiality Notice</h4>
                            <p className="text-red-700 text-sm mt-1">
                              All grievances are handled with strict confidentiality. Only authorized personnel 
                              involved in the investigation will have access to your submission.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          onClick={() => setShowGrievanceForm(false)}
                          className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center space-x-2"
                        >
                          <Send className="h-4 w-4" />
                          <span>Submit Grievance</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* Existing Grievances */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Your Grievances</h4>
                {grievances.map((grievance) => (
                  <div key={grievance.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h5 className="font-medium text-gray-900">{grievance.subject}</h5>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(grievance.status)}`}>
                            {grievance.status}
                          </span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getSeverityColor(grievance.severity)}`}>
                            {grievance.severity}
                          </span>
                          {grievance.isConfidential && (
                            <span className="flex items-center space-x-1 text-xs text-gray-600">
                              <Lock className="h-3 w-3" />
                              <span>Confidential</span>
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{grievance.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>ID: {grievance.id}</span>
                          <span>Submitted: {new Date(grievance.submittedDate).toLocaleDateString()}</span>
                          <span>Last Update: {new Date(grievance.lastUpdate).toLocaleDateString()}</span>
                          <span>Assigned to: {grievance.assignedTo}</span>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Resources</h3>
                <p className="text-gray-600 text-sm">
                  Access helpful resources, policies, and emergency contacts
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((category, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">{category.category}</h4>
                    <div className="space-y-3">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <FileText className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-700">{item.title}</span>
                          </div>
                          <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">
                            {item.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}