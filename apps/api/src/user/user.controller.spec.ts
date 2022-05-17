import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserModule } from '../user/user.module';

describe('UserController', () => {
	let userController: UserController;
	let userService: UserService;

	beforeEach(async () => {
		const moduleRef: TestingModule = await Test.createTestingModule({
			imports: [UserModule],
		})
			.overrideProvider(getModelToken('User'))
			.useValue(null)
			.compile();

		userService = moduleRef.get<UserService>(UserService);
		userController = moduleRef.get<UserController>(UserController);
	});

	it('should be defined', () => {
		expect(userController).toBeDefined();
	});
});
