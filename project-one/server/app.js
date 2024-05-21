import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('Project One API is running.....');
});

app.listen(
  3000,
  console.log(
    `Project One server running  on port 3000`
  )
);
