import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Bell, 
  User, 
  Settings, 
  LogOut, 
  ChevronDown,
  BookOpen,
  MessageSquare,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const { user, logout, switchRole } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);


  const handleRoleSwitch = (role: 'student' | 'supervisor' | 'admin') => {
    switchRole(role);
    setShowUserMenu(false);
  };

  const notifications = [
    { id: '1', type: 'overdue', message: 'Thesis proposal deadline approaching', time: '2 hours ago', severity: 'warning' },
    { id: '2', type: 'message', message: 'New feedback from Dr. Chen', time: '4 hours ago', severity: 'info' },
    { id: '3', type: 'alert', message: 'Meeting summary requires acknowledgment', time: '1 day ago', severity: 'warning' }
  ];

  const unauthenticatedLinks = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Features', href: '/features' },
    { label: 'Documentation', href: '/docs' }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">GTMOS</span>
            </div>
            <div className="hidden md:flex md:space-x-8">
              {unauthenticatedLinks.map(link => (
                <a key={link.label} href={link.href} className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            {
              user && (
                <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative"
              >
                <Bell className="h-6 w-6" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                        <div className="flex items-start space-x-3">
                          <div className={`p-1 rounded-full ${
                            notification.severity === 'warning' ? 'bg-yellow-100' :
                            notification.severity === 'error' ? 'bg-red-100' : 'bg-blue-100'
                          }`}>
                            {notification.type === 'message' ? (
                              <MessageSquare className="h-4 w-4 text-blue-600" />
                            ) : (
                              <AlertTriangle className={`h-4 w-4 ${
                                notification.severity === 'warning' ? 'text-yellow-600' : 'text-red-600'
                              }`} />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-900">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-2 border-t border-gray-200">
                    <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 py-2">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
              )
            }

            {
              user && (
                <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src={user?.avatar || `https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2`}
                  alt={user?.name || 'User'}
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>

                  <div className="py-2">
                    <div className="px-4 py-2">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Switch Role (Demo)</p>
                    </div>
                    <button
                      onClick={() => handleRoleSwitch('student')}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${user?.role === 'student' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                    >
                      Student View
                    </button>
                    <button
                      onClick={() => handleRoleSwitch('supervisor')}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${user?.role === 'supervisor' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                    >
                      Supervisor View
                    </button>
                    <button
                      onClick={() => handleRoleSwitch('admin')}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${user?.role === 'admin' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                    >
                      Administrator View
                    </button>
                  </div>

                  <div className="border-t border-gray-200 py-2">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </button>
                    <button 
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
              )
            }
            

            {
              !user && (
                <div className="w-fit flex justify-center items-center">
                  {[
                    { label: 'Login', href: '/login' }
                  ].map((link) => (
                    <Link
                      to = "/login"
                      key={link.label}
                      className="px-4 font-medium py-1 flex items-center justify-center rounded-[5px] text-white text-center text-sm bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
                    >
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              )
            }
          </div>
        </div>
      </div>
    </nav>
  );
}