import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CidadesController } from './../controllers';

const router = Router();

router.get('/cidades', CidadesController.getAll);

router.get('/cidade/:id', CidadesController.getById);

router.post('/cidades', CidadesController.Create);

router.put('/cidade/:id', CidadesController.Update);

router.delete('/cidade/:id', CidadesController.Delete);

export { router };
