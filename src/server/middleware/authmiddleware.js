import jwt from "jsonwebtoken"

const secret = process.env.VITE_TOKEN_SECRET

export const authMiddleware = (req, res, next) => {
  const { token } = req.cookies
  //console.log(req.cookies)

  if (!token) {
    return res.status(401).json({
      messsage: 'No token, authorization denied'
    })
  }

  //console.log(token)
  jwt.verify(token, secret, (err, user) => {
    if (err) return res.status(401).json({ message: 'Invalid token' })

    //console.log(user)
    //Save user in req.user
    req.user = user
    next()
  })
}