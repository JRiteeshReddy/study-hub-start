
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useProgress } from '@/hooks/useProgress';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, User, BarChart, LogOut, Settings, FileText } from 'lucide-react';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { getCompletedChapters } = useProgress();
  const navigate = useNavigate();

  const completedChapters = getCompletedChapters();
  const progressPercentage = (completedChapters.length / 5) * 100;

  const handleSettings = () => {
    navigate('/settings');
    setIsOpen(false);
  };

  const handlePolicies = () => {
    navigate('/policies');
    setIsOpen(false);
  };

  const handleLogout = async () => {
    await signOut();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20"
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <User size={16} className="text-black" />
        </div>
        <span className="text-white font-medium hidden md:block">
          {user?.email?.split('@')[0] || 'User'}
        </span>
        <ChevronDown size={16} className={`text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="profile-dropdown">
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <User size={20} className="text-black" />
                </div>
                <div>
                  <p className="text-white font-medium">{user?.email?.split('@')[0] || 'User'}</p>
                  <p className="text-gray-400 text-sm">{user?.email}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Course Progress</span>
                  <span className="text-white font-medium">{completedChapters.length}/5</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <p className="text-gray-400 text-xs">{Math.round(progressPercentage)}% Complete</p>
              </div>
            </div>
            
            <div className="p-2">
              <button
                onClick={() => navigate('/course')}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-left"
              >
                <BarChart size={16} className="text-white" />
                <span className="text-white">My Progress</span>
              </button>
              
              <button
                onClick={handleSettings}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-left"
              >
                <Settings size={16} className="text-white" />
                <span className="text-white">Settings</span>
              </button>

              <button
                onClick={handlePolicies}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-left"
              >
                <FileText size={16} className="text-white" />
                <span className="text-white">Policies</span>
              </button>
              
              <hr className="my-2 border-white/10" />
              
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-500/20 transition-colors text-left"
              >
                <LogOut size={16} className="text-red-400" />
                <span className="text-red-400">Log Out</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileDropdown;
