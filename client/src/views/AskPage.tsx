import { io } from "socket.io-client";

import QuestionForm from "../components/QuestionForm";

const AskPage = () => {
  const socket = io();

  const handleSubmit = () => {
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