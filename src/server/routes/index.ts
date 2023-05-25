import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/teste', (_, res) => {
  return res.send('Olá, Dev! (GET)');
});

router.post('/teste', (req, res) => {
  console.log(req.body);

  return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

router.put('/teste', (req, res) => {
  return res.send('Olá, Dev! (PUT)');
});

router.delete('/teste', (req, res) => {
  return res.send('Olá, Dev! (DELETE)');
});

export { router };
