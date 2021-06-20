import { Document, Model } from 'mongoose';

export interface IQuestion {
  receiverUsername: string;
  question: string;
  isAnswered?: boolean;
  lastUpdated?: Date;
}

export interface IQuestionDocument extends IQuestion, Document {
  setLastUpdated: (this: IQuestionDocument) => Promise<void>;
  updateIsAnswered: (this: IQuestionDocument) => Promise<void>;
}

export interface IQuestionModel extends Model<IQuestionDocument> {
  findOneOrCreate: (
    this: IQuestionModel,
    {
      receiverUsername,
      question,
    }: { receiverUsername: string; question: string }
  ) => Promise<IQuestionDocument>;

  findByReceiverUsername: (
    this: IQuestionModel,
    username: string,
  ) => Promise<IQuestionDocument[]>;
}