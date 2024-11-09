const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

mongoose.connect('mongodb+srv://dbuser:%40%4011@cluster0.zrjuj.mongodb.net/mydatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const projectSchema = new mongoose.Schema({
  id: Number,
  image: String,
  name: String,
  description: String,
});

const Project = mongoose.model('Project', projectSchema);

app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).send('Error fetching projects');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
