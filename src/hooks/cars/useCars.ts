import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import reduce from 'lodash/reduce';

import { CarsService } from '@services/cars/cars.service';

import { ICar, IGetCarsParams } from '@shared/types/cars/cars.types';

import { CARDS_LIMIT } from '@shared/constants/constants';

export const useCars = (params: IGetCarsParams) => {
  const { data, fetchNextPage, hasNextPage, isLoading, status, refetch } =
    useInfiniteQuery({
      queryKey: ['get cars', params],
      queryFn: ({ pageParam }) => {
        return CarsService.getCars(pageParam, params);
      },
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        if (lastPage.data.length < CARDS_LIMIT) {
          return undefined;
        }

        return lastPage.prevOffset + 1;
      },
    });

  return { data, fetchNextPage, hasNextPage, isLoading, status, refetch };
};

export const useCar = (id: number) => {
  const { isLoading, data: car } = useQuery({
    queryKey: ['get car', id],
    queryFn: () => {
      return CarsService.getCar(id);
    },
    enabled: Boolean(id),
    select: ({ data }): ICar => data,
  });

  return { isLoading, car };
};
