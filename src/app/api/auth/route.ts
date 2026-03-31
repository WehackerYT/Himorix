import { NextRequest, NextResponse } from 'next/server';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  type: 'user' | 'company';
  createdAt: string;
}

interface StoredUser extends AuthUser {
  password: string;
}

// Server-side in-memory user store — shared across all requests
const users: StoredUser[] = [
  {
    id: '1',
    email: 'lokesh@gmail.com',
    name: 'Lokesh',
    type: 'user',
    password: 'lokesh@gmail.com',
    createdAt: '2026-03-28T10:00:00.000Z',
  },
  {
    id: '2',
    email: 'company@himorix.com',
    name: 'Himorix Company',
    type: 'company',
    password: 'company@himorix.com',
    createdAt: '2026-03-28T10:00:00.000Z',
  },
];

let nextId = 100; // User IDs start from 100

export async function GET() {
  return NextResponse.json(users.map(({ password: _p, ...u }) => u));
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (body.action === 'login') {
    const { email, password } = body;
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) return NextResponse.json({ error: 'No account found with this email' }, { status: 401 });
    if (user.password !== password) return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
    const { password: _p, ...safeUser } = user;
    return NextResponse.json({ ok: true, user: safeUser });
  }

  if (body.action === 'signup') {
    const { name, email, password, type = 'user' } = body;

    if (!name?.trim()) return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    if (!email?.trim()) return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    if (!password || password.length < 6) return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 });

    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json({ error: 'An account with this email already exists' }, { status: 409 });
    }

    const newUser: StoredUser = {
      id: String(nextId++),
      email: email.trim(),
      name: name.trim(),
      type,
      password,
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);

    const { password: _p, ...safeUser } = newUser;
    return NextResponse.json({ ok: true, user: safeUser });
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
}
