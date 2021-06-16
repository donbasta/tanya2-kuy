let socket = io();

let questions = document.getElementById('questions');

socket.on('showQuestion', (question) => {
    console.log("tesuto");
    let item = document.createElement('li');
    item.textContent = `From ${question.sender}: ${question.content}`;
    questions.appendChild(item);
});