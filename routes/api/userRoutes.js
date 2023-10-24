const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/students/:studentId/assignments
router.route('/:userId/friends').post(addFriend);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
