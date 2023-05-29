import { Request, Response } from 'express';
import * as yup from 'yup';

interface ICidade {
  nome: string;
  estado: string;
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required()
});

export const Create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  let validatedDate: ICidade | undefined = undefined;
  
  try {
    validatedDate = await bodyValidation.validate(req.body);
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: {
        default: yupError.message,
      }
    });
  }

  console.log(validatedDate);

  return res.send('Create!');
};
