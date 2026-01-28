import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scraper from "./components/Scraper/Scraper";
import NotFound from "./components/Pages/NotFound";
import Home from "./Home";
import classes from "./App.module.css";
import ExportData from "./components/Export/ExportData";
import Tutorials from "./components/Tutorials/Tutorials";
import VideoPlayerPage from "./components/Tutorials/VideoPlayerPage";
import TutorialsPage from "./components/Tutorials/TutorialsPage";
import KnowledgeBasePage from "./components/Tutorials/KnowledgeBasePage";
import DiscussionForumPage from "./components/Feedback/DiscussionForumPage";
import FeedbackPage from "./components/Feedback/FeedbackPage";
import LandingPage from "./components/Pages/LandingPage";
import DashboardPage from "./components/Home/Home";
import { ProtectedRoute, AdminRoute } from "./components/Auth/RouteProtection";
import AsideNav from "./components/Nav/Sidebar/AsideNav";
import Register from "./components/Auth/Register";
import LogIn from "./components/Auth/Login";
import AddWebsite from "./components/Admin/AddWebsite";
import AdminPage from "./components/Admin/AdminPage";
import MoreDetails from "./components/Pages/MoreDetails";
import SettingPage from "./components/Setting/Settingpage.jsx"; 
import HelpPage from "./components/Help/HelpPage";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <AsideNav />
      <div className={classes["main-container"]}>
        <Routes>
          {/* Define Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/vulns/*" 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />

          <Route 
            path="/addsite" 
            element={
              <AdminRoute>
                <AddWebsite />
              </AdminRoute>
            } 
          />

          <Route path="/details/:id" element={<ProtectedRoute><MoreDetails /></ProtectedRoute>} />

          <Route path="/scraper" element={<AdminRoute><Scraper /></AdminRoute>} />
          <Route path="/export" element={<ProtectedRoute><ExportData /></ProtectedRoute>} />

          <Route path="/tutorial">
            <Route path="/tutorial" element={<ProtectedRoute><Tutorials /></ProtectedRoute>} />
            <Route path="/tutorial/:videoName" element={<ProtectedRoute><VideoPlayerPage /></ProtectedRoute>} />
          </Route>

          <Route path="/tutorials" element={<ProtectedRoute><TutorialsPage /></ProtectedRoute>} />
          <Route path="/knowledge-base" element={<ProtectedRoute><KnowledgeBasePage /></ProtectedRoute>} />

          <Route path="/discussion" element={<ProtectedRoute><DiscussionForumPage /></ProtectedRoute>} />
          <Route path="/feedback" element={<ProtectedRoute><FeedbackPage /></ProtectedRoute>} />
          <Route path="/admin" element={<AdminRoute><AdminPage /></AdminRoute>} />
          <Route path="/help" element={<HelpPage />} />

          <Route path="/settings" element={<ProtectedRoute><SettingPage /></ProtectedRoute>} />
          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
