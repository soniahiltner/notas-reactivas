import User from "../schemas/user.js"

class UsersModel {
  static async getById(id) {
    try {
      const user = await User.findById(id)
      return user
    } catch (error) {
      console.log(`Error trying to get the user`, error)
    }
  }
}

export default UsersModel