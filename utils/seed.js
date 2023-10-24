const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomUsername, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let thoughtCheck = await connection.db.listCollections({ name: 'Thought' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('Thoughts');
    }

    let usersCheck = await connection.db.listCollections({ name: 'User' }).toArray();
    if (usersCheck.length) {
      await connection.dropCollection('User');
    }


  // Create empty array to hold the students
  const users = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const username = getRandomUsername();
    const email = username + "@gmail.com"
    
    users.push({
      username,
      email
    });
  }

  // Add students to the collection and await the results
  await User.collection.insertMany(users);

  // Add courses to the collection and await the results
  // await Course.collection.insertOne({
  //   courseName: 'UCLA',
  //   inPerson: false,
  //   students: [...students],
  // });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
