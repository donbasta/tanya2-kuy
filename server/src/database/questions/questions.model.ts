import { model } from 'mongoose';
import { IQuestionDocument, IQuestionModel } from './questions.types';
import QuestionSchema from './questions.schema';

export const QuestionModel = model<IQuestionDocument, IQuestionModel>("questions", QuestionSchema) as IQuestionModel;