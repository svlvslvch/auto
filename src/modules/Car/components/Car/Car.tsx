'use client';

import { FC } from 'react';
import { useFormatter, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Loader } from '@mantine/core';

import { useCar } from '@hooks/cars/useCars';

import { ICarProps } from './Car.props';

const Car: FC<ICarProps> = (props) => {
  const { id } = props;

  const t = useTranslations('Car');
  const format = useFormatter();

  const { isLoading, car } = useCar(id);

  return (
    <>
      <div className="Car relative mx-auto max-w-[1000px] rounded-lg bg-white p-4 md:p-6">
        {isLoading && !car ? (
          <div className="flex w-full items-center justify-center">
            <Loader className="mx-auto" color="blue" />
          </div>
        ) : car ? (
          <div className="">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-8">
              <h1 className="text-xl font-bold md:text-3xl">{`${car.brand} ${car.model}, ${car.year}`}</h1>
              <h2 className="text-xl font-bold md:text-3xl">{`${format.number(
                car.price,
                {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                  style: 'currency',
                  currency: 'RUB',
                }
              )}`}</h2>
            </div>

            <div className="mt-4 flex flex-col gap-6 md:mt-8 md:flex-row">
              <ul className="flex flex-col gap-3 font-medium md:w-80">
                <li className="flex gap-2 rounded-md bg-indigo-50 p-2 md:p-4">
                  <div className="w-32 text-gray-400">{t('Year')}</div>
                  <div>{car.year}</div>
                </li>

                <li className="flex gap-2 rounded-md bg-indigo-50 p-2 md:p-4">
                  <div className="w-32 text-gray-400">{t('Color')}</div>
                  <div>{car.color}</div>
                </li>

                <li className="flex gap-2 rounded-md bg-indigo-50 p-2 md:p-4">
                  <div className="w-32 text-gray-400">{t('Engine')}</div>
                  <div>{car.engineType}</div>
                </li>

                {car.powerReserve ? (
                  <li className="flex gap-2 rounded-md bg-indigo-50 p-2 md:p-4">
                    <div className="w-32 text-gray-400">
                      {t('Power reserve')}
                    </div>
                    <div>{car.powerReserve}</div>
                  </li>
                ) : (
                  <li className="flex gap-2 rounded-md bg-indigo-50 p-2 md:p-4">
                    <div className="w-32 text-gray-400">
                      {t('Transmission')}
                    </div>
                    <div>{car.transmission}</div>
                  </li>
                )}
              </ul>

              <div className="relative aspect-square flex-1">
                <Image
                  src={car.image}
                  fill
                  className="object-cover"
                  alt={`${car.brand} ${car.model}`}
                />
              </div>
            </div>
          </div>
        ) : (
          <div>{t('Sorry, the car was not found')}</div>
        )}
      </div>
    </>
  );
};

export default Car;
