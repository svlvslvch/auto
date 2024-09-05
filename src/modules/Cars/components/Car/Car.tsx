import { FC } from 'react';
import Image from 'next/image';
import { Link } from '@navigation/*';

import { ICarProps } from './Car.props';

const Car: FC<ICarProps> = (props) => {
  const { car } = props;

  return (
    <Link
      href={`/cars/${car.id}`}
      className="group flex cursor-pointer gap-4 rounded-lg px-2 py-4 hover:shadow-blackRound"
    >
      <div className="relative block h-36 w-52 overflow-hidden rounded-lg">
        <Image
          src={car.image}
          fill
          className="object-cover"
          alt={`${car.brand} ${car.model}`}
        />
      </div>

      <div>
        <h2 className="font-semibold group-hover:text-violet-600">{`${car.brand} ${car.model}`}</h2>
        <div className="font-medium">{car.year}</div>
      </div>
    </Link>
  );
};

export default Car;
