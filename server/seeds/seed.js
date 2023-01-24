const db = require('../config/connection');
const { User, Post } = require('../models'); 
//Contains user login data
const userSeeds = require('./userSeeds.json');
//Contains userPost data
const postSeeds = require('../seeds/postSeeds.json');



db.once( 'open', async () => {
  try {
    await Post.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < postSeeds.length; i++) {
      const { _id, postAuthor } = await Post.create(postSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: postAuthor },
        {
          $addToSet: {
            posts: _id
          }
        }
      )
    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Finished!');
  process.exit(0);
});
