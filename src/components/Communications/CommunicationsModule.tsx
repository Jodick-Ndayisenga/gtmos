import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  MessageSquare, 
  Send, 
  Paperclip, 
  Search, 
  Filter,
  Calendar,
  CheckCircle,
  Clock,
  AlertTriangle,
  User,
  FileText
} from 'lucide-react';

export function CommunicationsModule() {
  const { user } = useAuth();
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messageText, setMessageText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const conversations = [
    {
      id: '1',
      participant: user?.role === 'student' ? 'Dr. Michael Chen' : 'Sarah Johnson',
      role: user?.role === 'student' ? 'supervisor' : 'student',
      avatar: user?.role === 'student' ? 
        'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2' :
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      lastMessage: 'Thanks for the feedback on Chapter 2. I\'ll incorporate your suggestions.',
      lastMessageTime: '2 hours ago',
      unreadCount: 0,
      thesisTitle: 'Machine Learning Applications in Healthcare',
      status: 'active'
    },
    {
      id: '2',
      participant: user?.role === 'student' ? 'Committee Member' : 'David Kim',
      role: user?.role === 'student' ? 'committee' : 'student',
      avatar: user?.role === 'student' ? 
        'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2' :
        'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      lastMessage: 'The methodology section needs more detail on the validation process.',
      lastMessageTime: '1 day ago',
      unreadCount: 2,
      thesisTitle: 'Data Science Applications in Finance',
      status: 'needs-attention'
    }
  ];

  const messages = [
    {
      id: '1',
      fromUserId: user?.role === 'student' ? '2' : '1',
      message: 'Hi Sarah, I\'ve reviewed your latest chapter draft. Overall, it\'s well-structured, but there are a few areas that need attention.',
      timestamp: '2024-01-05 10:30',
      type: 'message',
      attachments: [
        { name: 'Chapter2_Feedback.pdf', size: '1.2 MB' }
      ]
    },
    {
      id: '2',
      fromUserId: user?.role === 'student' ? '1' : '2',
      message: 'Thank you for the feedback, Dr. Chen. I appreciate the detailed comments. I have a few questions about the methodology section.',
      timestamp: '2024-01-05 14:15',
      type: 'message'
    },
    {
      id: '3',
      fromUserId: user?.role === 'student' ? '2' : '1',
      message: 'Of course! Let\'s schedule a meeting to discuss the methodology in detail. Are you available this Friday at 2 PM?',
      timestamp: '2024-01-05 15:45',
      type: 'message'
    },
    {
      id: '4',
      fromUserId: 'system',
      message: 'Meeting scheduled: Friday, January 8, 2024 at 2:00 PM - Methodology Discussion',
      timestamp: '2024-01-05 15:46',
      type: 'system-alert'
    },
    {
      id: '5',
      fromUserId: user?.role === 'student' ? '1' : '2',
      message: 'Perfect! I\'ll prepare my questions beforehand. See you Friday.',
      timestamp: '2024-01-05 16:00',
      type: 'message'
    }
  ];

  const sendMessage = () => {
    if (messageText.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', messageText);
      setMessageText('');
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  return (
    <div className="h-[calc(100vh-200px)] bg-white rounded-xl shadow-sm border border-gray-200 flex">
      {/* Conversations List */}
      <div className="w-1/3 border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Communications</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                selectedConversation === conversation.id ? 'bg-blue-50 border-r-2 border-blue-500' : ''
              }`}
            >
              <div className="flex items-start space-x-3">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={conversation.avatar}
                  alt={conversation.participant}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {conversation.participant}
                      </p>
                      <p className="text-xs text-gray-500 capitalize">{conversation.role}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <span className="text-xs text-gray-500">
                        {conversation.lastMessageTime}
                      </span>
                      {conversation.unreadCount > 0 && (
                        <span className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {conversation.unreadCount}
                        </span>
                      )}
                      {conversation.status === 'needs-attention' && (
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 truncate">
                    {conversation.thesisTitle}
                  </p>
                  <p className="text-sm text-gray-600 mt-1 truncate">
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message View */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Message Header */}
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={conversations[0].avatar}
                    alt={conversations[0].participant}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {conversations[0].participant}
                    </h3>
                    <p className="text-sm text-gray-600 capitalize">
                      {conversations[0].role} • {conversations[0].thesisTitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-200">
                    <Calendar className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-200">
                    <Filter className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${
                  message.fromUserId === user?.id ? 'justify-end' : 'justify-start'
                }`}>
                  {message.type === 'system-alert' ? (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 max-w-md">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-blue-800">{message.message}</span>
                      </div>
                      <span className="text-xs text-blue-600 mt-1 block">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                  ) : (
                    <div className={`max-w-md ${
                      message.fromUserId === user?.id 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    } rounded-lg p-4`}>
                      <div className="text-sm">{message.message}</div>
                      {message.attachments && (
                        <div className="mt-2 space-y-1">
                          {message.attachments.map((attachment, index) => (
                            <div key={index} className="flex items-center space-x-2 text-xs opacity-90">
                              <Paperclip className="h-3 w-3" />
                              <span>{attachment.name}</span>
                              <span>({attachment.size})</span>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className={`text-xs mt-2 ${
                        message.fromUserId === user?.id ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex items-end space-x-4">
                <div className="flex-1">
                  <textarea
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type your message..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                  />
                  <div className="flex items-center justify-between mt-2">
                    <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800">
                      <Paperclip className="h-4 w-4" />
                      <span>Attach File</span>
                    </button>
                    <div className="text-xs text-gray-500">
                      Press Enter to send, Shift+Enter for new line
                    </div>
                  </div>
                </div>
                <button
                  onClick={sendMessage}
                  disabled={!messageText.trim()}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Send</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p className="text-lg font-medium">Select a conversation</p>
              <p className="text-sm">Choose a conversation from the list to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}