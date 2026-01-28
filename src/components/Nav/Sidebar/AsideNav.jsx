import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  MessageCircleQuestion,
  Waves,
  TriangleAlert,
  FilePen,
  LifeBuoy,
  Settings,
  ArrowRightFromLine,
  LayoutDashboard,
  ShieldCheck,
  PlusCircle,
  Database,
  UserCircle,
  LogOut,
  LogIn
} from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";

const AsideNav = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token');
  const userStr = localStorage.getItem('user');
  
  let user = null;
  try {
    user = JSON.parse(userStr);
  } catch (e) {
    user = null;
  }

  const isAdmin = user?.is_admin;

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="flex fixed z-20 left-0 top-0">
      <Sidebar>
        <SidebarItem icon={<Home size={20} />} text="Home" location="/" />
        
        {token && (
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            location="/dashboard"
          />
        )}

        <SidebarItem
          icon={<TriangleAlert size={20} />}
          text="Vulnerabilities"
          location="/vulns"
        />

        <SidebarItem
          icon={<ArrowRightFromLine size={20} />}
          text="Export"
          location="/export"
        />

        <SidebarItem
          icon={<Waves size={20} />}
          text="Discussion"
          location="/discussion"
        />

        <SidebarItem
          icon={<FilePen size={20} />}
          text="Feedback"
          location="/feedback"
        />

        <SidebarItem
          icon={<MessageCircleQuestion size={20} />}
          text="Help"
          location="/knowledge-base"
        />

        {isAdmin && (
          <>
            <div className="my-3 border-t border-white/10" />
            <SidebarItem
              icon={<ShieldCheck size={20} />}
              text="Admin"
              location="/admin"
            />
            <SidebarItem
              icon={<PlusCircle size={20} />}
              text="Add Site"
              location="/addsite"
            />
            <SidebarItem
              icon={<Database size={20} />}
              text="Scraper"
              location="/scraper"
            />
          </>
        )}

        {/* User section at bottom */}
        <div className="mt-auto pt-3 border-t border-white/10 space-y-1">
          {token ? (
            <>
              <SidebarItem
                icon={<UserCircle size={20} />}
                text={user?.username || "Account"}
                location="/settings"
              />
              <SidebarItem
                icon={<LogOut size={20} />}
                text="Logout"
                onClick={handleLogout}
              />
            </>
          ) : (
            <SidebarItem
              icon={<LogIn size={20} />}
              text="Sign In"
              location="/login"
            />
          )}
          
          <SidebarItem
            icon={<Settings size={20} />}
            text="Settings"
            location="/settings"
          />
          <SidebarItem
            icon={<LifeBuoy size={20} />}
            text="Support"
            location="/help"
          />
        </div>
      </Sidebar>
    </div>
  );
};

export default AsideNav;
