import { Request, Response } from 'express';

export const getAll = (req: Request, res: Response) => {
  return res.send('GetAll!');
};

export const getById = (req: Request, res: Response) => {
  return res.send('GetById!');
};
