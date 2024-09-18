const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("backend/src/routes/userRoutes.js");
const authorRoutes = require("backend/src/routes/authorRoutes.js");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 2000;

app.use(express.json());

// Routes
app.use("/api", authorRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// app.use(express.json());

// app.get("/api", (req, res) => {
//     res.send("Selamat datang");
// })

// app.get("/user", async (req, res) => {
//     const user = await prisma.user.findMany();

//     res.send(user);
// });



// app.listen(PORT, () => {
//     console.log("Express API running in port: " + PORT);
// });
