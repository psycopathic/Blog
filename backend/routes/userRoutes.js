import express from "express";

const router = express.Router();

router.get("/register", (req, res) => {
    res.json({
        message: "register route",
    });
});

export default router;