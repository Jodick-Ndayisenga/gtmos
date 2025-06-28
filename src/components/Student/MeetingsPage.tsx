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
  Filter
} from 'lucide-react';

export function MeetingsPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');
  const [selectedMeeting, setSelectedMeeting] = useState<string | null>(null);

  const meetings = [
    {
      id: '1',
      title: 'Weekly Progress Review',
      type: 'supervision',
      date: '2024-01-15',
      time: '14:00',
      duration: 60,
      location: 'Office 204B',
      mode: 'in-person',
      status: 'scheduled',
      attendees: ['Dr. Michael Chen', 'Sarah Johnson'],
      agenda: [
        'Review literature review progress',
        'Discuss data collection methodology',
        'Plan next steps for research'
      ],
      summary: null,
      actionItems: []
    },
    {
      id: '2',
      title: 'Methodology Discussion',
      type: 'supervision',
      date: '2024-01-08',
      time: '15:30',
      duration: 90,
      location: 'Zoom Meeting',
      mode: 'virtual',
      status: 'completed',
      attendees: ['Dr. Michael Chen', 'Sarah Johnson'],
      agenda: [
        'Review proposed methodology',
        'Discuss data analysis approach',
        'Address committee feedback'
      ],
      summary: 'Discussed the proposed methodology for data collection and analysis. Dr. Chen provided valuable feedback on the statistical approaches. Agreed to revise the methodology section based on committee suggestions.',
      actionItems: [
        { task: 'Revise methodology section', assignee: 'Sarah Johnson', dueDate: '2024-01-15', completed: true },
        { task: 'Research additional statistical methods', assignee: 'Sarah Johnson', dueDate: '2024-01-12', completed: true },
        { task: 'Schedule committee meeting', assignee: 'Dr. Michael Chen', dueDate: '2024-01-20', completed: false }
      ],
      acknowledgedByStudent: true,
      acknowledgedBySupervisor: true
    },
    {
      id: '3',
      title: 'Committee Meeting',
      type: 'committee',
      date: '2024-01-22',
      time: '10:00',
      duration: 120,
      location: 'Conference Room A',
      mode: 'in-person',
      status: 'scheduled',
      attendees: ['Dr. Michael Chen', 'Dr. Sarah Wilson', 'Dr. James Brown', 'Sarah Johnson'],
      agenda: [
        'Present updated methodology',
        'Discuss preliminary findings',
        'Review timeline for completion'
      ],
      summary: null,
      actionItems: []
    },
    {
      id: '4',
      title: 'Research Ethics Review',
      type: 'administrative',
      date: '2024-01-03',
      time: '11:00',
      duration: 45,
      location: 'Ethics Office',
      mode: 'in-person',
      status: 'completed',
      attendees: ['Dr. Lisa Martinez', 'Sarah Johnson'],
      agenda: [
        'Review ethics application',
        'Discuss data privacy measures',
        'Clarify consent procedures'
      ],
      summary: 'Reviewed the ethics application in detail. Minor revisions needed for data privacy section. Application approved pending revisions.',
      actionItems: [
        { task: 'Revise data privacy section', assignee: 'Sarah Johnson', dueDate: '2024-01-10', completed: true },
        { task: 'Submit revised application', assignee: 'Sarah Johnson', dueDate: '2024-01-12', completed: true }
      ],
      acknowledgedByStudent: true,
      acknowledgedBySupervisor: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50 border-green-200';
      case 'scheduled': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'cancelled': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'supervision': return 'bg-blue-100 text-blue-800';
      case 'committee': return 'bg-purple-100 text-purple-800';
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
    completed: meetings.filter(m => m.status === 'completed').length,
    scheduled: meetings.filter(m => m.status === 'scheduled').length,
    avgDuration: Math.round(meetings.reduce((acc, m) => acc + m.duration, 0) / meetings.length)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Meeting Management</h1>
            <p className="text-indigo-100 mt-1">Schedule and track supervision meetings</p>
          </div>
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 flex items-center space-x-2">
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
              <p className="text-sm text-gray-600">Total Meetings</p>
              <p className="text-2xl font-semibold text-gray-900">{meetingStats.total}</p>
            </div>
            <Calendar className="h-8 w-8 text-gray-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-semibold text-green-600">{meetingStats.completed}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Upcoming</p>
              <p className="text-2xl font-semibold text-blue-600">{meetingStats.scheduled}</p>
            </div>
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Duration</p>
              <p className="text-2xl font-semibold text-purple-600">{meetingStats.avgDuration}m</p>
            </div>
            <Clock className="h-8 w-8 text-purple-600" />
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
                    viewMode === 'calendar' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Calendar
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1 rounded text-sm ${
                    viewMode === 'list' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-gray-900'
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
                    } ${day.isToday ? 'bg-blue-50 border-blue-200' : ''}`}
                  >
                    <div className={`text-sm ${
                      day.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                    } ${day.isToday ? 'font-bold text-blue-600' : ''}`}>
                      {day.date.getDate()}
                    </div>
                    <div className="space-y-1 mt-1">
                      {day.meetings.map(meeting => (
                        <div
                          key={meeting.id}
                          className={`text-xs p-1 rounded cursor-pointer ${getTypeColor(meeting.type)}`}
                          onClick={() => setSelectedMeeting(meeting.id)}
                        >
                          {meeting.time} {meeting.title.substring(0, 15)}...
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
                      <div className="p-2 bg-indigo-50 rounded-lg">
                        <Calendar className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{meeting.title}</h4>
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
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedMeeting(selectedMeeting === meeting.id ? null : meeting.id)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <ChevronRight className={`h-5 w-5 transition-transform ${
                        selectedMeeting === meeting.id ? 'rotate-90' : ''
                      }`} />
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {selectedMeeting === meeting.id && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Agenda</h5>
                          <ul className="space-y-1">
                            {meeting.agenda.map((item, idx) => (
                              <li key={idx} className="text-sm text-gray-700 flex items-start space-x-2">
                                <span className="text-gray-400">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Attendees</h5>
                          <div className="space-y-1">
                            {meeting.attendees.map((attendee, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                                <User className="h-3 w-3 text-gray-400" />
                                <span>{attendee}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {meeting.summary && (
                        <div className="mt-4">
                          <h5 className="font-medium text-gray-900 mb-2">Meeting Summary</h5>
                          <p className="text-sm text-gray-700 bg-white p-3 rounded border">
                            {meeting.summary}
                          </p>
                        </div>
                      )}

                      {meeting.actionItems.length > 0 && (
                        <div className="mt-4">
                          <h5 className="font-medium text-gray-900 mb-2">Action Items</h5>
                          <div className="space-y-2">
                            {meeting.actionItems.map((item, idx) => (
                              <div key={idx} className="flex items-center justify-between p-2 bg-white rounded border">
                                <div className="flex items-center space-x-2">
                                  <CheckCircle className={`h-4 w-4 ${
                                    item.completed ? 'text-green-600' : 'text-gray-400'
                                  }`} />
                                  <span className={`text-sm ${
                                    item.completed ? 'line-through text-gray-500' : 'text-gray-700'
                                  }`}>
                                    {item.task}
                                  </span>
                                </div>
                                <div className="text-xs text-gray-500">
                                  Due: {new Date(item.dueDate).toLocaleDateString()}
                                </div>
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
              {upcomingMeetings.slice(0, 3).map(meeting => (
                <div key={meeting.id} className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 text-sm">{meeting.title}</h4>
                  <div className="mt-1 space-y-1 text-xs text-gray-600">
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
    </div>
  );
}