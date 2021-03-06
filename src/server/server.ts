import express from 'express';
import config from 'config';
const path = require('path')

const app = express();

const serverConfig = config.get('server');

app.use(express.static(path.join('./', 'dist')));

app.get('/api', (req, res) => {
  res.send({data: 'test'});
})

app.get('*', function (req, res) {
  res.sendFile(path.join('./', 'dist', 'index.html'))
})

app.listen(serverConfig.port, ()=> {
  console.log(`server starting -> [port] ${serverConfig.port} [env] ${process.env.NODE_ENV}`);
})
