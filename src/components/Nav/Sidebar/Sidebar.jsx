import { createContext, useContext, useState } from "react";
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Minimal overlay */}
      {expanded && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setExpanded(false)}
        />
      )}

      <aside
        className={`fixed z-50 h-screen bg-[#1a1d29] transition-all duration-300 border-r border-white/5 ${
          expanded ? "w-64" : "w-20"
        }`}
      >
        <nav className="h-full flex flex-col">
          {/* Logo - Click to toggle */}
          <div 
            onClick={() => setExpanded((curr) => !curr)}
            className="p-5 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors border-b border-white/5"
          >
            <div className={`transition-all duration-300 ${expanded ? "w-48" : "w-10"}`}>
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
               {children}
            </ul>
          </SidebarContext.Provider>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({ icon, text, location, onClick }) {
  const { expanded } = useContext(SidebarContext);
  
  const content = (
    <>
      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
        {icon}
      </div>
      <span
        className={`text-sm font-medium whitespace-nowrap transition-all ${
          expanded ? "ml-3 opacity-100 w-auto" : "ml-0 opacity-0 w-0 overflow-hidden"
        }`}
      >
        {text}
      </span>

      {/* Minimal tooltip */}
      {!expanded && (
        <div className="absolute left-full ml-2 px-3 py-2 bg-[#2a2d3a] text-white text-xs font-medium rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-lg border border-white/10">
          {text}
        </div>
      )}
    </>
  );

  const baseClasses = "relative flex items-center px-3 py-2.5 rounded-lg cursor-pointer transition-all group text-gray-400";
  const hoverClasses = "hover:bg-white/5 hover:text-white";
  const activeClasses = "bg-white/10 text-white";

  if (onClick) {
    return (
      <button onClick={onClick} className={`w-full ${baseClasses} ${hoverClasses}`}>
        {content}
      </button>
    );
  }

  return (
    <NavLink
      to={location}
      className={({ isActive }) =>
        `${baseClasses} ${isActive ? activeClasses : hoverClasses}`
      }
    >
      {content}
    </NavLink>
  );
}