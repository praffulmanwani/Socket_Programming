const webSocket = require("ws");
const wss = new webSocket.Server({port : 2000})
data = {
    text: ""
}
function each(client){
    if (client.readyState === webSocket.OPEN) {
        client.send(data.text);
      }
}
wss.on("connection",(ws) => {
    console.log("client log in");
    ws.send("hello prafful")
    ws.on("message" , (text) => {
        data.text = text
        wss.clients.forEach(each);
    })
    ws.on("close" , () => {
        console.log("client has disconnected")
    })
})
