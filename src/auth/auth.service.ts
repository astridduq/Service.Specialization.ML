import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findByUsername(username);
        if (user) {
            console.log(`Found user: ${JSON.stringify(user)}`);
            const isValid = await this.userService.validatePassword(password, user.password);
            if (isValid) {
                const { password, ...result } = user;
                return result;
            }
        }
        return null;
    }

    async generateToken(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}