import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LoginForm } from './components/Auth/LoginForm';
import { WelcomePage } from './components/Welcome/WelcomePage';
import { Navbar } from './components/Layout/Navbar';
import { Sidebar } from './components/Layout/Sidebar';
import { StudentDashboard } from './components/Dashboard/StudentDashboard';
import { SupervisorDashboard } from './components/Dashboard/SupervisorDashboard';
import { AdminDashboard } from './components/Dashboard/AdminDashboard';
import { CommunicationsModule } from './components/Communications/CommunicationsModule';
import { ThesisOverview } from './components/Student/ThesisOverview';
import { MilestonesPage } from './components/Student/MilestonesPage';
import { DocumentsPage } from './components/Student/DocumentsPage';
import { MeetingsPage } from './components/Student/MeetingsPage';
import { SupportGrievancePage } from './components/Student/SupportGrievancePage';
import { StudentsManagement } from './components/Supervisor/StudentsManagement';
import { ReviewsFeedback } from './components/Supervisor/ReviewsFeedback';
import { MeetingsManagement } from './components/Supervisor/MeetingsManagement';
import { WorkloadAnalytics } from './components/Supervisor/WorkloadAnalytics';
import { CommunicationsOversight } from './components/Admin/CommunicationsOversight';
import { SystemOversight } from './components/Admin/SystemOversight';
import { Analytics } from './components/Admin/Analytics';
import { UserManagement } from './components/Admin/UserManagement';
import { SupervisorManagement } from './components/Admin/SupervisorManagement';
import { SystemAlerts } from './components/Admin/SystemAlerts';
import { Grievances } from './components/Admin/Grievances';
import { Reports } from './components/Admin/Reports';
import { Settings } from './components/Admin/Settings';

function AppRoutes() {
  const { user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* Unauthenticated layout */}
      {!user ? (
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        // Authenticated layout with sidebar
        <div className="flex">
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
          <main className="flex-1 p-6 overflow-auto">
            <Routes>
              {/* Shared route */}
              <Route
                path="/communications"
                element={
                  user.role === 'admin' ? (
                    <CommunicationsOversight />
                  ) : (
                    <CommunicationsModule />
                  )
                }
              />

              {/* Student Routes */}
              {user.role === 'student' && (
                <>
                  <Route path="/dashboard" element={<StudentDashboard />} />
                  <Route path="/thesis" element={<ThesisOverview />} />
                  <Route path="/milestones" element={<MilestonesPage />} />
                  <Route path="/documents" element={<DocumentsPage />} />
                  <Route path="/meetings" element={<MeetingsPage />} />
                  <Route path="/support" element={<SupportGrievancePage />} />
                </>
              )}

              {/* Supervisor Routes */}
              {user.role === 'supervisor' && (
                <>
                  <Route path="/dashboard" element={<SupervisorDashboard />} />
                  <Route path="/students" element={<StudentsManagement />} />
                  <Route path="/reviews" element={<ReviewsFeedback />} />
                  <Route path="/meetings" element={<MeetingsManagement />} />
                  <Route path="/workload" element={<WorkloadAnalytics />} />
                </>
              )}

              {/* Admin Routes */}
              {user.role === 'admin' && (
                <>
                  <Route path="/dashboard" element={<AdminDashboard />} />
                  <Route path="/oversight" element={<SystemOversight />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/users" element={<UserManagement />} />
                  <Route path="/supervisors" element={<SupervisorManagement />} />
                  <Route path="/alerts" element={<SystemAlerts />} />
                  <Route path="/grievances" element={<Grievances />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/settings" element={<Settings />} />
                </>
              )}

              {/* Default fallback */}
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </main>
        </div>
      )}
    </>
  );
}


function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
