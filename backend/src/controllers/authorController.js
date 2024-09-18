const { createTestService } = require('backend/src/services/authorServices');

const createTest = async (req, res) => {
    const newTest = req.body;
    const authorId = req.user?.id;

    if (!authorId) {
        return res.status(400).send({ message: 'Author ID is missing' });
    }

    try {
        const test = await createTestService(authorId, newTest);
        res.status(201).send({ data: test, message: 'Test created successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Failed to create test', error: error.message });
    }
};

module.exports = { createTest };
