import express from 'express';
import {getAllUsers, getUser, createUser, updateUser, deleteUser} from '../controllers/user.controller'

const router = express.Router();

// get all users
router.get('/',getAllUsers);

// get user
router.get('/:id',getUser);

// create the user
router.post('/create', createUser);

// update an user
router.put('/update/:id',updateUser);

// remove an user
router.delete('/delete/:id',deleteUser);


export {router as userRoutes}