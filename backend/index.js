import { app, server } from './routers/index.js'
import cors from 'cors';
app.use(cors({origin: '*'}));
server.listen(3000, () => {
  console.log('listening on *:3000');
});