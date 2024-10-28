import React from 'react';
import { MoreHorizontal, ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';
import { Comment } from '../types';

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-semibold">Recent Comments</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {comments.map((comment) => (
          <div key={comment.id} className="p-6 hover:bg-gray-50">
            <div className="flex items-start gap-4">
              <img
                src={comment.avatar}
                alt={comment.author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-gray-900">{comment.author}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      {new Date(comment.timestamp).toLocaleDateString()}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">{comment.content}</p>
                <div className="flex items-center gap-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    comment.sentiment === 'positive' ? 'bg-green-100 text-green-800' :
                    comment.sentiment === 'negative' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {comment.sentiment}
                  </span>
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">Helpful</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-sm">Reply</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;