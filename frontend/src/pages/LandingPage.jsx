import { useNavigate } from 'react-router-dom';
import { FaRocket } from 'react-icons/fa';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Career Path Planner
          </h1>
          <p className="text-xl text-gray-600">Plan Your Career with AI</p>
        </header>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Discover Your Dream Career Path
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Analyze your skills, fill the gaps, and get personalized career guidance
          </p>
          <button
            onClick={() => navigate('/profile-setup')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto"
          >
            <FaRocket className="mr-2" />
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;