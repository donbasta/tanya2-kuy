import { FC } from 'react';

import { IQuestion } from '../types';

import './QuestionBox.css';

const QuestionBox: FC<IQuestion> = ({ sender, content }) => {
  return (
    <div className="question-container">
      <p>Pengirim: { sender }</p>
      <p>Pertanyaan: { content }</p>
    </div>
  )
}

export default QuestionBox;