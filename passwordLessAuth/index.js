import express from 'express';

const PORT = 3000 || 0;
const app = express();

app.use(express.static("./public"));
app.use(express.json());

const userStore = {}

app.post("./register", (req, res) => {
    const{username, password} = req.body;
    const id = `user_${Date.now()}`

const user = {
    id,
    username,
    password
}

userStore[id] = user;
console.log("user registered successfully");
return res.json({ id });

})

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
