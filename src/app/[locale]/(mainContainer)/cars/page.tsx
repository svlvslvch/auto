import { Metadata, NextPage } from 'next';

import { Cars } from '@modules/Cars';

import { IPageParams } from '@shared/types';

export const metadata: Metadata = {
  title: 'Список автомобилей',
  description: 'Список автомобилей',
};

const CarsPage: NextPage<IPageParams> = ({ searchParams }) => {
  return <Cars searchParams={searchParams} />;
};

export default CarsPage;
