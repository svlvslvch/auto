import { useQuery } from '@tanstack/react-query';

import { CarsService } from '@services/cars/cars.service';

export const useCarsColors = () => {
  const { isLoading: isLoadingColors, data: colors } = useQuery({
    queryKey: ['get cars colors'],
    queryFn: () => {
      return CarsService.getCarsColors();
    },
    select: ({ data }): string[] => data,
  });

  return { isLoadingColors, colors: colors || [] };
};
