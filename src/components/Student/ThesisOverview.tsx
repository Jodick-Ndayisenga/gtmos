import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  FileText,
  User,
  Target,
  BarChart3
} from 'lucide-react';

export function ThesisOverview() {
  const { user } = useAuth();
  
  const thesisData = {
    title: 'Machine Learning Applications in Healthcare Data Analysis',
    status: 'research',
    progress: 68,
    startDate: '2021-09-01',
    expectedCompletion: '2024-08-01',
    supervisor: 'Dr. Michael Chen',
    department: 'Computer Science',
    currentPhase: 'Literature Review & Data Collection'
  };

  const progressData = [
    { month: 'Sep 2023', progress: 15 },
    { month: 'Oct 2023', progress: 22 },
    { month: 'Nov 2023', progress: 28 },
    { month: 'Dec 2023', progress: 35 },
    { month: 'Jan 2024', progress: 42 },
    { month: 'Feb 2024', progress: 48 },
    { month: 'Mar 2024', progress: 55 },
    { month: 'Apr 2024', progress: 62 },
    { month: 'May 2024', progress: 68 }
  ];

  const keyMetrics = {
    chaptersCompleted: 2,
    totalChapters: 6,
    wordsWritten: 15420,
    targetWords: 25000,
    meetingsHeld: 12,
    feedbackReceived: 8
  };

  return (
    <div className="space-y-6">
      {/* Thesis Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{thesisData.title}</h1>
            <p className="text-blue-100 mb-4">Current Phase: {thesisData.currentPhase}</p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Supervisor: {thesisData.supervisor}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Expected: {new Date(thesisData.expectedCompletion).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold mb-1">{thesisData.progress}%</div>
            <div className="text-blue-100 text-sm">Complete</div>
          </div>
        </div>
        <div className="mt-4 bg-blue-500 bg-opacity-30 rounded-full h-3">
          <div 
            className="bg-white rounded-full h-3 transition-all duration-500"
            style={{ width: `${thesisData.progress}%` }}
          ></div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Chapters</p>
              <p className="text-2xl font-semibold text-gray-900">
                {keyMetrics.chaptersCompleted}/{keyMetrics.totalChapters}
              </p>
            </div>
            <BookOpen className="h-8 w-8 text-blue-600" />
          </div>
          <div className="mt-2 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 rounded-full h-2"
              style={{ width: `${(keyMetrics.chaptersCompleted / keyMetrics.totalChapters) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Word Count</p>
              <p className="text-2xl font-semibold text-gray-900">
                {keyMetrics.wordsWritten.toLocaleString()}
              </p>
            </div>
            <FileText className="h-8 w-8 text-green-600" />
          </div>
          <div className="mt-2 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 rounded-full h-2"
              style={{ width: `${(keyMetrics.wordsWritten / keyMetrics.targetWords) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">Target: {keyMetrics.targetWords.toLocaleString()}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Meetings</p>
              <p className="text-2xl font-semibold text-gray-900">{keyMetrics.meetingsHeld}</p>
            </div>
            <Calendar className="h-8 w-8 text-purple-600" />
          </div>
          <p className="text-xs text-gray-500 mt-2">This academic year</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Feedback</p>
              <p className="text-2xl font-semibold text-gray-900">{keyMetrics.feedbackReceived}</p>
            </div>
            <Target className="h-8 w-8 text-orange-600" />
          </div>
          <p className="text-xs text-gray-500 mt-2">Reviews received</p>
        </div>
      </div>

      {/* Progress Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
            Progress Over Time
          </h3>
        </div>
        <div className="p-6">
          <div className="h-64 flex items-end justify-between space-x-2">
            {progressData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-blue-600 rounded-t-sm transition-all duration-500 hover:bg-blue-700"
                  style={{ height: `${(data.progress / 100) * 200}px` }}
                  title={`${data.month}: ${data.progress}%`}
                ></div>
                <div className="text-xs text-gray-600 mt-2 transform -rotate-45 origin-left">
                  {data.month}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <span>0%</span>
            <span>25%</span>
            <span>50%</span>
            <span>75%</span>
            <span>100%</span>
          </div>
        </div>
      </div>

      {/* Thesis Abstract */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Thesis Abstract</h3>
        </div>
        <div className="p-6">
          <p className="text-gray-700 leading-relaxed">
            This research investigates the application of machine learning algorithms in healthcare data analysis, 
            focusing on predictive modeling for patient outcomes. The study explores various ML techniques including 
            supervised learning, unsupervised clustering, and deep learning approaches to analyze large-scale 
            healthcare datasets. The research aims to develop robust models that can assist healthcare professionals 
            in making data-driven decisions while ensuring patient privacy and data security. Preliminary results 
            show promising accuracy rates in predicting patient readmission risks and treatment effectiveness.
          </p>
        </div>
      </div>
    </div>
  );
}