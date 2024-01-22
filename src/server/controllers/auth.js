import bcrypt from "bcrypt"
import { createAccessToken } from '../libs/jwt.js'
import User from "../schemas/user.js"
import jwt from 'jsonwebtoken'
const secret = process.env.VITE_TOKEN_SECRET

export class AuthController {
  // Register new user
  static async register(req, res) {
    const { username, password } = req.body
    try {
      // Validate user
      const userFound = await User.findOne({ username })
      if (userFound) {
        return res.status(400).json({ message: 'Invalid username' })
      }
      // Hash password
      const hash = await bcrypt.hash(password, 10)
      // Create new user
      const newUser = new User({ username, password: hash })
      const savedUser = await newUser.save()
      // Token
      const token = await createAccessToken({
        id: savedUser._id
      })
      //Save in cookie
      res.cookie('token', token)
      // Enviamos la respuesta
      return res.status(201).json({
        id: savedUser._id,
        username: savedUser.username
      })

    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  // Login user
  static async login(req, res) {
    const { username, password } = req.body
    try {
      // Validate user
      const userFound = await User.findOne({ username })
      if (!userFound) {
        return res.status(400).json({ message: 'Invalid username' })
      }
      // Validate password
      const validPassword = await bcrypt.compare(password, userFound.password)
      if (!validPassword) {
        return res.status(400).json({ message: 'Invalid password' })
      }
      // Token
      const token = await createAccessToken({
        id: userFound._id
      })
      //Save in cookie
      res.cookie('token', token)
      // Enviamos la respuesta
      return res.status(200).json({
        id: userFound._id,
        username: userFound.username
      })

    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  // Logout user
  static async logout(req, res) {
    try {
      res.clearCookie('token')
      res.json({ message: 'Logout' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  // Verify token
  static async verifyToken(req, res) {
    const { token } = req.cookies

    if (!token) return res.status(401).json({ message: 'Unauthorized' })

    jwt.verify(token, secret, async (err, user) => {
      if (err) {
        return res.status(401).json({
          message: 'Unauthorized'
        })
      }
      const userFound = await User.findById(user._id)
      if (!userFound) return res.status(401).json({
        message: 'Unauthorized'
      })
      return res.status(200).json({
        id: userFound._id,
        username: userFound.username
      })
    }) 
  }
}

