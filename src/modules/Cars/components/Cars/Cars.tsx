'use client';

import { FC, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Loader, MultiSelect, Select } from '@mantine/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import map from 'lodash/map';

import { useCars } from '@hooks/cars/useCars';
import { useUrlParams } from '@hooks/useUrlParams/useUrlParams';
import { useCarsColors } from '@hooks/cars/useCarsColors';
import { useCarsBrands } from '@hooks/cars/useCarsBrands';

import Car from '../Car/Car';

import { ICarsProps } from './Cars.props';

const Cars: FC<ICarsProps> = (props) => {
  const { searchParams } = props;

  const t = useTranslations('Cars');
  const { setQueryParam, removeQueryParam } = useUrlParams();

  const searchColor = searchParams.color || '';
  const searchBrand = searchParams.brand || '';
  const searchSort = searchParams.sort || 'fresh-relevance';

  const [color, setColor] = useState(searchColor);
  const [brand, setBrand] = useState(searchBrand);
  const [sort, setSort] = useState(searchSort);

  const { cars, fetchNextPage, hasNextPage, status } = useCars({
    brand,
    color,
    sort,
  });

  const { colors } = useCarsColors();
  const { brands } = useCarsBrands();

  useEffect(() => {
    if (color) {
      setQueryParam('color', color);
    } else {
      removeQueryParam('color');
    }
  }, [color]);

  useEffect(() => {
    if (brand) {
      setQueryParam('brand', brand);
    } else {
      removeQueryParam('brand');
    }
  }, [brand]);

  useEffect(() => {
    setQueryParam('sort', sort);
  }, [sort]);

  return (
    <>
      <div className="flex flex-col gap-2 md:flex-row">
        <MultiSelect
          className="w-full md:w-56"
          classNames={{
            pillsList: 'scrollbar-hide',
          }}
          placeholder={brand ? '' : 'Марка'}
          defaultValue={brand ? brand.split(',') : []}
          data={brands}
          onChange={(value) => setBrand(String(value))}
          styles={{
            pillsList: {
              display: 'flex',
              flexWrap: 'nowrap',
              overflow: 'scroll',
            },
          }}
        />

        <MultiSelect
          className="w-full md:w-56"
          classNames={{
            pillsList: 'scrollbar-hide',
          }}
          placeholder={color ? '' : 'Цвет'}
          defaultValue={color ? color.split(',') : []}
          data={colors}
          onChange={(value) => setColor(String(value))}
          styles={{
            pillsList: {
              display: 'flex',
              flexWrap: 'nowrap',
              overflow: 'scroll',
            },
          }}
        />
      </div>

      <Select
        allowDeselect={false}
        className="mt-2 md:w-56"
        defaultValue={sort}
        data={[
          { label: t('By relevance'), value: 'fresh-relevance' },
          { label: t('Ascending price'), value: 'price-asc' },
          { label: t('Descending price'), value: 'price-desc' },
          { label: t('By year: newer'), value: 'year-desc' },
          { label: t('By year: older'), value: 'year-asc' },
        ]}
        onChange={(value) => setSort(String(value))}
      />

      {status === 'success' ? (
        <InfiniteScroll
          next={fetchNextPage}
          className="mt-3"
          hasMore={Boolean(hasNextPage)}
          loader={<Loader className="mx-auto" color="blue" />}
          dataLength={cars.length}
          hasChildren
        >
          {cars.length > 0 ? (
            <div className="Cars grid grid-cols-1 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
              {map(cars, (car) => {
                return <Car key={car.id} car={car} />;
              })}
            </div>
          ) : (
            <div className="mx-auto mt-8 w-fit font-semibold">
              {t('Sorry, there are no matches')}
            </div>
          )}
        </InfiniteScroll>
      ) : (
        <Loader className="mx-auto block" color="blue" />
      )}
    </>
  );
};

export default Cars;
