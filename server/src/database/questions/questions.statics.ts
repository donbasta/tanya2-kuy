import { IQuestionModel, IQuestionDocument } from "../questions/questions.types"

export async function findOneOrCreate(
  this: IQuestionModel,
  {
    receiverUsername,
    question,
  }: { receiverUsername: string; question: string }
): Promise<IQuestionDocument> {
  return this.create({ receiverUsername, question });
}

export async function findByReceiverUsername(
  this: IQuestionModel, 
  username: string,
): Promise<IQuestionDocument[]> {
  return this.find({ username: username });
}