const express = require("express");
const router = express.Router();

router.get("/findUsers", (req,res) => {
    res.send("listUsers");
})

module.exports = router;