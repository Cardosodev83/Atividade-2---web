const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const sequelize = new Sequelize({
  storage: ':memory:',
  dialect: 'sqlite',
  logging: false
});

const Elixir = sequelize.define('Elixir', {
  titulo: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT },
  imagem: { type: DataTypes.STRING },
  valor: { type: DataTypes.FLOAT, allowNull: false }
}, { timestamps: false });

const elixires = [
  { titulo: 'Elixir Blue Sky', descricao: 'Um elixir etéreo de cor azul celeste que traz clareza mental e serenidade.', imagem: 'https://i.ibb.co/ZzS7xb2/rsz-sky.png', valor: 300 },
  { titulo: 'Elixir do Perfume Misterioso', descricao: 'Seu aroma inebriante desperta memórias esquecidas e atrai olhares curiosos.', imagem: 'https://i.ibb.co/pyhZJXf/rsz-lilas.png', valor: 200 },
  { titulo: 'Elixir de Pinus', descricao: 'Destilado de pinheiros centenários, restaura vitalidade e cura dores profundas.', imagem: 'https://i.ibb.co/DkzdL1q/rsz-pinus.png', valor: 3000 },
  { titulo: 'Elixir da Beleza Eterna', descricao: 'Preserva a juventude e o brilho natural por tempo indeterminado.', imagem: 'https://i.ibb.co/9p872NK/rsz-1beleza.png', valor: 100 },
  { titulo: 'Elixir do Arco-Íris', descricao: 'Infunde alegria e esperança, deixando rastros coloridos onde você passa.', imagem: 'https://i.ibb.co/PrC09MP/rsz-2unicornio.png', valor: 120 },
  { titulo: 'Caldeirão das Verdades Secretas', descricao: 'Revela segredos ocultos e proporciona visões do passado e do futuro.', imagem: 'https://i.ibb.co/s9Lyvj8/rsz-verdades.png', valor: 150 }
];

app.get('/api/elixirs', async (req, res) => {
  const all = await Elixir.findAll();
  res.json(all);
});

app.post('/api/elixirs', async (req, res) => {
  const { titulo, descricao, imagem, valor } = req.body;
  const novo = await Elixir.create({ titulo, descricao, imagem, valor });
  res.status(201).json(novo);
});

app.delete('/api/elixirs/:id', async (req, res) => {
  await Elixir.destroy({ where: { id: req.params.id } });
  res.json({ msg: 'removido' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

sequelize.sync({ force: true })
  .then(() => Elixir.bulkCreate(elixires))
  .then(() => {
    app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
  });
