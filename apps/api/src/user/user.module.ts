import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './user.model';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: 'User',
				schema: UserSchema,
				collection: 'User',
			},
		]),
		ConfigModule,
	],
	controllers: [UserController],
	providers: [UserService],
})
export class UserModule {}
