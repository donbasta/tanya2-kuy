import { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

import QuestionForm from "../components/QuestionForm";
import { IQuestion } from '../types';

const AskPage = () => {
  const socketCtx = useContext(SocketContext);

  const handleSubmit = ({content, sender}: IQuestion) => {
    socketCtx.socket.emit('askQuestion', {
      content: content,
      sender: sender,
      uid: socketCtx.socket.id
    })
  }

  return (
    <div>
      <QuestionForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default AskPage;