import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    login(email: string, password: string) {
        return {
            error: false,
            message: 'Successfully logged in!',
        };
    }
}
