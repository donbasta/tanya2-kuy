import { useEffect, useState, useContext } from "react";
import { SocketContext } from '../context/SocketContext';
import QuestionBox from "../components/QuestionBox";

interface IQuestion {
  sender: string;
  content: string;
}

const HostPage = () => {

  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const socketCtx = useContext(SocketContext);

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
    socketCtx.socket.on("showQuestion", appendQuestion);
  }, []);

  return (
    <div>
      Jumlah pertanyaan saat ini: {questions.length}
      {renderQuestions()}
    </div>
  );
}

export default HostPage;