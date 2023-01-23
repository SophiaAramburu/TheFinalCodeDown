const db = require('../config/connection');
const { User, UserPost } = require('../models'); 

//Contains user login data
const userSeeds = require('./userSeeds.json');
//Contains userPost data
const userPostSeeds = require('../seeds/userPostSeeds.json');
const userPost = require('./userPostSeeds');


db.once( 'open', async () => {
  try {
    await UserPost.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < userPostSeeds.length; i++) {
      const { _id, postAuthor } = await userPost.create(userPostSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: postAuthor },
        {
          $addToSet: {
            userPosts: _id
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
