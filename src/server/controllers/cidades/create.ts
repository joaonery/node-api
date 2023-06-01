import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware/validation';

interface ICidade {
  nome: string;
  estado: string;
}
interface IFilter {
  filter?: string;
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(3),
});
const queryValidation: yup.ObjectSchema<IFilter> = yup.object().shape({
  filter: yup.string().required().min(3),
});

export const createBodyValidation = validation('body', bodyValidation);
export const createQueryValidation = validation('query', queryValidation);

export const Create: RequestHandler = async (req: Request<{}, {}, ICidade>, res: Response) => {
  console.log(req.body);

  return res.send('Create!');
};
