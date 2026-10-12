import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Adax Digitales' });
});

router.get('/aviso-de-privacidad', (req, res) => {
  res.render('aviso-de-privacidad', { title: 'Aviso de Privacidad' });
});

export default router;