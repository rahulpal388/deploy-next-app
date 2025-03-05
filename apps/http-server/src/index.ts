import express from "express"
import { client } from "@repo/db/client"


const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hii there")
})

app.post("/signup", async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    try {
        await client.user.create({
            data: {
                username,
                password
            }
        })
        res.send("you are now added to the database")
    } catch (error) {
        res.status(505).send("error while adding the user")
    }

})


app.listen(8080)