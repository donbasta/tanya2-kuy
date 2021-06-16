import React from "react";
import { useEffect } from "react";
import { io } from "socket.io-client";

const QuestionPage = () => {

  useEffect(() => {
    const socket = io();

    

  });

  const renderQuestions = () => {

  }



  return (
    <div>
      {renderQuestions()};
    </div>
  )
}

export default QuestionPage;