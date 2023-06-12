import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware/validation';
import { StatusCodes } from 'http-status-codes';

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getByIdValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object().shape({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0),
    filter: yup.string().optional(),
  })),
}));

export const getById = (req: Request, res: Response) => {
  return res.send('GetById!');
};
