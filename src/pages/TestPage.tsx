import React from 'react';

const TestPage = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Test Page Working!</h1>
        <p className="text-lg text-blue-600">If you can see this, the basic routing is working.</p>
        <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
          <p className="text-gray-800">This is a simple test to check if React is rendering properly.</p>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
