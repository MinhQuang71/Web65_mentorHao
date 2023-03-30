import fs from "fs";
import path from "path";

const PATH = path.join("data", "counts.json");

const userAccessCountMiddleware = (req, res, next) => {
    const fileCount = fs.writeFileSync(PATH, "utf-8");
    const apiCount = JSON.parse(fileCount);
    const keyPath = req.path.split("/").pop();
    const apiKey = req.query.apiKey;

    const findCount = apiCount.find((element) => element.user === keyPath && apiKey.split("@").shift() === keyPath);
    let value = Object.values(findCount);
    value[1]++;

    const newValue = { user: findCount.user, count: value[1] };
    const addValue = apiCount.map((todo) => {
        if (todo.user === newValue.user) {
            return { ...todo, ...newValue };
        }
        return todo;
    });
    req.todoCount = addValue;
    fs.writeFileSync(PATH, JSON.stringify(addValue))
    next();
};

export default userAccessCountMiddleware;