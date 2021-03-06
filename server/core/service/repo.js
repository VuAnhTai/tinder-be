import { AppError } from '../errors';
import { Context } from '../../helpers/context';

/**
 * @export
 * @class CoreRepo
 */
export class CoreRepo {
  /**
   * Creates an instance of CoreRepo.
   * @param {*} model
   * @param {boolean} [filterByStore=false]
   * @param {string} [storeFieldName='stores']
   * @memberof CoreRepo
   */
  constructor(model) {
    if (typeof model.modelName === 'undefined') {
      throw new AppError('Incorrect model type');
    }

    this.model = model;
    this.context = new Context();
  }
}
