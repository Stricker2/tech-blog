const { Post } = require('../models');

const postData = [
    {
        title:'Shush',
        content: 'If I speak I am in big big trouble',
        user_id: 2
    },
    {
        title: "You're joking...",
        content: "You're joking! Not another one?! I can't, honestly I can't.",
        user_id: 4
    },
    {
        title: "Alright",
        content: "Alriiiiiiiight, lets go.",
        user_id: 1
    },
    {
        title: "Blue",
        content: "I'm blue daboodee daboodie daboodee daboodie",
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;