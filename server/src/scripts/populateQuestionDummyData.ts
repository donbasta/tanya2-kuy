import { QuestionModel } from "../database/questions/questions.model";
import { connect, disconnect } from "../database/config";

(async () => {
  connect();
  const dummyQuestions = [
    { receiverUsername: "donbasta", question: "Where do we come from?"},
    { receiverUsername: "satabond", question: "Where are we going?"},
    { receiverUsername: "satabond", question: "What are we?"},
    { receiverUsername: "badot-san", question: "1+1=..."},
    { receiverUsername: "badot-san", question: "Are you ok?"},
    { receiverUsername: "badot-san", question: "Subscribed, sir!"},
  ];
  try {
    for (const question of dummyQuestions) {
      await QuestionModel.create(question);
      console.log(`Created question addressed to: ${question.receiverUsername} asking: ${question.question}`);
    }
    disconnect();
  } catch (e) {
    console.error(e);
  }
})();