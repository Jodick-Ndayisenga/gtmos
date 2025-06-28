export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'supervisor' | 'admin';
  avatar?: string;
  department?: string;
}

export interface Student extends User {
  role: 'student';
  studentId: string;
  program: string;
  yearOfStudy: number;
  supervisorId?: string;
  thesisTitle?: string;
  enrollmentDate: string;
}

export interface Supervisor extends User {
  role: 'supervisor';
  staffId: string;
  researchAreas: string[];
  maxStudents: number;
  currentStudents: number;
  avgFeedbackTime: number; // in days
  completionRate: number; // percentage
}

export interface Administrator extends User {
  role: 'admin';
  permissions: string[];
}

export interface ThesisProject {
  id: string;
  studentId: string;
  supervisorId?: string;
  title: string;
  description: string;
  status: 'proposal' | 'research' | 'writing' | 'review' | 'defense' | 'completed';
  currentMilestone: string;
  progress: number;
  createdAt: string;
  updatedAt: string;
  dueDate: string;
  isOverdue: boolean;
}

export interface Milestone {
  id: string;
  thesisId: string;
  name: string;
  description: string;
  dueDate: string;
  completedDate?: string;
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
  documents: Document[];
  feedback?: Feedback[];
}

export interface Document {
  id: string;
  name: string;
  version: number;
  uploadedBy: string;
  uploadedAt: string;
  fileUrl: string;
  status: 'draft' | 'under-review' | 'approved' | 'needs-revision';
  size: string;
}

export interface Communication {
  id: string;
  thesisId: string;
  fromUserId: string;
  toUserId: string;
  subject: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'message' | 'meeting-summary' | 'feedback' | 'system-alert';
  attachments?: Document[];
}

export interface MeetingSummary {
  id: string;
  thesisId: string;
  studentId: string;
  supervisorId: string;
  date: string;
  duration: number;
  agenda: string;
  discussionPoints: string[];
  actionItems: ActionItem[];
  nextMeetingDate?: string;
  acknowledgedByStudent: boolean;
  acknowledgedBySupervisor: boolean;
}

export interface ActionItem {
  id: string;
  description: string;
  assignedTo: string;
  dueDate: string;
  completed: boolean;
  completedDate?: string;
}

export interface Feedback {
  id: string;
  documentId: string;
  supervisorId: string;
  overallRating: number;
  categories: FeedbackCategory[];
  generalComments: string;
  providedAt: string;
  acknowledged: boolean;
}

export interface FeedbackCategory {
  name: string;
  rating: number;
  comments: string;
}

export interface Grievance {
  id: string;
  studentId: string;
  type: 'supervision' | 'misconduct' | 'discrimination' | 'other';
  subject: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'investigating' | 'resolved' | 'closed';
  submittedAt: string;
  assignedTo?: string;
  lastUpdated: string;
  isConfidential: boolean;
}

export interface Alert {
  id: string;
  type: 'overdue-milestone' | 'no-communication' | 'grievance' | 'supervisor-overload' | 'feedback-delay';
  severity: 'info' | 'warning' | 'error' | 'critical';
  title: string;
  description: string;
  targetId: string; // thesis, student, or supervisor ID
  createdAt: string;
  acknowledged: boolean;
  acknowledgedBy?: string;
  acknowledgedAt?: string;
}