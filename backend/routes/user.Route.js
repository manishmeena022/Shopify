import express, { Router } from 'express'
import { 
    authUser, 
    registerUser, 
    logoutUser, 
    getUserProfile, 
    updateUserProfile, 
    getUsers, 
    deleteUser, 
    getUserById, 
    updateUser
 } from '../controllers/user.Controller.js'
 import { protect, admin } from '../middleware/authMiddleware.js'

const userRouter = Router()

userRouter.post('/login', authUser)
userRouter.route('/').post(registerUser).get(protect, admin, getUsers)
userRouter.post('/logout', logoutUser)
userRouter.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
userRouter.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser)

export default userRouter