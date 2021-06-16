import { io } from "socket.io-client";

import QuestionForm from "../components/QuestionForm";

const SOCKET_URL = "http://localhost:3001";

const AskPage = () => {
  const socket = io(SOCKET_URL);

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