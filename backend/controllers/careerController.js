const prisma = require('../prisma');
const aiService = require('../services/aiService');

const getCareerPaths = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(userId) } });
    const careerPaths = await aiService.getCareerPaths(user);
    res.status(200).json(careerPaths);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch career paths' });
  }
};

module.exports = { getCareerPaths };