import { Document, Model } from 'mongoose';

export interface IUser {
  username: string;
  password: string;
  email: string;
  lastUpdated?: Date;
}

export interface IUserDocument extends IUser, Document {
  setLastUpdated: (this: IUserDocument) => Promise<void>;
  samePassword: (this: IUserDocument) => Promise<Document[]>;
}

export interface IUserModel extends Model<IUserDocument> {
  findOneOrCreate: (
    this: IUserModel,
    {
      username,
      password,
      email,
    }: { username: string; password: string; email: string }
  ) => Promise<IUserDocument>;

  findByUsernameContains: (
    this: IUserModel,
    contains?: string,
  ) => Promise<IUserDocument[]>;
}