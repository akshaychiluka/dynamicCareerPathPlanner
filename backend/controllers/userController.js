const prisma = require('../prisma');

const createUser = async (req, res) => {
  const { name, skills, careerGoal, interests } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, skills, careerGoal, interests },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};

module.exports = { createUser };