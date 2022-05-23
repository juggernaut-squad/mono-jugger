import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthSchema } from './auth.model';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: 'Auth',
				schema: AuthSchema,
				collection: 'Auth',
			},
		]),
		ConfigModule,
	],
	controllers: [AuthController],
	providers: [AuthService],
})
export class AuthModule {}
