import { useQuery } from '@tanstack/react-query';

import { CarsService } from '@services/cars/cars.service';

export const useCarsBrands = () => {
  const { isLoading: isLoadingBrands, data: brands } = useQuery({
    queryKey: ['get cars brands'],
    queryFn: () => {
      return CarsService.getCarsBrands();
    },
    select: ({ data }): string[] => data,
  });

  return { isLoadingBrands, brands: brands || [] };
};
