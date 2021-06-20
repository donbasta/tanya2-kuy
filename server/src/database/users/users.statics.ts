import { IUserDocument, IUserModel } from "./users.types";

export async function findOneOrCreate(
  this: IUserModel,
  {
    username,
    password,
    email,
  }: { username: string; password: string; email: string }
): Promise<IUserDocument> {
  const record = await this.findOne({ username, password, email });
  if (record) {
    return record;
  } else {
    return this.create({ username, password, email });
  }
}

export async function findByUsernameContains(
  this: IUserModel,
  contains?: string,
): Promise<IUserDocument[]> {
  const regex = RegExp(`/.*${contains}.*/`);
  return this.find({ username: {$regex: regex}});
}