const { Post } = require('../models');

const postData = [
    {
        title: "Title of post",
        post_content: "This is where the post will go",
        user_id: 1
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;