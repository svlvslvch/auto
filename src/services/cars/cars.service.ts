import { getCarsUrl } from '@config/api.config';

import { axiosClassic } from '@api/interceptors';

import { ICar, IGetCarsParams } from '@shared/types/cars/cars.types';
import { CARDS_LIMIT } from '@shared/constants/constants';

export const CarsService = {
  async getCars(prevOffset = 0, getParams: IGetCarsParams) {
    const { brand, color, sort = null, limit = null } = getParams;

    const params = {
      sort,
      limit: limit || CARDS_LIMIT,
      page: prevOffset,
      color: color || null,
      brand: brand || null,
    };

    const response = await axiosClassic.get<ICar[]>(getCarsUrl(), {
      params,
    });

    return { ...response, prevOffset };
  },

  async getCar(id: number) {
    return axiosClassic.get<ICar>(getCarsUrl(), {
      params: {
        id,
      },
    });
  },

  async getCarsColors() {
    return axiosClassic.get<string[]>(getCarsUrl('/colors'));
  },

  async getCarsBrands() {
    return axiosClassic.get<string[]>(getCarsUrl('/brands'));
  },
};
