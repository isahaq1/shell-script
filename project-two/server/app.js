import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('Project Two API is running.....');
});

app.listen(
  3001,
  console.log(
    `Project Two server running  on port 3001`
  )
);
