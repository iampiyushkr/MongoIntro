const express = require("express")

const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/MoviesDB", {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

const app = express()
app.use(express.json())

const movieSchema = new mongoose.Schema({
    movie: { type: String, required: true },
    movie_genre: { type: String, required: true },
    year: { type: Number, required: true },
    budget: { type: Number, required: true },
}, {
    versionKey: false,
    timestamps: true
})

const Movie = mongoose.model("movie", movieSchema)

// app.get("/movies", async (req, res) => {
//     const movies = await Movie.find({ budget: { $gt: 9000 } }).lean().exec()
//     res.send(movies)
// })

// app.post("/movies", async (req, res) => {
//     const movie = await Movie.create(req.body)

//     res.status(201).json({ movie })
// })

// app.get("/movies/:id", async (req, res) => {
//     const movie = await Movie.findById(req.params.id).lean().exec()

//     res.status(200).json({ movie })
// })

// app.patch("/movies/:id", async (req, res) => {
//     const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     res.status(200).json(movie)
// })

// app.delete("/movies/:id", async (req, res) => {
//     const movie = await Movie.findByIdAndDelete(req.params.id)
//     res.status(200).json({ movie })
// })

app.listen(2244, async function () {
    await connect();
    console.log('Listening to port 2244')
})

