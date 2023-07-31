import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage';
import TeamHomePage from './components/TeamsHomePage/TeamHomePage';
const App: React.FC = () => {
  const LandingPageNode: ReactNode = <LandingPage />;
  const TeamHomePageNode: ReactNode = <TeamHomePage />;
  return (
    <Router>
      <Routes>
        <Route path="/" element={LandingPageNode} />
        <Route path="/team/:teamName" element={TeamHomePageNode} />
        {/* Add other routes for chat section and user authentication */}
      </Routes>
    </Router>
  );
};

export default App;
