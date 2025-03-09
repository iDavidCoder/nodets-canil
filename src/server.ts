import express from 'express';
import mustache from 'mustache-express';
import path from 'path';
import dotenv from 'dotenv';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(mainRoutes);

server.use((req, res) => {
    res.send('Pagina não encontrada.')
})

server.use(express.static(path.join(__dirname, '../public')));

server.get('/teste', (req, res) => {
    res.json({sucess: 'oi'});
})

server.listen(process.env.PORT, () => { console.log(`Server is Running in Port ${process.env.PORT}`)});