import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  Shield, 
  Users, 
  Bell,
  Database,
  Globe,
  Lock,
  Key,
  Mail,
  Smartphone,
  Monitor,
  Palette,
  Clock,
  FileText,
  Download,
  Upload,
  RefreshCw,
  Save,
  Eye,
  EyeOff,
  Check,
  X,
  AlertTriangle,
  Info,
  Zap,
  Activity,
  Server,
  HardDrive,
  Wifi,
  Cpu,
  BarChart3,
  Target,
  Award,
  MessageSquare,
  Calendar,
  Search,
  Filter,
  Edit,
  Trash2,
  Plus,
  Copy,
  ExternalLink,
  Layers,
  Code,
  Terminal,
  GitBranch,
  Package,
  Sliders,
  ToggleLeft,
  ToggleRight,
  CheckCircle
} from 'lucide-react';

export function Settings() {
  const [activeSection, setActiveSection] = useState('general');
  const [showPassword, setShowPassword] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const settingsSections = [
    { id: 'general', name: 'General Settings', icon: SettingsIcon, description: 'Basic system configuration' },
    { id: 'security', name: 'Security & Authentication', icon: Shield, description: 'Security policies and authentication' },
    { id: 'users', name: 'User Management', icon: Users, description: 'User roles and permissions' },
    { id: 'notifications', name: 'Notifications', icon: Bell, description: 'Email and system notifications' },
    { id: 'database', name: 'Database & Storage', icon: Database, description: 'Database configuration and backups' },
    { id: 'integration', name: 'Integrations & APIs', icon: Globe, description: 'External integrations and API settings' },
    { id: 'appearance', name: 'Appearance & Branding', icon: Palette, description: 'UI customization and branding' },
    { id: 'system', name: 'System Performance', icon: Activity, description: 'Performance monitoring and optimization' },
    { id: 'backup', name: 'Backup & Recovery', icon: HardDrive, description: 'Data backup and disaster recovery' },
    { id: 'advanced', name: 'Advanced Configuration', icon: Terminal, description: 'Advanced system settings' }
  ];

  const systemStats = {
    uptime: '99.7%',
    totalUsers: 1247,
    activeUsers: 156,
    storageUsed: '2.4 TB',
    apiCalls: '1.2M',
    lastBackup: '2024-01-13 02:00',
    systemLoad: 68,
    memoryUsage: 72,
    diskUsage: 45
  };

  const renderGeneralSettings = () => (
    <div className="space-y-8">
      {/* System Information */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Info className="h-5 w-5 text-blue-600 mr-2" />
          System Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-sm text-gray-600">System Version</div>
            <div className="text-lg font-semibold text-gray-900">GTMOS v2.4.1</div>
            <div className="text-xs text-gray-500">Released: Jan 2024</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-sm text-gray-600">Environment</div>
            <div className="text-lg font-semibold text-green-600">Production</div>
            <div className="text-xs text-gray-500">Uptime: {systemStats.uptime}</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-sm text-gray-600">License</div>
            <div className="text-lg font-semibold text-gray-900">Enterprise</div>
            <div className="text-xs text-gray-500">Expires: Dec 2024</div>
          </div>
        </div>
      </div>

      {/* Basic Configuration */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Basic Configuration</h3>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">System Name</label>
              <input
                type="text"
                defaultValue="Graduate Thesis Management & Oversight System"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Institution Name</label>
              <input
                type="text"
                defaultValue="University of Excellence"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Default Language</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="en">English</option>
                <option value="af">Afrikaans</option>
                <option value="zu">Zulu</option>
                <option value="xh">Xhosa</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="Africa/Johannesburg">Africa/Johannesburg (SAST)</option>
                <option value="Africa/Cape_Town">Africa/Cape_Town (SAST)</option>
                <option value="UTC">UTC</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">System Description</label>
            <textarea
              rows={3}
              defaultValue="Comprehensive thesis management and oversight system for graduate students and supervisors."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
              <input
                type="email"
                defaultValue="admin@university.edu"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Support Phone</label>
              <input
                type="tel"
                defaultValue="+27 11 123 4567"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Toggles */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Feature Configuration</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Student Self-Registration', description: 'Allow students to register themselves', enabled: true },
              { name: 'Email Notifications', description: 'Send email notifications for important events', enabled: true },
              { name: 'Mobile App Access', description: 'Enable mobile application access', enabled: false },
              { name: 'Anonymous Feedback', description: 'Allow anonymous feedback submission', enabled: true },
              { name: 'Auto-Backup', description: 'Automatic daily system backups', enabled: true },
              { name: 'Advanced Analytics', description: 'Enable advanced reporting and analytics', enabled: true }
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <div className="font-medium text-gray-900">{feature.name}</div>
                  <div className="text-sm text-gray-600">{feature.description}</div>
                </div>
                <button className={`p-1 rounded-full transition-colors ${feature.enabled ? 'bg-green-500' : 'bg-gray-300'}`}>
                  {feature.enabled ? (
                    <ToggleRight className="h-6 w-6 text-white" />
                  ) : (
                    <ToggleLeft className="h-6 w-6 text-gray-600" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-8">
      {/* Security Overview */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Shield className="h-5 w-5 text-red-600 mr-2" />
          Security Status
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="font-medium text-gray-900">SSL Certificate</span>
            </div>
            <div className="text-sm text-gray-600">Valid until Dec 2024</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="font-medium text-gray-900">2FA Enabled</span>
            </div>
            <div className="text-sm text-gray-600">87% user adoption</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <span className="font-medium text-gray-900">Password Policy</span>
            </div>
            <div className="text-sm text-gray-600">Medium strength</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="font-medium text-gray-900">Audit Logging</span>
            </div>
            <div className="text-sm text-gray-600">All events logged</div>
          </div>
        </div>
      </div>

      {/* Authentication Settings */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Authentication Settings</h3>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
              <input
                type="number"
                defaultValue="60"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Max Login Attempts</label>
              <input
                type="number"
                defaultValue="5"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Account Lockout Duration (minutes)</label>
              <input
                type="number"
                defaultValue="30"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password Expiry (days)</label>
              <input
                type="number"
                defaultValue="90"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">Password Requirements</label>
            <div className="space-y-3">
              {[
                { name: 'Minimum 8 characters', enabled: true },
                { name: 'Require uppercase letters', enabled: true },
                { name: 'Require lowercase letters', enabled: true },
                { name: 'Require numbers', enabled: true },
                { name: 'Require special characters', enabled: false },
                { name: 'Prevent password reuse (last 5)', enabled: true }
              ].map((requirement, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{requirement.name}</span>
                  <button className={`p-1 rounded-full transition-colors ${requirement.enabled ? 'bg-green-500' : 'bg-gray-300'}`}>
                    {requirement.enabled ? (
                      <Check className="h-4 w-4 text-white" />
                    ) : (
                      <X className="h-4 w-4 text-gray-600" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Two-Factor Authentication</h3>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'SMS Authentication', description: 'Send codes via SMS', enabled: true, users: 234 },
              { name: 'Email Authentication', description: 'Send codes via email', enabled: true, users: 456 },
              { name: 'Authenticator Apps', description: 'Google Authenticator, Authy', enabled: true, users: 123 },
              { name: 'Hardware Tokens', description: 'YubiKey and similar devices', enabled: false, users: 0 }
            ].map((method, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-gray-900">{method.name}</div>
                  <button className={`p-1 rounded-full transition-colors ${method.enabled ? 'bg-green-500' : 'bg-gray-300'}`}>
                    {method.enabled ? (
                      <Check className="h-4 w-4 text-white" />
                    ) : (
                      <X className="h-4 w-4 text-gray-600" />
                    )}
                  </button>
                </div>
                <div className="text-sm text-gray-600 mb-2">{method.description}</div>
                <div className="text-xs text-gray-500">{method.users} users enrolled</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Monitoring */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Security Monitoring</h3>
        </div>
        <div className="p-6 space-y-4">
          {[
            { name: 'Failed Login Monitoring', description: 'Monitor and alert on failed login attempts', enabled: true },
            { name: 'Suspicious Activity Detection', description: 'AI-powered anomaly detection', enabled: true },
            { name: 'IP Whitelist/Blacklist', description: 'Control access by IP address', enabled: false },
            { name: 'Audit Log Retention', description: 'Keep detailed logs for compliance', enabled: true },
            { name: 'Real-time Security Alerts', description: 'Immediate notifications for security events', enabled: true }
          ].map((feature, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <div className="font-medium text-gray-900">{feature.name}</div>
                <div className="text-sm text-gray-600">{feature.description}</div>
              </div>
              <button className={`p-1 rounded-full transition-colors ${feature.enabled ? 'bg-green-500' : 'bg-gray-300'}`}>
                {feature.enabled ? (
                  <Check className="h-4 w-4 text-white" />
                ) : (
                  <X className="h-4 w-4 text-gray-600" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderUserManagement = () => (
    <div className="space-y-8">
      {/* User Statistics */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Users className="h-5 w-5 text-purple-600 mr-2" />
          User Statistics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-purple-600">1,247</div>
            <div className="text-sm text-gray-600">Total Users</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-blue-600">892</div>
            <div className="text-sm text-gray-600">Students</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-green-600">89</div>
            <div className="text-sm text-gray-600">Supervisors</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-orange-600">12</div>
            <div className="text-sm text-gray-600">Administrators</div>
          </div>
        </div>
      </div>

      {/* Role Management */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Role Management</h3>
            <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              <Plus className="h-4 w-4" />
              <span>Create Role</span>
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              {
                name: 'Student',
                description: 'Graduate students working on their thesis',
                users: 892,
                permissions: ['View own thesis', 'Submit documents', 'Communicate with supervisor', 'Access resources']
              },
              {
                name: 'Supervisor',
                description: 'Faculty members supervising graduate students',
                users: 89,
                permissions: ['Manage assigned students', 'Provide feedback', 'Schedule meetings', 'Access analytics']
              },
              {
                name: 'Administrator',
                description: 'System administrators with full access',
                users: 12,
                permissions: ['Full system access', 'User management', 'System configuration', 'Reports']
              },
              {
                name: 'Department Head',
                description: 'Department heads with oversight responsibilities',
                users: 8,
                permissions: ['Department oversight', 'Supervisor management', 'Department reports', 'Resource allocation']
              }
            ].map((role, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-semibold text-gray-900">{role.name}</h4>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 text-xs rounded-full">
                        {role.users} users
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{role.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {role.permissions.map((permission, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">
                          {permission}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      <Edit className="h-4 w-4" />
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
      </div>

      {/* Permission Matrix */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Permission Matrix</h3>
        </div>
        <div className="p-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Permission</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Student</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Supervisor</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Admin</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Dept Head</th>
              </tr>
            </thead>
            <tbody>
              {[
                'View own data',
                'Edit own profile',
                'Submit documents',
                'View all students',
                'Manage users',
                'System configuration',
                'Generate reports',
                'Handle grievances'
              ].map((permission, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-900">{permission}</td>
                  <td className="py-3 px-4 text-center">
                    {index < 3 ? <Check className="h-4 w-4 text-green-600 mx-auto" /> : <X className="h-4 w-4 text-gray-400 mx-auto" />}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {index < 7 ? <Check className="h-4 w-4 text-green-600 mx-auto" /> : <X className="h-4 w-4 text-gray-400 mx-auto" />}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Check className="h-4 w-4 text-green-600 mx-auto" />
                  </td>
                  <td className="py-3 px-4 text-center">
                    {index !== 5 ? <Check className="h-4 w-4 text-green-600 mx-auto" /> : <X className="h-4 w-4 text-gray-400 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-8">
      {/* Email Configuration */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Email Configuration</h3>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Server</label>
              <input
                type="text"
                defaultValue="smtp.university.edu"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Port</label>
              <input
                type="number"
                defaultValue="587"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input
                type="text"
                defaultValue="gtmos@university.edu"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  defaultValue="••••••••"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <span className="text-sm text-gray-700">Use TLS/SSL</span>
            </label>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Mail className="h-4 w-4" />
              <span>Test Connection</span>
            </button>
          </div>
        </div>
      </div>

      {/* Notification Types */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Notification Types</h3>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {[
              {
                category: 'Academic Notifications',
                notifications: [
                  { name: 'Milestone Deadlines', description: 'Notify students of upcoming deadlines', email: true, sms: false, push: true },
                  { name: 'Thesis Submissions', description: 'Notify supervisors of new submissions', email: true, sms: false, push: true },
                  { name: 'Feedback Available', description: 'Notify students when feedback is ready', email: true, sms: true, push: true },
                  { name: 'Meeting Reminders', description: 'Remind participants of scheduled meetings', email: true, sms: true, push: true }
                ]
              },
              {
                category: 'System Notifications',
                notifications: [
                  { name: 'System Maintenance', description: 'Notify users of scheduled maintenance', email: true, sms: false, push: true },
                  { name: 'Security Alerts', description: 'Alert administrators of security issues', email: true, sms: true, push: true },
                  { name: 'Backup Status', description: 'Notify administrators of backup results', email: true, sms: false, push: false },
                  { name: 'Performance Alerts', description: 'Alert when system performance degrades', email: true, sms: true, push: false }
                ]
              },
              {
                category: 'Administrative Notifications',
                notifications: [
                  { name: 'New User Registration', description: 'Notify admins of new user registrations', email: true, sms: false, push: true },
                  { name: 'Grievance Submissions', description: 'Alert relevant staff of new grievances', email: true, sms: true, push: true },
                  { name: 'Report Generation', description: 'Notify when scheduled reports are ready', email: true, sms: false, push: false },
                  { name: 'Policy Updates', description: 'Inform users of policy changes', email: true, sms: false, push: true }
                ]
              }
            ].map((category, categoryIndex) => (
              <div key={categoryIndex} className="border border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">{category.category}</h4>
                <div className="space-y-4">
                  {category.notifications.map((notification, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{notification.name}</div>
                        <div className="text-sm text-gray-600">{notification.description}</div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked={notification.email} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                          <span className="text-sm text-gray-700">Email</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked={notification.sms} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                          <span className="text-sm text-gray-700">SMS</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked={notification.push} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                          <span className="text-sm text-gray-700">Push</span>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSystemPerformance = () => (
    <div className="space-y-8">
      {/* Performance Overview */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Activity className="h-5 w-5 text-green-600 mr-2" />
          System Performance Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">CPU Usage</span>
              <span className="text-lg font-bold text-gray-900">{systemStats.systemLoad}%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 rounded-full h-2" style={{ width: `${systemStats.systemLoad}%` }}></div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Memory Usage</span>
              <span className="text-lg font-bold text-gray-900">{systemStats.memoryUsage}%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 rounded-full h-2" style={{ width: `${systemStats.memoryUsage}%` }}></div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Disk Usage</span>
              <span className="text-lg font-bold text-gray-900">{systemStats.diskUsage}%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 rounded-full h-2" style={{ width: `${systemStats.diskUsage}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Settings */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Performance Configuration</h3>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cache Duration (hours)</label>
              <input
                type="number"
                defaultValue="24"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Max Concurrent Users</label>
              <input
                type="number"
                defaultValue="500"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Database Connection Pool Size</label>
              <input
                type="number"
                defaultValue="20"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">API Rate Limit (requests/minute)</label>
              <input
                type="number"
                defaultValue="1000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-4">
            {[
              { name: 'Enable Caching', description: 'Cache frequently accessed data for better performance', enabled: true },
              { name: 'Compress Responses', description: 'Compress API responses to reduce bandwidth', enabled: true },
              { name: 'Lazy Loading', description: 'Load content only when needed', enabled: true },
              { name: 'CDN Integration', description: 'Use Content Delivery Network for static assets', enabled: false },
              { name: 'Database Query Optimization', description: 'Automatically optimize database queries', enabled: true }
            ].map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <div className="font-medium text-gray-900">{setting.name}</div>
                  <div className="text-sm text-gray-600">{setting.description}</div>
                </div>
                <button className={`p-1 rounded-full transition-colors ${setting.enabled ? 'bg-green-500' : 'bg-gray-300'}`}>
                  {setting.enabled ? (
                    <Check className="h-4 w-4 text-white" />
                  ) : (
                    <X className="h-4 w-4 text-gray-600" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monitoring & Alerts */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Performance Monitoring</h3>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CPU Alert Threshold (%)</label>
              <input
                type="number"
                defaultValue="80"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Memory Alert Threshold (%)</label>
              <input
                type="number"
                defaultValue="85"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Response Time Alert (ms)</label>
              <input
                type="number"
                defaultValue="2000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Error Rate Alert (%)</label>
              <input
                type="number"
                defaultValue="5"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const filteredSections = settingsSections.filter(section =>
    section.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Hero Section with 3D Elements */}
      <div className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 rounded-3xl p-8 text-white overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-purple-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-300 rounded-full blur-lg animate-pulse delay-1500"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-gray-200 to-blue-200 bg-clip-text text-transparent">
                System Administration Center
              </h1>
              <p className="text-gray-300 text-lg">Comprehensive system configuration and management</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{systemStats.uptime}</div>
                <div className="text-gray-300 text-sm">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{systemStats.activeUsers}</div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </div>
            </div>
          </div>

          {/* Quick System Status */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Users</p>
                  <p className="text-2xl font-bold text-white">{systemStats.totalUsers}</p>
                </div>
                <Users className="h-8 w-8 text-blue-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Storage Used</p>
                  <p className="text-2xl font-bold text-purple-400">{systemStats.storageUsed}</p>
                </div>
                <HardDrive className="h-8 w-8 text-purple-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">API Calls</p>
                  <p className="text-2xl font-bold text-cyan-400">{systemStats.apiCalls}</p>
                </div>
                <Globe className="h-8 w-8 text-cyan-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Last Backup</p>
                  <p className="text-lg font-bold text-green-400">Today</p>
                </div>
                <Database className="h-8 w-8 text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Interface */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 flex">
        {/* Settings Navigation */}
        <div className="w-1/3 border-r border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search settings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="p-4 space-y-2 max-h-[600px] overflow-y-auto">
            {filteredSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <section.icon className="h-5 w-5" />
                  <div>
                    <div className="font-medium">{section.name}</div>
                    <div className="text-xs text-gray-500">{section.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {settingsSections.find(s => s.id === activeSection)?.name}
                </h2>
                <p className="text-gray-600 text-sm">
                  {settingsSections.find(s => s.id === activeSection)?.description}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                {unsavedChanges && (
                  <span className="text-sm text-orange-600 flex items-center space-x-1">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Unsaved changes</span>
                  </span>
                )}
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 max-h-[600px] overflow-y-auto">
            {activeSection === 'general' && renderGeneralSettings()}
            {activeSection === 'security' && renderSecuritySettings()}
            {activeSection === 'users' && renderUserManagement()}
            {activeSection === 'notifications' && renderNotificationSettings()}
            {activeSection === 'system' && renderSystemPerformance()}
            
            {/* Placeholder for other sections */}
            {!['general', 'security', 'users', 'notifications', 'system'].includes(activeSection) && (
              <div className="text-center py-12">
                <SettingsIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {settingsSections.find(s => s.id === activeSection)?.name}
                </h3>
                <p className="text-gray-600">
                  Configuration options for this section are coming soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}