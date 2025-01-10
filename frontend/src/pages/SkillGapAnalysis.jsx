import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SkillGapAnalysis() {
  const navigate = useNavigate();
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const analyzeSkills = async () => {
      const profileData = JSON.parse(localStorage.getItem('profileData'));
      
      try {
        // Replace with your GROQ API endpoint and key
        const response = await axios.post('YOUR_GROQ_API_ENDPOINT', {
          messages: [{
            role: "user",
            content: `Analyze the skill gap for a ${profileData.careerGoal.label} role. 
                     Current skills: ${profileData.skills.map(s => s.label).join(', ')}.
                     Provide required skills and recommendations.`
          }],
        }, {
          headers: {
            'Authorization': 'Bearer YOUR_GROQ_API_KEY'
          }
        });

        setAnalysis(response.data);
        localStorage.setItem('analysisData', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error analyzing skills:', error);
        // Fallback mock data for demo
        setAnalysis({
          currentSkills: profileData.skills,
          requiredSkills: [
            { label: 'React', status: 'have' },
            { label: 'Node.js', status: 'need' },
            { label: 'AWS', status: 'need' },
          ]
        });
      }
      setLoading(false);
    };

    analyzeSkills();
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
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Skill Gap Analysis
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-green-600 mb-4">
              Skills You Have
            </h3>
            <ul className="space-y-2">
              {analysis.currentSkills.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {skill.label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-red-600 mb-4">
              Skills You Need
            </h3>
            <ul className="space-y-2">
              {analysis.requiredSkills
                .filter(skill => skill.status === 'need')
                .map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    {skill.label}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <button
          onClick={() => navigate('/recommendations')}
          className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Career Recommendations
        </button>
      </div>
    </div>
  );
}

export default SkillGapAnalysis;