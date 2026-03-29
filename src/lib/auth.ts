// Enhanced authentication system with role-based access
export interface User {
  id: string;
  email: string;
  name: string;
  type: 'user' | 'company';
  createdAt: Date;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

class EnhancedAuthService {
  private users: User[] = [];
  private currentUser: User | null = null;

  constructor() {
    // Initialize with test users
    this.users.push(
      {
        id: '1',
        email: 'lokesh@gmail.com',
        name: 'Lokesh',
        type: 'user',
        createdAt: new Date()
      },
      {
        id: '2',
        email: 'company@himorix.com',
        name: 'Himorix Company',
        type: 'company',
        createdAt: new Date()
      }
    );
  }

  async login(email: string, password: string): Promise<User> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = this.users.find(u => u.email === email);
    
    if (!user) {
      throw new Error('User not found');
    }

    // For demo, accept email as password
    if (password !== email) {
      throw new Error('Invalid credentials');
    }

    this.currentUser = user;
    
    // Store in localStorage for persistence
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    return user;
  }

  async signup(name: string, email: string, password: string, type: 'user' | 'company'): Promise<User> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if user already exists
    if (this.users.find(u => u.email === email)) {
      throw new Error('User already exists');
    }

    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      type,
      createdAt: new Date()
    };

    this.users.push(newUser);
    this.currentUser = newUser;
    
    // Store in localStorage
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    return newUser;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User | null {
    // Check localStorage first
    if (!this.currentUser) {
      const stored = localStorage.getItem('currentUser');
      if (stored) {
        this.currentUser = JSON.parse(stored);
      }
    }
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

  isCompany(): boolean {
    const user = this.getCurrentUser();
    return user?.type === 'company';
  }

  isRegularUser(): boolean {
    const user = this.getCurrentUser();
    return user?.type === 'user';
  }

  // Get all users for admin panel
  getAllUsers(): User[] {
    return this.users;
  }

  // Get users by type
  getUsersByType(type: 'user' | 'company'): User[] {
    return this.users.filter(u => u.type === type);
  }
}

export const authService = new EnhancedAuthService();
