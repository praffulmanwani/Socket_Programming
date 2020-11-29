
const appendChild = (obj) => {
   const events =  document.getElementById("events");
   const li = document.createElement("li");
   li.innerHTML = obj
   events.appendChild(li);
   events.scrollTop = events.scrollHeight
}
const submit = (obj) => {
    // const event = document.getElementById("events")
    obj.preventDefault()
    const input = document.getElementById("chat");
    const text = input.value;
    input.value = "";
    ws.emit("message",text);

}
const chat = document.getElementById("chat-form");
chat.addEventListener("submit",submit)
const ws = io()

ws.addEventListener("open",() => {
    console.log("user connected")
})
ws.on("message" ,(obj) =>{
    appendChild(obj)
    // h.innerHTML = `<h2> ${obj.data} </h2>`;
})