const socket = new WebSocket("ws://localhost:3000/chat");

socket.addEventListener("message", event => {
  console.log(event.data);
})

