import { Metadata, NextPage } from 'next';

import { Car } from '@modules/Car';

import { IPageParams } from '@shared/types';

export const metadata: Metadata = {
  title: 'Информация по автомобилю',
  description: 'Детальная информация по автомобилю',
};

const CarPage: NextPage<IPageParams> = ({ params }) => {
  return <Car id={Number(params.id)} />;
};

export default CarPage;
