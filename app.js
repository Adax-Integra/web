import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import helmet from 'helmet';
import expressLayouts from 'express-ejs-layouts';
import indexRoutes from './routes/index.routes.js';
import icons from './utils/icons.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT;

// Security headers
app.use(helmet({ contentSecurityPolicy: false }));

// View engine and layouts
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');
app.locals.icons = icons;

// Static files and body parsing
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', indexRoutes);

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page not found', hideFooter: true });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('Something went wrong');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});