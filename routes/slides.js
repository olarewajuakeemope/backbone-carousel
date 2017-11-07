var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.json({
    slides: [
      {
        title: 'First Block',
        images: [
          '/images/bg-cup.jpg',
          '/images/bg-gift.jpg',
          '/images/bg-girl.jpg',
          '/images/bg-laptop.jpg',
        ],
      },
      {
        title: 'Second Block',
        images: [
          '/images/bg-man.jpg',
          '/images/bg-thunder.jpg',
          '/images/blog-1.jpg',
        ],
      },
      {
        title: 'Third Block',
        images: [
          '/images/blog-2.jpg',
          '/images/blog-3.jpg',
          '/images/blog-4.jpg',
        ],
      },
      {
        title: 'Fourth Block',
        images: [
          '/images/blog-5.jpg',
          '/images/blog-6.jpg',
          '/images/blog-img.jpg',
        ],
      },
    ],
  });
});

module.exports = router;
