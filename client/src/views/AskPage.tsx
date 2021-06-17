import { io } from "socket.io-client";

import QuestionForm from "../components/QuestionForm";

const AskPage = () => {
  const socket = io(process.env.REACT_APP_BACKEND as any);

  const handleSubmit = () => {
    console.log("test ke handleSubmit");
    socket.emit('askQuestion', {
      content: "test hard code message",
      sender: "donbasta"
    })
  }

  return (
    <div>
      <QuestionForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default AskPage;