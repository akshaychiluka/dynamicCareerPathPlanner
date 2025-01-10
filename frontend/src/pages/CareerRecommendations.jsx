import { useState, useEffect } from 'react';
import axios from 'axios';

function CareerRecommendations() {
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecommendations = async () => {
      const profileData = JSON.parse(localStorage.getItem('profileData'));
      const analysisData = JSON.parse(localStorage.getItem('analysisData'));

      try {
        // Replace with your GROQ API endpoint and key
        const response = await axios.post('YOUR_GROQ_API_ENDPOINT', {
          messages: [{
            role: "user",
            content: `Based on the profile and skill gap analysis, provide career recommendations.
                     Profile: ${JSON.stringify(profileData)}
                     Analysis: ${JSON.stringify(analysisData)}`
          }],
        }, {
          headers: {
            'Authorization': 'Bearer YOUR_GROQ_API_KEY'
          }
        });

        setRecommendations(response.data);
      } catch (error) {
        console.error('Error getting recommendations:', error);
        // Fallback mock data for demo
        setRecommendations([
          {
            title: 'Frontend Developer',
            description: 'Focus on modern frontend frameworks and UI/UX principles',
            steps: [
              'Master React and its ecosystem',
              'Learn state management with Redux or Context API',
              'Build a portfolio with 3 complex projects',
              'Practice with real-world API integrations'
            ],
            resources: [
              { name: 'React Documentation', url: 'https://react.dev' },
              { name: 'Frontend Masters', url: 'https://frontendmasters.com' }
            ]
          }
        ]);
      }
      setLoading(false);
    };

    getRecommendations();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Career Recommendations
        </h2>

        <div className="space-y-6">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {rec.title}
              </h3>
              <p className="text-gray-600 mb-4">{rec.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Action Steps:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {rec.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-gray-600">{step}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Resources:</h4>
                <ul className="space-y-1">
                  {rec.resources.map((resource, resourceIndex) => (
                    <li key={resourceIndex}>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CareerRecommendations;