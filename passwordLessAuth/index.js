import express from 'express';
import crypto from "node:crypto";
import {
    generateRegistrationOptions,
    // verifyRegistrationResponse
} from '@simplewebauthn/server';

if (!globalThis.crypto) {
    globalThis.crypto = crypto;
}

const PORT = 3000 || 0;
const app = express();

app.use(express.static("./public"));
app.use(express.json());

const userStore = {}
const challengeStore = {}

app.post("/register", (req, res) => {
    const { username, password } = req.body;
    const Id = `user_${Date.now()}`

    const user = {
        Id,
        username,
        password
    }

    userStore[Id] = user;
    console.log("user registered successfully", userStore[Id]);
    return res.json({ Id });

})

app.post("/register-challenge", async (req, res) => {
    const { userId } = req.body;

    // console.log(req.body);
// })
// app.post("/register-challenge", async (error, req, res, next) => {
//     const { userId } = req.body;
//     console.log(userId);
    

    if (!userStore[userId]) return res.status(404).json({ error: "user not found!" })

    const user = userStore[userId];
    const challengePayload = await generateRegistrationOptions({
        rpId: 'localhost',
        rpName: 'My localhost',
        username: user.username,
    })
    
    console.log(challengePayload);
    
    challengeStore[userId] = challengePayload.challenge
    return res.json({ options: challengePayload })
})

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
