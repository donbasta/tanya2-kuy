import { FC } from 'react';

interface ISubmitForm {
  onSubmit: () => void;
}

const QuestionForm: FC<ISubmitForm> = ({ onSubmit }) => {
  return (
    <div>
      <input className="input-message" autoComplete="off" />
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default QuestionForm;