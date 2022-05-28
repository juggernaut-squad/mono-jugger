import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { UserByIdPipe } from './user-by-id.pipe';
import { UserService } from '../../user/user.service';
import { UserModule } from '../../user/user.module';

describe('UserByIdPipe', () => {
	let pipe: UserByIdPipe;
	let userService: UserService;

	beforeEach(async () => {
		const moduleRef: TestingModule = await Test.createTestingModule({
			imports: [UserModule],
		})
			.overrideProvider(getModelToken('User'))
			.useValue(null)
			.compile();

		userService = moduleRef.get<UserService>(UserService);
		pipe = new UserByIdPipe(userService);
	});

	it('should be defined', () => {
		expect(pipe).toBeDefined();
	});
});
