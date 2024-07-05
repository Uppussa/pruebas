import React from 'react';
import DashboardApp from './components/DashboardApp';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div className="dashboard flex">
        <Sidebar />
        <DashboardApp />
      </div>
     
    </>
  );
}

export default App;
