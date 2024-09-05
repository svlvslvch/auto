import { NextResponse } from 'next/server';
import map from 'lodash/map';
import uniq from 'lodash/uniq';

import { cars } from '../cars';

export async function GET() {
  return NextResponse.json(uniq(map(cars, 'color')));
}
