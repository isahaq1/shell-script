import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('Project Three API is running.....');
});

app.listen(
  3002,
  console.log(
    `Project Three server running  on port 3002`
  )
);
