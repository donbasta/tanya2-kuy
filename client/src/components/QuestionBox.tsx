import { FC } from 'react';

interface IQuestion {
  sender: string;
  content: string;
}

const QuestionBox: FC<IQuestion> = ({ sender, content }) => {
  return (
    <div>
      <h2>{ sender }</h2>
      <p>{ content }</p>
    </div>
  )
}

export default QuestionBox;