import { UserModel } from "../db/users/users.model";
import { connect, disconnect } from "../db/config";

const bcrypt = require('bcrypt');
const salt = 10;

const hashPasswordAsync = async (password: string) => {
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

(async () => {
  connect();
  const users = [
    { username: "donbasta", password: await hashPasswordAsync("aaaaaaab"), email: "faddilafarras@gmail.com" },
    { username: "satabond", password: await hashPasswordAsync("aaaaaaab"), email: "faddilafarras@gmail.com" },
    { username: "badot-san", password: await hashPasswordAsync("aaaaaaab"), email: "faddilafarras@gmail.com" },
  ];
  try {
    for (const user of users) {
      await UserModel.create(user);
      console.log(`Created user with username: ${user.username} and email: ${user.email}`);
    }
    disconnect();
  } catch (e) {
    console.error(e);
  }
})();