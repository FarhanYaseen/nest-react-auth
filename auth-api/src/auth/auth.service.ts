import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, name: string, password: string) {
    return this.usersService.create(email, name, password);
  }

  async signin(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      return { message: 'Login successful' };
    }
    throw new Error('Invalid credentials');
  }
}
