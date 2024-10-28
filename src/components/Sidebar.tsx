import React from 'react';
import { Twitter, Instagram, Facebook, LayoutDashboard, Settings, HelpCircle, MessageSquare } from 'lucide-react';
import { Platform } from '../types';

interface SidebarProps {
  selectedPlatform: Platform;
  onPlatformChange: (platform: Platform) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedPlatform, onPlatformChange }) => {
  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-8">
        <MessageSquare className="w-6 h-6 text-blue-600" />
        <span className="font-bold text-xl">CommentAI</span>
      </div>

      <nav className="space-y-1">
        <button
          onClick={() => onPlatformChange('all')}
          className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
            selectedPlatform === 'all'
              ? 'bg-blue-50 text-blue-700'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </button>
        <button
          onClick={() => onPlatformChange('twitter')}
          className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
            selectedPlatform === 'twitter'
              ? 'bg-blue-50 text-blue-700'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Twitter className="w-5 h-5" />
          Twitter
        </button>
        <button
          onClick={() => onPlatformChange('instagram')}
          className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
            selectedPlatform === 'instagram'
              ? 'bg-blue-50 text-blue-700'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Instagram className="w-5 h-5" />
          Instagram
        </button>
        <button
          onClick={() => onPlatformChange('facebook')}
          className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
            selectedPlatform === 'facebook'
              ? 'bg-blue-50 text-blue-700'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Facebook className="w-5 h-5" />
          Facebook
        </button>
      </nav>

      <div className="mt-auto pt-8 border-t border-gray-200">
        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
          <Settings className="w-5 h-5" />
          Settings
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
          <HelpCircle className="w-5 h-5" />
          Help & Support
        </button>
      </div>
    </div>
  );
};

export default Sidebar;