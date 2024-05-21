import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('Project Four API is running.....');
});

app.listen(
  3003,
  console.log(
    `Project Four server running  on port 3003`
  )
);
