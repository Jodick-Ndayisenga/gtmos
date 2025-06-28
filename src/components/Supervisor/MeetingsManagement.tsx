import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Video, 
  MapPin,
  Plus,
  CheckCircle,
  AlertTriangle,
  MessageSquare,
  User,
  FileText,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
  Edit,
  Trash2,
  Send
} from 'lucide-react';

export function MeetingsManagement() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');
  const [selectedMeeting, setSelectedMeeting] = useState<string | null>(null);
  const [showScheduleForm, setShowScheduleForm] = useState(false);

  const meetings = [
    {
      id: '1',
      studentName: 'Sarah Johnson',
      studentAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      title: 'Weekly Progress Review',
      type: 'supervision',
      date: '2024-01-15',
      time: '14:00',
      duration: 60,
      location: 'Office 204B',
      mode: 'in-person',
      status: 'scheduled',
      agenda: [
        'Review literature review progress',
        'Discuss data collection methodology',
        'Plan next steps for research'
      ],
      summary: null,
      actionItems: [],
      recurring: 'weekly'
    },
    {
      id: '2',
      studentName: 'David Kim',
      studentAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      title: 'Methodology Discussion',
      type: 'supervision',
      date: '2024-01-08',
      time: '15:30',
      duration: 90,
      location: 'Zoom Meeting',
      mode: 'virtual',
      status: 'completed',
      agenda: [
        'Review proposed methodology',
        'Discuss data analysis approach',
        'Address committee feedback'
      ],
      summary: 'Discussed the proposed methodology for data collection and analysis. David needs to revise the statistical approach based on committee feedback.',
      actionItems: [
        { task: 'Revise methodology section', assignee: 'David Kim', dueDate: '2024-01-15', completed: false },
        { task: 'Research additional statistical methods', assignee: 'David Kim', dueDate: '2024-01-12', completed: true },
        { task: 'Schedule committee meeting', assignee: 'Dr. Chen', dueDate: '2024-01-20', completed: false }
      ],
      acknowledgedByStudent: true,
      acknowledgedBySupervisor: true,
      recurring: null
    },
    {
      id: '3',
      studentName: 'Emily Rodriguez',
      studentAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      title: 'Committee Meeting Preparation',
      type: 'committee-prep',
      date: '2024-01-22',
      time: '10:00',
      duration: 120,
      location: 'Conference Room A',
      mode: 'in-person',
      status: 'scheduled',
      agenda: [
        'Review presentation slides',
        'Practice defense presentation',
        'Prepare for committee questions'
      ],
      summary: null,
      actionItems: [],
      recurring: null
    },
    {
      id: '4',
      studentName: 'Michael Thompson',
      studentAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      title: 'Catch-up Meeting',
      type: 'supervision',
      date: '2024-01-18',
      time: '11:00',
      duration: 45,
      location: 'Office 204B',
      mode: 'in-person',
      status: 'scheduled',
      agenda: [
        'Discuss recent progress',
        'Address any challenges',
        'Set new deadlines'
      ],
      summary: null,
      actionItems: [],
      recurring: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50 border-green-200';
      case 'scheduled': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'cancelled': return 'text-red-600 bg-red-50 border-red-200';
      case 'rescheduled': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'supervision': return 'bg-blue-100 text-blue-800';
      case 'committee-prep': return 'bg-purple-100 text-purple-800';
      case 'committee': return 'bg-red-100 text-red-800';
      case 'administrative': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getModeIcon = (mode: string) => {
    return mode === 'virtual' ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />;
  };

  // Calendar generation
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const currentDay = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      const dayMeetings = meetings.filter(meeting => 
        new Date(meeting.date).toDateString() === currentDay.toDateString()
      );
      
      days.push({
        date: new Date(currentDay),
        isCurrentMonth: currentDay.getMonth() === month,
        isToday: currentDay.toDateString() === new Date().toDateString(),
        meetings: dayMeetings
      });
      
      currentDay.setDate(currentDay.getDate() + 1);
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const navigateMonth = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const upcomingMeetings = meetings
    .filter(m => new Date(m.date) >= new Date() && m.status === 'scheduled')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const meetingStats = {
    total: meetings.length,
    thisWeek: meetings.filter(m => {
      const meetingDate = new Date(m.date);
      const today = new Date();
      const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
      return meetingDate >= today && meetingDate <= weekFromNow;
    }).length,
    completed: meetings.filter(m => m.status === 'completed').length,
    avgDuration: Math.round(meetings.reduce((acc, m) => acc + m.duration, 0) / meetings.length)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Meeting Management</h1>
            <p className="text-green-100 mt-1">Schedule and manage supervision meetings</p>
          </div>
          <button 
            onClick={() => setShowScheduleForm(true)}
            className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Schedule Meeting</span>
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">This Week</p>
              <p className="text-2xl font-semibold text-green-600">{meetingStats.thisWeek}</p>
            </div>
            <Calendar className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-semibold text-blue-600">{meetingStats.completed}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Meetings</p>
              <p className="text-2xl font-semibold text-purple-600">{meetingStats.total}</p>
            </div>
            <MessageSquare className="h-8 w-8 text-purple-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Duration</p>
              <p className="text-2xl font-semibold text-orange-600">{meetingStats.avgDuration}m</p>
            </div>
            <Clock className="h-8 w-8 text-orange-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar/List View */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Meeting Calendar</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('calendar')}
                  className={`px-3 py-1 rounded text-sm ${
                    viewMode === 'calendar' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Calendar
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1 rounded text-sm ${
                    viewMode === 'list' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {viewMode === 'calendar' ? (
            <div className="p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-medium text-gray-900">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h4>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => navigateMonth(-1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <button
                    onClick={() => navigateMonth(1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`min-h-[80px] p-1 border border-gray-100 ${
                      day.isCurrentMonth ? 'bg-white' : 'bg-gray-50'
                    } ${day.isToday ? 'bg-green-50 border-green-200' : ''}`}
                  >
                    <div className={`text-sm ${
                      day.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                    } ${day.isToday ? 'font-bold text-green-600' : ''}`}>
                      {day.date.getDate()}
                    </div>
                    <div className="space-y-1 mt-1">
                      {day.meetings.map(meeting => (
                        <div
                          key={meeting.id}
                          className={`text-xs p-1 rounded cursor-pointer ${getTypeColor(meeting.type)}`}
                          onClick={() => setSelectedMeeting(meeting.id)}
                        >
                          {meeting.time} {meeting.studentName}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {meetings.map(meeting => (
                <div key={meeting.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={meeting.studentAvatar}
                        alt={meeting.studentName}
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{meeting.title}</h4>
                        <p className="text-sm text-gray-600">{meeting.studentName}</p>
                        <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                          <span>{new Date(meeting.date).toLocaleDateString()}</span>
                          <span>{meeting.time}</span>
                          <span>{meeting.duration} min</span>
                          <span className="flex items-center space-x-1">
                            {getModeIcon(meeting.mode)}
                            <span>{meeting.location}</span>
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(meeting.type)}`}>
                            {meeting.type}
                          </span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(meeting.status)}`}>
                            {meeting.status}
                          </span>
                          {meeting.recurring && (
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                              {meeting.recurring}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Meeting Summary for Completed Meetings */}
                  {meeting.status === 'completed' && meeting.summary && (
                    <div className="mt-4 p-3 bg-gray-50 rounded">
                      <h5 className="font-medium text-gray-900 mb-2">Meeting Summary</h5>
                      <p className="text-sm text-gray-700 mb-3">{meeting.summary}</p>
                      
                      {meeting.actionItems.length > 0 && (
                        <div>
                          <h6 className="font-medium text-gray-900 mb-2">Action Items</h6>
                          <div className="space-y-1">
                            {meeting.actionItems.map((item, idx) => (
                              <div key={idx} className="flex items-center justify-between text-sm">
                                <div className="flex items-center space-x-2">
                                  <CheckCircle className={`h-3 w-3 ${
                                    item.completed ? 'text-green-600' : 'text-gray-400'
                                  }`} />
                                  <span className={item.completed ? 'line-through text-gray-500' : 'text-gray-700'}>
                                    {item.task}
                                  </span>
                                </div>
                                <span className="text-xs text-gray-500">
                                  Due: {new Date(item.dueDate).toLocaleDateString()}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Upcoming Meetings Sidebar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Meetings</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingMeetings.slice(0, 4).map(meeting => (
                <div key={meeting.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <img
                      className="h-6 w-6 rounded-full object-cover"
                      src={meeting.studentAvatar}
                      alt={meeting.studentName}
                    />
                    <h4 className="font-medium text-gray-900 text-sm">{meeting.studentName}</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{meeting.title}</p>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(meeting.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{meeting.time} ({meeting.duration} min)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {getModeIcon(meeting.mode)}
                      <span>{meeting.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Meeting Modal */}
      {showScheduleForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Schedule New Meeting</h3>
              <button
                onClick={() => setShowScheduleForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="">Select student...</option>
                    <option value="sarah">Sarah Johnson</option>
                    <option value="david">David Kim</option>
                    <option value="emily">Emily Rodriguez</option>
                    <option value="michael">Michael Thompson</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Meeting Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="supervision">Regular Supervision</option>
                    <option value="committee-prep">Committee Preparation</option>
                    <option value="committee">Committee Meeting</option>
                    <option value="administrative">Administrative</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <input
                    type="time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration (minutes)</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="90">1.5 hours</option>
                    <option value="120">2 hours</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mode</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="in-person">In-Person</option>
                    <option value="virtual">Virtual (Zoom)</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  placeholder="Office 204B or Zoom link"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Agenda</label>
                <textarea
                  rows={4}
                  placeholder="Meeting agenda items..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="recurring"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="recurring" className="text-sm text-gray-700">
                  Make this a recurring meeting
                </label>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowScheduleForm(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Schedule Meeting</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}