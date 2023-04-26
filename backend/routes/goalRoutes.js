const express = require('express');
const { getGoals, postGoals, updateGoals, deleteGoals } = require('../controller/goalController');
const router = express.Router();


const  protect  = require('../middlewares/authorizationMiddleware')

router.route('/').get(protect,getGoals).post(protect,postGoals);
router.route('/:id').put(protect,updateGoals).delete(protect,deleteGoals);



module.exports = router;