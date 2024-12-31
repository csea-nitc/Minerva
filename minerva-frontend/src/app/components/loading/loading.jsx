import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center gap-3 w-full py-8">
      <span className="text-4xl font-medium text-accent">Loading</span>
      <div className="h-10 w-10 rounded-full border-4 border-l-gray-200 border-t-accent animate-spin" />
    </div>
  );
};

export default Loading;