import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { locales } from './navigation';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const handleI18nRouting = createMiddleware({
    locales: locales,
    defaultLocale: 'ru',
    localePrefix: 'as-needed',
  });

  const token = request.cookies.get('accessToken')?.value;

  const allowedRoutesAuth = ['/add-car', '/ru/add-car'];

  const isRouteAllowedAuth = allowedRoutesAuth.some(
    (prefix) => pathname === prefix
  );

  if (!token) {
    if (isRouteAllowedAuth) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    return handleI18nRouting(request);
  }

  if (token) {
    const response = handleI18nRouting(request);
    return response;
  }
}

export const config = {
  // Исключения для интернационализации
  matcher: [
    '/((?!api|_next|shared|store|services|providers|hooks|utils|config|.*\\..*).*)',
  ],
};
