const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 1,
        comment_text: "This is amazing!"
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;