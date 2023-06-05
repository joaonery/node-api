import { Router } from 'express';

import { CidadesController } from './../controllers';

const router = Router();

router.post(
  '/cidades',
  CidadesController.createValidation,
  CidadesController.create
);

router.get(
  '/cidades',
  CidadesController.getAllValidation,
  CidadesController.getAll
);

router.get(
  '/cidade/:id',
  CidadesController.getByIdValidation,
  CidadesController.getById
);

router.put('/cidade/:id', CidadesController.Update);

router.delete('/cidade/:id', CidadesController.Delete);

export { router };
