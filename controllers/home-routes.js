const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);
    res.render('homepage', {
        // id: 1,
        // post_url: 'https://handlebars.com/guide',
        // title: 'Handlebars Docs',
        // created_at: new Date(),
        // vote_count: 10,
        // comments: [{}, {}],
        // user: {
        //     username: 'test_user'
        // }
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;