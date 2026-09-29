require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const Note = require("./models/Note");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// EJS
app.set("view engine", "ejs");

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });


// ==========================
// READ - Display all notes
// ==========================

app.get("/", async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });

        res.render("index", { notes });

    } catch (error) {
        console.log(error);
        res.status(500).send("Error loading notes");
    }
});


// ==========================
// CREATE - Add a new note
// ==========================

app.post("/notes", async (req, res) => {
    try {
        const { title, content } = req.body;

        await Note.create({
            title: title,
            content: content
        });

        res.redirect("/");

    } catch (error) {
        console.log(error);
        res.status(500).send("Error creating note");
    }
});


// ==========================
// READ - Open edit page
// ==========================

app.get("/notes/edit/:id", async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).send("Note not found");
        }

        res.render("edit", { note });

    } catch (error) {
        console.log(error);
        res.status(500).send("Error loading note");
    }
});


// ==========================
// UPDATE - Update a note
// ==========================

app.post("/notes/update/:id", async (req, res) => {
    try {
        const { title, content } = req.body;

        await Note.findByIdAndUpdate(
            req.params.id,
            {
                title: title,
                content: content
            },
            {
                new: true
            }
        );

        res.redirect("/");

    } catch (error) {
        console.log(error);
        res.status(500).send("Error updating note");
    }
});


// ==========================
// DELETE - Delete a note
// ==========================

app.post("/notes/delete/:id", async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);

        res.redirect("/");

    } catch (error) {
        console.log(error);
        res.status(500).send("Error deleting note");
    }
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});