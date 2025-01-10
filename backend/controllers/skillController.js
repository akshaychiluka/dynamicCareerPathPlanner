const prisma = require('../prisma');

const getSkills = async (req, res) => {
  try {
    const skills = await prisma.skill.findMany();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
};

module.exports = { getSkills };