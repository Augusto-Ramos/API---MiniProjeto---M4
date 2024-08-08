const app = require('./app');
const port = 333;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
