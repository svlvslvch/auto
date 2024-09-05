import { NextResponse } from 'next/server';
import { chunk, find, orderBy, filter, includes } from 'lodash';

import { cars } from './cars';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get('id') || '';
  const sort = searchParams.get('sort') || '';
  const color = searchParams.get('color') || '';
  const brand = searchParams.get('brand') || '';
  const limit = searchParams.get('limit');
  const page = searchParams.get('page');

  if (id) {
    return NextResponse.json(find(cars, (car) => Number(id) === car.id) || []);
  }

  if (page && limit) {
    let _cars = cars;

    if (sort) {
      switch (sort) {
        case 'fresh-relevance':
          _cars = cars;
          break;
        case 'price-asc':
          _cars = orderBy(cars, ['price'], ['asc']);
          break;
        case 'price-desc':
          _cars = orderBy(cars, ['price'], ['desc']);
          break;
        case 'year-desc':
          _cars = orderBy(cars, ['year'], ['desc']);
          break;
        case 'year-asc':
          _cars = orderBy(cars, ['year'], ['asc']);
          break;
      }
    }

    if (color) {
      const colorsArray = color.split(',');

      _cars = filter(_cars, (car) => includes(colorsArray, car.color));
    }

    if (brand) {
      const brandsArray = brand.split(',');

      _cars = filter(_cars, (car) => includes(brandsArray, car.brand));
    }

    if (_cars.length > 0) {
      const chunks = chunk(_cars, Number(limit));

      return NextResponse.json(chunks[Number(page)]);
    }
  }

  return NextResponse.json([]);
}
