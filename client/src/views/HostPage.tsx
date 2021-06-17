import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import QuestionBox from "../components/QuestionBox";

interface IQuestion {
  sender: string;
  content: string;
}

const HostPage = () => {

  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const socket = io(process.env.REACT_APP_BACKEND as any);

  const renderQuestions = () => {
    return (
      questions.map((question, idx) => {
        return (
          <QuestionBox key={idx} sender={question.sender} content={question.content}/>
        )
      })
    );
  }

  const appendQuestion = (newQuestion: IQuestion) => {
    setQuestions(q => [...q, newQuestion]);
  }

  useEffect(() => {
    console.log(questions.length, questions);
  }, [questions])

  useEffect(() => {
    socket.on("showQuestion", appendQuestion);
  });

  return (
    <div>
      Jumlah pertanyaan saat ini: {questions.length}
      {renderQuestions()}
    </div>
  );
}

export default HostPage;