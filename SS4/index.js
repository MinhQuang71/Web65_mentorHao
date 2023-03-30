import express from "express";
import todoRouter from "./routes/todoRouter.js";

const app = express();
const PORT = 8080;

app.use("/api/v1/todos", todoRouter);


app.listen(PORT,()=>{
    console.log(`server is listening on http://localhost:${PORT}`);
})