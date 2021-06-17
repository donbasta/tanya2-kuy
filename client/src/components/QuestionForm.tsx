import { useState, FC, ChangeEvent } from 'react';

interface IQuestion {
  sender: string;
  content: string;
}

interface ISubmitForm {
  onSubmit: (arg: IQuestion) => void;
}

const QuestionForm: FC<ISubmitForm> = ({ onSubmit }) => {

  const [sender, setSender] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSender(e.target.value);
  }

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }

  return (
    <div>
      <input className="input-message" autoComplete="off" onChange={handleSenderChange} />
      <input className="input-message" autoComplete="off" onChange={handleContentChange}/>
      <button onClick={() => onSubmit({sender, content})}>Submit</button>
    </div>
  )
}

export default QuestionForm;