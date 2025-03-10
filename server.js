const express = requiere("express");
const app = express();

const Port = process.env.Port || 3000;

app.listen(Port, () => console.log("Server started"))


