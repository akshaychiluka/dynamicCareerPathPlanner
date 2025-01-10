const axios = require('axios');

const getCareerPaths = async (user) => {
  // Call to AI API to get career paths based on user data
  const response = await axios.post('https://api.example.com/career-paths', {
    skills: user.skills,
    careerGoal: user.careerGoal,
  });
  return response.data;
};

module.exports = { getCareerPaths };