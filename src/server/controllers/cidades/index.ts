import * as create from './create';
import * as get from './get';
import * as update from './update';
import * as Delete from './delete';

export const CidadesController = {
  ...create,
  ...get,
  ...update,
  ...Delete,
};
