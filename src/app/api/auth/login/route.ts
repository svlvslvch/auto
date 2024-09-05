import { NextResponse } from 'next/server';

import { IUser } from '@shared/types/user/user.types';

interface IUsers {
  [key: string]: IUser;
}

const users: IUsers = {
  test: {
    image:
      'https://img.freepik.com/free-photo/close-up-elder-cartoon-character-portrait_23-2150964401.jpg',
    password: '111111',
    username: 'test',
  },
};

export async function POST(request: Request) {
  const { login, password } = await request.json();

  if (users[login] && users[login].password === password) {
    return NextResponse.json({ success: true, user: users[login] });
  }

  if (users[login]) {
    return NextResponse.json(
      { success: false, message: 'Wrong password' },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { success: false, message: 'User not found' },
    { status: 400 }
  );
}
