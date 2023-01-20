const db = require('../config/connection');
const { User, Buzz } = require('../models');
const userSeeds = require('./userSeeds.json');
const buzzSeeds = require('./buzzPostSeeds.json');

db.once('open', async () => {
  try {
    await Buzz.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < buzzSeeds.length; i++) {
      const { _id, buzzAuthor } = await Buzz.create(buzzSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: buzzAuthor },
        {
          $addToSet: {
            buzz: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
