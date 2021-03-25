const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  console.log('GET /')
  try {
    const postData = await Post.findAll({
      include: [User],
    });
    console.log('postdata', postData)
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get('/post/:id', async (req, res) => {
  console.log('/post/id hits===========================');
  try {
    const postData = await Post.findByPk(req.params.id,
      {
        include: [User]
        // {
        //   model: 'User',
        //   attributes: ['title', 'content', 'userId']
        // }

      }
    )
    // console.log('===================postdata: ', postData);

    if (postData) {

      const post = postData.get({ plain: true });
      console.log(post);

      res.render('single-post', { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
