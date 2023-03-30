import path from "path";
import fs from "fs";


const addPathMiddleware = (req, res, next) => {
  const fileKey = fs.readFileSync(path.join("data", "apiKey.json"), "utf-8");
  const api_key = JSON.parse(fileKey);


  const apiKey = req.query.apiKey;
  const keyPath = req.path.split("/").pop();
  const isChecket = api_key.some((todo) => {
        if (apiKey === todo.apiKey && apiKey.split('@').shift() === keyPath) {
        return true;
     }
     });
        if(!isChecket) (res.status(401).send("API Key required"));
        next();
};

export default addPathMiddleware;