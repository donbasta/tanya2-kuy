import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import QuestionBox from "../components/QuestionBox";

interface IQuestion {
  sender: string;
  content: string;
}

const HostPage = () => {

  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const socket = io();

  const renderQuestions = () => {
    questions.map((question) => {
      return (
        <QuestionBox sender={question.sender} content={question.content}/>
      )
    })
  }

  const appendQuestion = (question: IQuestion) => {
    setQuestions(q => [...q, question]);
  }

  useEffect(() => {
    socket.on("showQuestion", appendQuestion);
  });

  return (
    <div>
      {renderQuestions()};
    </div>
  );
}

export default HostPage;