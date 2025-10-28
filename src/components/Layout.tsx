import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-lumen-light dark:bg-lumen-dark transition-colors duration-300">
      <Navigation />
      <main className="pb-20 pt-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
