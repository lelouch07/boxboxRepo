import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage';
const App: React.FC = () => {
  const LandingPageNode: ReactNode = <LandingPage />;
  return (
    <Router>
      <Routes>
        <Route path="/" element={LandingPageNode} />
        {/* Add other routes for chat section and user authentication */}
      </Routes>
    </Router>
  );
};

export default App;
