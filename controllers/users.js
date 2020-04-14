const db = require('../models');

const index = async (req, res) => {
   try {
        const users = await db.User.find({});
        if (!users) return res.status(404).json({error: 'No users found!'});
        return res.json(users);
    } catch (err) {
        return res.status(500).json('uh oh');
    }
}

module.exports = {
    index
}