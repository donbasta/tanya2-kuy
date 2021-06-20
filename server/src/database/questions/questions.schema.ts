import { Schema } from 'mongoose';

import { IQuestionModel, IQuestionDocument } from './questions.types';

import { findOneOrCreate, findByReceiverUsername } from './questions.statics';
import { setLastUpdated, updateIsAnswered } from './questions.methods';

const QuestionSchema = new Schema<IQuestionDocument, IQuestionModel>({
  receiverUsername: String,
  question: String,
  isAnswered: {
    type: Boolean,
    default: false
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  }
});

QuestionSchema.statics.findOneOrCreate = findOneOrCreate;
QuestionSchema.statics.findByReceiverUsername = findByReceiverUsername;
QuestionSchema.methods.setLastUpdated = setLastUpdated;
QuestionSchema.methods.updateIsAnswered = updateIsAnswered;

export default QuestionSchema;