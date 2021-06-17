export interface IQuestion {
  content: string;
  sender: string;
}

export interface ISubmitForm {
  onSubmit: (arg: IQuestion) => void;
}

export interface ISocketContext {
  socket: any
}