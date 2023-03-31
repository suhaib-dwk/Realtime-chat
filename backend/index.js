const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "646a9b08-63d8-42fd-b685-8a55e57ceae2 " } }
        )
        return res.status(r.status).json(r.data);
    } catch (err) {
        return res.status(e.response.status).json(e.response.data);
    }
    return res.json({ username: username, secret: "suh256.." });
});

app.listen(3001);