import express, { response } from 'express';
import crypto from "node:crypto";
import {
    generateRegistrationOptions,
    verifyRegistrationResponse,
    generateAuthenticationOptions
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

    if (!userStore[userId]) {
        console.log("user not found!");
        
        return res.status(404).json({ error: "user not found!" })
    }

    const user = userStore[userId];
    const challengePayload = await generateRegistrationOptions({
        rpID: 'localhost',
        rpName: 'My localhost',
        userName: user.username,
    })
    
    challengeStore[userId] = challengePayload.challenge
    return res.json({ options: challengePayload })
})

app.post('/register-verification', async(req, res) => {
    const { userId, cred } = req.body;

    if (!userStore[userId]) {
        console.log("user not found!");

        return res.status(404).json({ error: "user not found!" })
    }

    const user = userStore[userId];
    const challenge = challengeStore[userId]

    const verificationResult = await verifyRegistrationResponse({
        expectedChallenge: challenge,
        expectedOrigin: "http://localhost:3000",
        expectedRPID: "localhost",
        response: cred,
    })
    if (!verificationResult.verified) {
        console.log("user not verified!");

        return res.status(404).json({ error: "user not verified!" })
    }
    userStore[userId].passkey = verificationResult.registrationInfo;
    return res.json({ verified: true })
})

app.post("/login-challenge", async (req, res) => {
    const { userId } = req.body;

    if (!userStore[userId]) {
        console.log("user not found!");

        return res.status(202).json({ error: "user not found!" })
    }
    const opt = await generateAuthenticationOptions({
        rpID: "localhost",
    })

    challengeStore[userId] = opt.challenge;
    return res.json({ options: opt })
})

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
