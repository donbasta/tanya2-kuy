import { FC } from 'react';

interface IQuestion {
  sender: string;
  content: string;
}

const QuestionBox: FC<IQuestion> = ({ sender, content }) => {
  return (
    <div>
      <p>Pengirim: { sender }</p>
      <p>Pertanyaan: { content }</p>
    </div>
  )
}

export default QuestionBox;