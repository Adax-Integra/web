import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Adax Digitales' });
});

router.get('/adax-integra', (req, res) => {
  res.render('integra', { title: 'Adax Integra' });
});

router.get('/adax-integra/delete-data', (req, res) => {
  res.render('delete-data', { title: 'Eliminación de datos | Adax Integra' });
});

router.get('/aviso-de-privacidad', (req, res) => {
  res.render('aviso-de-privacidad', { title: 'Aviso de Privacidad' });
});

export default router;