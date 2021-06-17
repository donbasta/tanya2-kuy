import { io } from "socket.io-client";

import QuestionForm from "../components/QuestionForm";

interface IQuestion {
  content: string;
  sender: string;
}

const AskPage = () => {
  const socket = io(process.env.REACT_APP_BACKEND as any);

  const handleSubmit = ({content, sender}: IQuestion) => {
    console.log("test ke handleSubmit");
    socket.emit('askQuestion', {
      content: content,
      sender: sender
    })
  }

  return (
    <div>
      <QuestionForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default AskPage;