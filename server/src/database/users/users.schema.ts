import { Schema } from 'mongoose';

import { findByUsernameContains, findOneOrCreate } from './users.statics';
import { setLastUpdated, samePassword } from './users.methods';
import { IUserModel, IUserDocument } from './users.types';

const UserSchema = new Schema<IUserDocument, IUserModel>({
  username: String,
  password: String,
  email: String,
  lastUpdated: {
    type: Date, 
    default: new Date()
  }
});

UserSchema.statics.findOneOrCreate = findOneOrCreate;
UserSchema.statics.findByUsernameContains = findByUsernameContains;
UserSchema.methods.setLastUpdated = setLastUpdated;
UserSchema.methods.samePassword = samePassword;

export default UserSchema;