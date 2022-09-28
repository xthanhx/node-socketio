import express from 'express'
import http from 'http';
import { Server } from "socket.io";
import cors from 'cors';
import bodyParser from 'body-parser';
import validateRegisterUser from '../middlewares/user/validateRegisterUser.js'
import register from '../controllers/register.js'
// import fs from 'fs';
export const app = express();
export const server = http.createServer(app);
export const io = new Server(server, {cors: {origin: "http://localhost:3001"}});

app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {  
   res.send('Welcome to JavaTpoint');  
})

app.post('/register',
  validateRegisterUser,
  register
)

// fs.readdir('./routers', (err, files) => {
//   files.forEach(file => {
//     if ( !file.includes('index.') && file.includes('.js') ) {
//       import(`./${file}`)
//     }
//   });
// })

io.on('connection', (socket) => {
  console.log('a user connected');
});
