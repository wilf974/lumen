import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Explorer from './pages/Explorer';
import Badges from './pages/Badges';
import Bible from './pages/Bible';
import Communaute from './pages/Communaute';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="explorer" element={<Explorer />} />
              <Route path="badges" element={<Badges />} />
              <Route path="bible" element={<Bible />} />
              <Route path="communaute" element={<Communaute />} />
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
