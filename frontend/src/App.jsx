import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProfileSetup from './pages/ProfileSetup';
import SkillGapAnalysis from './pages/SkillGapAnalysis';
import CareerRecommendations from './pages/CareerRecommendations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/skill-gap" element={<SkillGapAnalysis />} />
        <Route path="/recommendations" element={<CareerRecommendations />} />
      </Routes>
    </Router>
  );
}

export default App;