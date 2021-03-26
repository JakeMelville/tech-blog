const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

// URL: 
router.post('/', withAuth, async (req, res) => {
  console.log('/api/comment hits');
  try {
    const newComment = await Comment.create({
      // TODO: COMMENT BODY IN REQUEST USING SPREAD

      // TODO: SET USERID TO SESSION LOGGEDIN USERID
      title: req.body.title,
      content: req.body.body,
      userId: req.session.userId


    });
    res.json(newComment);
    console.log(" line 20 new comment", newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
