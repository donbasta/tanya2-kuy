let socket = io();

let form = document.getElementById('form-message');
let input = document.getElementById('input-message');
let sender = document.getElementById('input-sender');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        console.log("anjing");
        socket.emit('askQuestion', {
            content: input.value,
            sender: sender.value,
        });
    }
});