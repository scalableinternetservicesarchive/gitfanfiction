import { User } from '../../server/src/entities/User'



//adding sql from orm example
export module server_example_code {
  export const addUser = async () => {
    const user = new User()
    user.name = "dummy"
    user.password = "dum_password"
    user.email = "dummy@dummy.com"
    await User.save(user).then(s => console.log('saved user ' + s.id))
    return
  }
}