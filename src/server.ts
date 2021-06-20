import express from 'express';
import routes from 'routes';

const app = express();
app.use(routes);

app.listen(3333, () => {
  console.log('Servidor decolando na porta 3333! 🚀');
});
