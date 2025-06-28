import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Home, 
  FileText, 
  MessageSquare, 
  Calendar, 
  Users, 
  BarChart3, 
  AlertTriangle, 
  Settings,
  BookOpen,
  GraduationCap,
  ClipboardList,
  UserCheck,
  TrendingUp,
  Shield,
  HelpCircle,
  Target,
  Upload,
  Star,
  Clock,
  Award,
  Activity,
  Database,
  PieChart
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const { user } = useAuth();

  const getNavigationItems = () => {
    const commonItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'communications', label: 'Communications', icon: MessageSquare },
    ];

    switch (user?.role) {
      case 'student':
        return [
          ...commonItems,
          { id: 'thesis', label: 'My Thesis', icon: BookOpen },
          { id: 'milestones', label: 'Milestones', icon: Target },
          { id: 'documents', label: 'Documents', icon: FileText },
          { id: 'meetings', label: 'Meetings', icon: Calendar },
          { id: 'support', label: 'Support & Grievance', icon: HelpCircle },
        ];
      case 'supervisor':
        return [
          ...commonItems,
          { id: 'students', label: 'My Students', icon: GraduationCap },
          { id: 'reviews', label: 'Reviews & Feedback', icon: Star },
          { id: 'meetings', label: 'Meeting Management', icon: Calendar },
          { id: 'workload', label: 'Workload Analytics', icon: BarChart3 },
        ];
      case 'admin':
        return [
          ...commonItems,
          { id: 'oversight', label: 'System Oversight', icon: Shield },
          { id: 'analytics', label: 'Analytics', icon: PieChart },
          { id: 'users', label: 'User Management', icon: Users },
          { id: 'supervisors', label: 'Supervisor Management', icon: UserCheck },
          { id: 'alerts', label: 'System Alerts', icon: AlertTriangle },
          { id: 'grievances', label: 'Grievances', icon: HelpCircle },
          { id: 'reports', label: 'Reports', icon: FileText },
          { id: 'settings', label: 'Settings', icon: Settings },
        ];
      default:
        return commonItems;
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 h-full">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 capitalize">
          {user?.role} Portal
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          {user?.department}
        </p>
      </div>

      <nav className="mt-6 px-3">
        <div className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">System Status: Online</span>
        </div>
      </div>
    </div>
  );
}