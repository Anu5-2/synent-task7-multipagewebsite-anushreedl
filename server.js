const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/fullstackwebsite")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

const Contact = mongoose.model("Contact", {

    name: String,
    email: String,
    message: String

});

app.post("/contact", async (req, res) => {

    try {

        await Contact.create(req.body);

        res.send("Data Saved Successfully");

    } catch (error) {

        res.send("Error Saving Data");

    }

});

app.get("/contacts", async (req, res) => {

    const data = await Contact.find();

    res.json(data);

});

app.listen(3000, () => {

    console.log("Server Running On Port 3000");

});