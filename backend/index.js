require('dotenv').config();
const express = require("express");
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, 
        secret: username,
        first_name: username},
        {headers: {"private-key": process.env.CHAT_ENGINE_PRIVATE_KEY}}
    );
    return res.status(r.status).json(r.data);

  } catch(error){
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return res.status(error.response.status).json(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
        return res.status(500).json({ error: 'No response from server' });
  }
}});

app.listen(3001);