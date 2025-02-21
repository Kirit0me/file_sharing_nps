import React from 'react';
import FileUpload from './components/FileUpload';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">File Sharing App</h1>
      <FileUpload />
    </div>
  );
};

export default App;
