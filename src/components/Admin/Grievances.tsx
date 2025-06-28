import React, { useState } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  Clock, 
  CheckCircle,
  XCircle,
  Eye,
  MessageSquare,
  User,
  Calendar,
  FileText,
  Lock,
  Unlock,
  Search,
  Filter,
  Download,
  Edit,
  Send,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  BarChart3,
  Activity,
  Target,
  Award,
  Users,
  Globe,
  Zap,
  Settings,
  Plus,
  Archive,
  Flag,
  BookOpen,
  Scale,
  Gavel,
  UserCheck,
  AlertCircle
} from 'lucide-react';

export function Grievances() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterSeverity, setFilterSeverity] = useState('all');
  const [selectedGrievance, setSelectedGrievance] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'active' | 'resolved' | 'analytics'>('active');
  const [showResponseForm, setShowResponseForm] = useState<string | null>(null);

  const grievances = [
    {
      id: 'GRV-2024-001',
      type: 'supervision',
      subject: 'Lack of Regular Supervision Meetings',
      description: 'My supervisor has not scheduled regular meetings as required by university policy. I have only had 2 meetings in the past 3 months, which is significantly below the required monthly meetings.',
      severity: 'high',
      status: 'investigating',
      submittedDate: '2024-01-05',
      lastUpdate: '2024-01-10',
      isConfidential: true,
      student: {
        id: 'STU001',
        name: 'Sarah Johnson',
        email: 'sarah.johnson@university.edu',
        program: 'MSc Computer Science',
        year: 2,
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
      },
      supervisor: {
        id: 'SUP003',
        name: 'Dr. Michael Thompson',
        email: 'michael.thompson@university.edu',
        department: 'Computer Science'
      },
      assignedTo: {
        id: 'ADM001',
        name: 'Dr. Patricia Williams',
        role: 'Ombudsman',
        email: 'patricia.williams@university.edu'
      },
      timeline: [
        { action: 'Grievance submitted', date: '2024-01-05 14:30', user: 'Sarah Johnson', type: 'submission' },
        { action: 'Initial review completed', date: '2024-01-06 09:15', user: 'System', type: 'review' },
        { action: 'Assigned to ombudsman', date: '2024-01-06 10:00', user: 'System', type: 'assignment' },
        { action: 'Investigation initiated', date: '2024-01-07 11:30', user: 'Dr. Patricia Williams', type: 'investigation' },
        { action: 'Supervisor contacted for response', date: '2024-01-08 14:20', user: 'Dr. Patricia Williams', type: 'contact' },
        { action: 'Meeting scheduled with all parties', date: '2024-01-10 16:45', user: 'Dr. Patricia Williams', type: 'meeting' }
      ],
      evidence: [
        { type: 'document', name: 'Meeting_Schedule_Evidence.pdf', uploadDate: '2024-01-05', size: '1.2 MB' },
        { type: 'email', name: 'Email_Communications.pdf', uploadDate: '2024-01-05', size: '0.8 MB' }
      ],
      resolution: null,
      priority: 1,
      escalationLevel: 2,
      relatedPolicies: ['Supervision Policy 3.2', 'Student Rights Charter 1.4'],
      impact: 'Academic progress delayed, student wellbeing affected',
      requestedOutcome: 'Regular supervision schedule establishment, catch-up meetings'
    },
    {
      id: 'GRV-2024-002',
      type: 'misconduct',
      subject: 'Inappropriate Comments During Supervision',
      description: 'During supervision meetings, my supervisor has made inappropriate comments about my personal appearance and has created an uncomfortable working environment.',
      severity: 'critical',
      status: 'resolved',
      submittedDate: '2023-11-15',
      lastUpdate: '2023-12-20',
      isConfidential: true,
      student: {
        id: 'STU002',
        name: 'Lisa Rodriguez',
        email: 'lisa.rodriguez@university.edu',
        program: 'MSc Business Studies',
        year: 1,
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
      },
      supervisor: {
        id: 'SUP007',
        name: 'Prof. James Brown',
        email: 'james.brown@university.edu',
        department: 'Business Studies'
      },
      assignedTo: {
        id: 'ADM002',
        name: 'Prof. Robert Johnson',
        role: 'Department Head',
        email: 'robert.johnson@university.edu'
      },
      timeline: [
        { action: 'Grievance submitted', date: '2023-11-15 10:20', user: 'Lisa Rodriguez', type: 'submission' },
        { action: 'Urgent review initiated', date: '2023-11-15 11:00', user: 'System', type: 'review' },
        { action: 'Escalated to department head', date: '2023-11-15 14:30', user: 'System', type: 'escalation' },
        { action: 'Formal investigation launched', date: '2023-11-16 09:00', user: 'Prof. Robert Johnson', type: 'investigation' },
        { action: 'Witness interviews conducted', date: '2023-11-20 15:30', user: 'Investigation Team', type: 'investigation' },
        { action: 'Disciplinary action taken', date: '2023-12-01 10:00', user: 'HR Department', type: 'action' },
        { action: 'Student reassigned to new supervisor', date: '2023-12-05 14:15', user: 'Academic Office', type: 'resolution' },
        { action: 'Case closed with monitoring', date: '2023-12-20 16:00', user: 'Prof. Robert Johnson', type: 'closure' }
      ],
      evidence: [
        { type: 'statement', name: 'Student_Statement.pdf', uploadDate: '2023-11-15', size: '0.5 MB' },
        { type: 'witness', name: 'Witness_Statements.pdf', uploadDate: '2023-11-20', size: '1.1 MB' },
        { type: 'recording', name: 'Meeting_Recording.mp3', uploadDate: '2023-11-18', size: '15.2 MB' }
      ],
      resolution: {
        outcome: 'Supervisor received formal warning and mandatory training. Student reassigned to Dr. Sarah Wilson.',
        date: '2023-12-20',
        satisfactionRating: 4.5,
        followUpRequired: true,
        followUpDate: '2024-03-20'
      },
      priority: 1,
      escalationLevel: 3,
      relatedPolicies: ['Code of Conduct 2.1', 'Anti-Harassment Policy 4.3', 'Supervision Guidelines 1.8'],
      impact: 'Severe psychological distress, academic disruption',
      requestedOutcome: 'Supervisor disciplinary action, reassignment to new supervisor'
    },
    {
      id: 'GRV-2024-003',
      type: 'discrimination',
      subject: 'Discriminatory Treatment Based on Nationality',
      description: 'I believe I am being treated unfairly compared to local students. My supervisor provides less support and feedback, and I feel this is due to my international student status.',
      severity: 'medium',
      status: 'open',
      submittedDate: '2024-01-12',
      lastUpdate: '2024-01-12',
      isConfidential: false,
      student: {
        id: 'STU003',
        name: 'Ahmed Hassan',
        email: 'ahmed.hassan@university.edu',
        program: 'MSc Engineering',
        year: 2,
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
      },
      supervisor: {
        id: 'SUP012',
        name: 'Dr. Emily Davis',
        email: 'emily.davis@university.edu',
        department: 'Engineering'
      },
      assignedTo: {
        id: 'ADM003',
        name: 'Dr. Maria Garcia',
        role: 'Diversity Officer',
        email: 'maria.garcia@university.edu'
      },
      timeline: [
        { action: 'Grievance submitted', date: '2024-01-12 13:45', user: 'Ahmed Hassan', type: 'submission' },
        { action: 'Assigned to diversity officer', date: '2024-01-12 15:20', user: 'System', type: 'assignment' }
      ],
      evidence: [
        { type: 'comparison', name: 'Support_Comparison_Analysis.pdf', uploadDate: '2024-01-12', size: '2.1 MB' },
        { type: 'communication', name: 'Email_History.pdf', uploadDate: '2024-01-12', size: '1.5 MB' }
      ],
      resolution: null,
      priority: 2,
      escalationLevel: 1,
      relatedPolicies: ['Equality and Diversity Policy 1.1', 'International Student Support 2.3'],
      impact: 'Reduced academic support, feeling of exclusion',
      requestedOutcome: 'Equal treatment, additional support measures'
    },
    {
      id: 'GRV-2024-004',
      type: 'academic',
      subject: 'Unfair Assessment and Grading',
      description: 'My thesis proposal was rejected without proper feedback or opportunity for revision. The assessment criteria were not clearly communicated, and I believe the grading was unfair.',
      severity: 'medium',
      status: 'investigating',
      submittedDate: '2024-01-08',
      lastUpdate: '2024-01-11',
      isConfidential: false,
      student: {
        id: 'STU004',
        name: 'David Kim',
        email: 'david.kim@university.edu',
        program: 'MSc Sciences',
        year: 1,
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
      },
      supervisor: {
        id: 'SUP005',
        name: 'Dr. Jennifer White',
        email: 'jennifer.white@university.edu',
        department: 'Sciences'
      },
      assignedTo: {
        id: 'ADM004',
        name: 'Prof. Michael Brown',
        role: 'Academic Standards Officer',
        email: 'michael.brown@university.edu'
      },
      timeline: [
        { action: 'Grievance submitted', date: '2024-01-08 11:30', user: 'David Kim', type: 'submission' },
        { action: 'Academic review initiated', date: '2024-01-09 09:00', user: 'System', type: 'review' },
        { action: 'Assessment documentation requested', date: '2024-01-10 14:15', user: 'Prof. Michael Brown', type: 'investigation' },
        { action: 'External examiner consulted', date: '2024-01-11 16:30', user: 'Prof. Michael Brown', type: 'consultation' }
      ],
      evidence: [
        { type: 'proposal', name: 'Thesis_Proposal_v2.pdf', uploadDate: '2024-01-08', size: '3.2 MB' },
        { type: 'feedback', name: 'Supervisor_Feedback.pdf', uploadDate: '2024-01-08', size: '0.7 MB' },
        { type: 'guidelines', name: 'Assessment_Guidelines.pdf', uploadDate: '2024-01-08', size: '1.8 MB' }
      ],
      resolution: null,
      priority: 3,
      escalationLevel: 1,
      relatedPolicies: ['Academic Assessment Policy 5.1', 'Student Appeals Procedure 3.4'],
      impact: 'Academic progress halted, thesis timeline affected',
      requestedOutcome: 'Fair reassessment, clear feedback provision'
    }
  ];

  const grievanceStats = {
    total: grievances.length,
    open: grievances.filter(g => g.status === 'open').length,
    investigating: grievances.filter(g => g.status === 'investigating').length,
    resolved: grievances.filter(g => g.status === 'resolved').length,
    critical: grievances.filter(g => g.severity === 'critical').length,
    avgResolutionTime: 12.5,
    satisfactionRate: 4.2,
    escalatedCases: grievances.filter(g => g.escalationLevel > 1).length
  };

  const monthlyTrends = [
    { month: 'Jul', submitted: 3, resolved: 2, satisfaction: 4.1 },
    { month: 'Aug', submitted: 5, resolved: 4, satisfaction: 4.3 },
    { month: 'Sep', submitted: 2, resolved: 3, satisfaction: 4.5 },
    { month: 'Oct', submitted: 4, resolved: 3, satisfaction: 4.2 },
    { month: 'Nov', submitted: 6, resolved: 5, satisfaction: 4.0 },
    { month: 'Dec', submitted: 3, resolved: 4, satisfaction: 4.4 },
    { month: 'Jan', submitted: 4, resolved: 2, satisfaction: 4.2 }
  ];

  const typeDistribution = [
    { type: 'supervision', count: 8, percentage: 35 },
    { type: 'misconduct', count: 6, percentage: 26 },
    { type: 'discrimination', count: 4, percentage: 17 },
    { type: 'academic', count: 3, percentage: 13 },
    { type: 'other', count: 2, percentage: 9 }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200 shadow-red-100';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200 shadow-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200 shadow-yellow-100';
      default: return 'text-blue-600 bg-blue-50 border-blue-200 shadow-blue-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-blue-600 bg-blue-50';
      case 'investigating': return 'text-yellow-600 bg-yellow-50';
      case 'resolved': return 'text-green-600 bg-green-50';
      case 'closed': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'supervision': return <UserCheck className="h-5 w-5" />;
      case 'misconduct': return <AlertTriangle className="h-5 w-5" />;
      case 'discrimination': return <Scale className="h-5 w-5" />;
      case 'academic': return <BookOpen className="h-5 w-5" />;
      case 'harassment': return <Shield className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'submission': return <Send className="h-4 w-4 text-blue-600" />;
      case 'review': return <Eye className="h-4 w-4 text-purple-600" />;
      case 'assignment': return <User className="h-4 w-4 text-green-600" />;
      case 'investigation': return <Search className="h-4 w-4 text-orange-600" />;
      case 'escalation': return <TrendingUp className="h-4 w-4 text-red-600" />;
      case 'resolution': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'closure': return <Archive className="h-4 w-4 text-gray-600" />;
      default: return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  const filteredGrievances = grievances.filter(grievance => {
    const matchesSearch = grievance.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         grievance.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         grievance.student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || grievance.type === filterType;
    const matchesStatus = filterStatus === 'all' || grievance.status === filterStatus;
    const matchesSeverity = filterSeverity === 'all' || grievance.severity === filterSeverity;
    return matchesSearch && matchesType && matchesStatus && matchesSeverity;
  });

  return (
    <div className="space-y-8">
      {/* Hero Section with 3D Elements */}
      <div className="relative bg-gradient-to-br from-purple-900 via-red-900 to-pink-900 rounded-3xl p-8 text-white overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-red-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-pink-400 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-300 rounded-full blur-lg animate-pulse delay-1500"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Grievance Resolution Center
              </h1>
              <p className="text-purple-100 text-lg">Confidential and comprehensive grievance management system</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">{grievanceStats.critical}</div>
                <div className="text-purple-200 text-sm">Critical Cases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{grievanceStats.satisfactionRate}</div>
                <div className="text-purple-200 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Real-time Grievance Status */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Open Cases</p>
                  <p className="text-2xl font-bold text-white">{grievanceStats.open}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Investigating</p>
                  <p className="text-2xl font-bold text-yellow-400">{grievanceStats.investigating}</p>
                </div>
                <Search className="h-8 w-8 text-yellow-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Avg Resolution</p>
                  <p className="text-2xl font-bold text-green-400">{grievanceStats.avgResolutionTime}d</p>
                </div>
                <Clock className="h-8 w-8 text-green-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Resolved</p>
                  <p className="text-2xl font-bold text-cyan-400">{grievanceStats.resolved}</p>
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
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4" />
                <span>Active Cases ({grievanceStats.open + grievanceStats.investigating})</span>
              </div>
            </button>
            <button
              onClick={() => setViewMode('resolved')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                viewMode === 'resolved'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Resolved Cases</span>
              </div>
            </button>
            <button
              onClick={() => setViewMode('analytics')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                viewMode === 'analytics'
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
          {/* Active Cases Tab */}
          {viewMode === 'active' && (
            <div className="space-y-6">
              {/* Filters */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search grievances..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full sm:w-80 pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="all">All Types</option>
                    <option value="supervision">Supervision</option>
                    <option value="misconduct">Misconduct</option>
                    <option value="discrimination">Discrimination</option>
                    <option value="academic">Academic</option>
                    <option value="harassment">Harassment</option>
                    <option value="other">Other</option>
                  </select>

                  <select
                    value={filterSeverity}
                    onChange={(e) => setFilterSeverity(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="all">All Severities</option>
                    <option value="critical">Critical</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>

                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    <Download className="h-4 w-4" />
                    <span>Export</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </button>
                </div>
              </div>

              {/* Grievances List */}
              <div className="space-y-6">
                {filteredGrievances.filter(g => g.status !== 'resolved').map((grievance) => (
                  <div 
                    key={grievance.id} 
                    className={`p-6 rounded-2xl border-l-4 transition-all duration-300 hover:shadow-xl ${getSeverityColor(grievance.severity)}`}
                    style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`p-3 rounded-xl ${getSeverityColor(grievance.severity).split(' ')[1]} ${getSeverityColor(grievance.severity).split(' ')[2]}`}>
                            {getTypeIcon(grievance.type)}
                          </div>
                          <div>
                            <div className="flex items-center space-x-3">
                              <h3 className="text-xl font-semibold text-gray-900">{grievance.subject}</h3>
                              {grievance.isConfidential && (
                                <div className="flex items-center space-x-1 text-red-600">
                                  <Lock className="h-4 w-4" />
                                  <span className="text-xs font-medium">CONFIDENTIAL</span>
                                </div>
                              )}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                              <span className="font-medium">{grievance.id}</span>
                              <span>{new Date(grievance.submittedDate).toLocaleDateString()}</span>
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(grievance.status)}`}>
                                {grievance.status}
                              </span>
                              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                Priority {grievance.priority}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-4 leading-relaxed">{grievance.description}</p>
                        
                        {/* Student and Supervisor Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                          <div className="bg-white p-4 rounded-xl border border-gray-200">
                            <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                              <User className="h-4 w-4 mr-2" />
                              Student Information
                            </h4>
                            <div className="flex items-center space-x-3">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={grievance.student.avatar}
                                alt={grievance.student.name}
                              />
                              <div>
                                <div className="font-medium text-gray-900">{grievance.student.name}</div>
                                <div className="text-sm text-gray-600">{grievance.student.program}</div>
                                <div className="text-sm text-gray-500">{grievance.student.email}</div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-xl border border-gray-200">
                            <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                              <UserCheck className="h-4 w-4 mr-2" />
                              Supervisor Information
                            </h4>
                            <div>
                              <div className="font-medium text-gray-900">{grievance.supervisor.name}</div>
                              <div className="text-sm text-gray-600">{grievance.supervisor.department}</div>
                              <div className="text-sm text-gray-500">{grievance.supervisor.email}</div>
                            </div>
                          </div>
                        </div>

                        {/* Case Details */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="bg-gray-50 p-3 rounded-xl">
                            <div className="text-sm text-gray-600">Assigned To</div>
                            <div className="font-medium text-gray-900">{grievance.assignedTo.name}</div>
                            <div className="text-sm text-gray-500">{grievance.assignedTo.role}</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-xl">
                            <div className="text-sm text-gray-600">Escalation Level</div>
                            <div className="font-medium text-gray-900">Level {grievance.escalationLevel}</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-xl">
                            <div className="text-sm text-gray-600">Last Update</div>
                            <div className="font-medium text-gray-900">{new Date(grievance.lastUpdate).toLocaleDateString()}</div>
                          </div>
                        </div>

                        {/* Evidence */}
                        {grievance.evidence.length > 0 && (
                          <div className="mb-4">
                            <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                              <FileText className="h-4 w-4 mr-2" />
                              Evidence ({grievance.evidence.length} files)
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {grievance.evidence.map((evidence, idx) => (
                                <div key={idx} className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm">
                                  <FileText className="h-3 w-3" />
                                  <span>{evidence.name}</span>
                                  <span className="text-blue-500">({evidence.size})</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Related Policies */}
                        <div className="mb-4">
                          <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                            <Scale className="h-4 w-4 mr-2" />
                            Related Policies
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {grievance.relatedPolicies.map((policy, idx) => (
                              <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                                {policy}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center space-y-2">
                        <button 
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          onClick={() => setSelectedGrievance(selectedGrievance === grievance.id ? null : grievance.id)}
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                        <button 
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          onClick={() => setShowResponseForm(grievance.id)}
                        >
                          <MessageSquare className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                          <Edit className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    {/* Expanded Timeline */}
                    {selectedGrievance === grievance.id && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h5 className="font-medium text-gray-900 mb-4 flex items-center">
                          <Activity className="h-4 w-4 mr-2" />
                          Case Timeline
                        </h5>
                        <div className="space-y-3">
                          {grievance.timeline.map((event, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <div className="p-1 rounded-full bg-gray-100">
                                {getTimelineIcon(event.type)}
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="font-medium text-gray-900">{event.action}</div>
                                    <div className="text-sm text-gray-600">by {event.user}</div>
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {new Date(event.date).toLocaleString()}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Response Form */}
                    {showResponseForm === grievance.id && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h5 className="font-medium text-gray-900 mb-4">Add Response/Update</h5>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Response Type</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                              <option value="update">Status Update</option>
                              <option value="request">Information Request</option>
                              <option value="resolution">Resolution</option>
                              <option value="escalation">Escalation</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea
                              rows={4}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="Enter your response or update..."
                            />
                          </div>
                          <div className="flex justify-end space-x-3">
                            <button
                              onClick={() => setShowResponseForm(null)}
                              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                            >
                              Cancel
                            </button>
                            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center space-x-2">
                              <Send className="h-4 w-4" />
                              <span>Send Response</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resolved Cases Tab */}
          {viewMode === 'resolved' && (
            <div className="space-y-4">
              {filteredGrievances.filter(g => g.status === 'resolved').map((grievance) => (
                <div key={grievance.id} className="p-6 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                        <h4 className="font-semibold text-gray-900">{grievance.subject}</h4>
                        <span className="text-sm text-gray-500">{grievance.id}</span>
                      </div>
                      <p className="text-gray-700 mb-3">{grievance.description}</p>
                      {grievance.resolution && (
                        <div className="bg-white p-4 rounded-lg border border-green-200">
                          <h5 className="font-medium text-gray-900 mb-2">Resolution</h5>
                          <p className="text-gray-700 mb-2">{grievance.resolution.outcome}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>Resolved: {new Date(grievance.resolution.date).toLocaleDateString()}</span>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <span>Satisfaction: {grievance.resolution.satisfactionRating}/5</span>
                            </div>
                          </div>
                        </div>
                      )}
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
                {/* Monthly Trends */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Monthly Grievance Trends</h3>
                  </div>
                  <div className="p-6">
                    <div className="h-64 flex items-end justify-between space-x-2">
                      {monthlyTrends.map((data, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div className="w-full space-y-1">
                            <div 
                              className="w-full bg-red-600 rounded-t-sm"
                              style={{ height: `${(data.submitted / 8) * 120}px` }}
                              title={`Submitted: ${data.submitted}`}
                            ></div>
                            <div 
                              className="w-full bg-green-600"
                              style={{ height: `${(data.resolved / 8) * 120}px` }}
                              title={`Resolved: ${data.resolved}`}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-600 mt-2">{data.month}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-center space-x-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-600 rounded"></div>
                        <span>Submitted</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-600 rounded"></div>
                        <span>Resolved</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Type Distribution */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Grievance Type Distribution</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {typeDistribution.map((type, index) => (
                        <div key={type.type} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            {getTypeIcon(type.type)}
                            <span className="text-sm text-gray-700 capitalize">{type.type}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div 
                                className={`rounded-full h-2 ${
                                  index === 0 ? 'bg-purple-500' :
                                  index === 1 ? 'bg-red-500' :
                                  index === 2 ? 'bg-orange-500' :
                                  index === 3 ? 'bg-blue-500' : 'bg-gray-500'
                                }`}
                                style={{ width: `${type.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-gray-900 w-8">{type.count}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Performance Metrics</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                      <div className="text-3xl font-bold text-purple-600 mb-2">{grievanceStats.avgResolutionTime}d</div>
                      <div className="text-sm text-purple-800">Avg Resolution Time</div>
                      <div className="text-xs text-purple-600 mt-1">Target: 14 days</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                      <div className="text-3xl font-bold text-green-600 mb-2">{grievanceStats.satisfactionRate}</div>
                      <div className="text-sm text-green-800">Satisfaction Rate</div>
                      <div className="text-xs text-green-600 mt-1">Out of 5.0</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                      <div className="text-3xl font-bold text-blue-600 mb-2">87%</div>
                      <div className="text-sm text-blue-800">Resolution Rate</div>
                      <div className="text-xs text-blue-600 mt-1">Within target time</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                      <div className="text-3xl font-bold text-orange-600 mb-2">{grievanceStats.escalatedCases}</div>
                      <div className="text-sm text-orange-800">Escalated Cases</div>
                      <div className="text-xs text-orange-600 mt-1">Requiring senior review</div>
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