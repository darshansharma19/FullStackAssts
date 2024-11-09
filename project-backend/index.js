const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://dbuser:%40%4011@cluster0.zrjuj.mongodb.net/mydatabase?retryWrites=true&w=majority')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => console.error("Connection error", error));

// Simple route for root path
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Define a Project model
const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
});
const Project = mongoose.model('Project', projectSchema);

// Routes
app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

// Add a new project (for testing purposes)
app.post('/projects', async (req, res) => {
  const newProject = new Project(req.body);
  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ error: "Failed to add project" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
