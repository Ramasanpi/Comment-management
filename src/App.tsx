import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, ThumbsDown, AlertCircle, Zap, Filter, RefreshCcw } from 'lucide-react';
import CommentList from './components/CommentList';
import SentimentChart from './components/SentimentChart';
import Sidebar from './components/Sidebar';
import { Comment, Platform } from './types';

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const demoComments: Comment[] = [
    {
      id: '1',
      platform: 'twitter',
      author: 'Sarah Johnson',
      content: 'Love the new features! The UI is so intuitive.',
      sentiment: 'positive',
      timestamp: new Date().toISOString(),
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    {
      id: '2',
      platform: 'instagram',
      author: 'Mike Chen',
      content: 'Having issues with the latest update. Please fix!',
      sentiment: 'negative',
      timestamp: new Date().toISOString(),
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150',
    },
    {
      id: '3',
      platform: 'facebook',
      author: 'Emma Wilson',
      content: 'When will the Android version be released?',
      sentiment: 'neutral',
      timestamp: new Date().toISOString(),
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar selectedPlatform={selectedPlatform} onPlatformChange={setSelectedPlatform} />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Comment Management</h1>
              <div className="flex items-center justify-between">
                <div className="relative w-96">
                  <input
                    type="text"
                    placeholder="Search comments..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                    <RefreshCcw className="w-4 h-4" />
                    Refresh
                  </button>
                </div>
              </div>
            </header>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 text-sm font-medium">Total Comments</h3>
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 text-sm font-medium">Positive</h3>
                  <ThumbsUp className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-2xl font-bold">78%</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 text-sm font-medium">Negative</h3>
                  <ThumbsDown className="w-5 h-5 text-red-500" />
                </div>
                <p className="text-2xl font-bold">12%</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 text-sm font-medium">Needs Attention</h3>
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                </div>
                <p className="text-2xl font-bold">23</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Sentiment Trend</h3>
                <SentimentChart />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Quick Actions</h3>
                  <Zap className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="space-y-3">
                  <button className="w-full px-4 py-2 text-left text-sm bg-gray-50 rounded-lg hover:bg-gray-100">
                    Generate AI Response
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm bg-gray-50 rounded-lg hover:bg-gray-100">
                    Batch Process Comments
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm bg-gray-50 rounded-lg hover:bg-gray-100">
                    Export Analytics
                  </button>
                </div>
              </div>
            </div>

            <CommentList comments={demoComments} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;