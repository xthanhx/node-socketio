import { app, server } from './routers/index.js'

app.listen(3000, () => {
  console.log('listening on *:3000');
});

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });