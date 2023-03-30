import express from "express";
import addPathMiddleware from "../middlewares/addPathMiddleware.js";
import userAccessCountMiddleware from "../middlewares/userAccessCountMiddleware.js";
const todoRouter = express.Router();

todoRouter.get("/alice",addPathMiddleware,userAccessCountMiddleware, (req, res) => {
    try {
        res.status(200).json({
            message: "Read Success!",
            data: req.todoCount
        })
    } catch (error) {
        res.status(500).json({
            message: "Read Fail!",
            data: null
        })
    }
});

todoRouter.get("/bob",addPathMiddleware,userAccessCountMiddleware, (req, res) => {
    try {
        res.status(200).json({
            message: "Read Success!",
            data: req.todoCount
        })
    } catch (error) {
        res.status(500).json({
            message: "Read Fail!",
            data: null
        })
    }
});

todoRouter.get("/charlie",addPathMiddleware,userAccessCountMiddleware, (req, res) => {
    try {
        res.status(200).json({
            message: "Read Success!",
            data: req.todoCount
        })
    } catch (error) {
        res.status(500).json({
            message: "Read Fail!",
            data: null
        })
    }
})

export default todoRouter;