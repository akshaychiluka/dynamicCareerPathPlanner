import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

const careerOptions = [
  { value: 'frontend', label: 'Frontend Developer' },
  { value: 'backend', label: 'Backend Developer' },
  { value: 'fullstack', label: 'Full Stack Developer' },
  { value: 'data', label: 'Data Scientist' },
  { value: 'ai', label: 'AI Engineer' },
];

const skillOptions = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'react', label: 'React' },
  { value: 'node', label: 'Node.js' },
  { value: 'sql', label: 'SQL' },
  { value: 'aws', label: 'AWS' },
];

function ProfileSetup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    skills: [],
    careerGoal: null,
    interests: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Store data in localStorage for now
    localStorage.setItem('profileData', JSON.stringify(formData));
    navigate('/skill-gap');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile Setup</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Skills
            </label>
            <Select
              isMulti
              options={skillOptions}
              value={formData.skills}
              onChange={(selected) => setFormData({ ...formData, skills: selected })}
              className="basic-multi-select"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Career Goal
            </label>
            <Select
              options={careerOptions}
              value={formData.careerGoal}
              onChange={(selected) => setFormData({ ...formData, careerGoal: selected })}
              className="basic-select"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Analyze My Skills
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileSetup;