export interface ICar {
  /**
   *
   */
  brand: string;
  /**
   *
   */
  color: string;
  /**
   *
   */
  engineType: string;
  /**
   *
   */
  id: number;
  /**
   *
   */
  image: string;
  /**
   *
   */
  model: string;
  /**
   *
   */
  price: number;
  /**
   *
   */
  powerReserve?: number;
  /**
   *
   */
  transmission?: string;
  /**
   *
   */
  year: number;
}

export interface IGetCarsParams {
  /**
   *
   */
  id?: number;
  /**
   *
   */
  sort?: string;
  /**
   *
   */
  color?: string;
  /**
   *
   */
  brand?: string;
  /**
   *
   */
  limit?: number;
}
