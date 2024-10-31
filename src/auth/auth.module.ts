import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
        secret: 'yourSecretKey', // Replace with your own secret key
        signOptions: { expiresIn: '60m' },
      }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}