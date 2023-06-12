import { Request, Response } from 'express';

export const Delete = (req: Request, res: Response) => {
  return res.send('Delete!');
};
