import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthModel } from './auth.model';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel('Auth')
        private readonly userModel: Model<AuthModel>,
    ) {}

    login(email: string, password: string) {
        return {
            error: false,
            message: 'Successfully logged in!',
        };
    }
}
