// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; // Adjust the import path as necessary

@Module({
  imports: [UsersModule], // Import the UsersModule here
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
