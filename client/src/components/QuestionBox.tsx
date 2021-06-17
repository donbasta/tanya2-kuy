import { FC } from 'react';

import './QuestionBox.css';

interface IQuestion {
  sender: string;
  content: string;
}

const QuestionBox: FC<IQuestion> = ({ sender, content }) => {
  return (
    <div className="question-container">
      <p>Pengirim: { sender }</p>
      <p>Pertanyaan: { content }</p>
    </div>
  )
}

export default QuestionBox;