import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthModule } from '../auth/auth.module';

describe('AuthController', () => {
	let authController: AuthController;
	let authService: AuthService;

	beforeEach(async () => {
		const moduleRef: TestingModule = await Test.createTestingModule({
			imports: [AuthModule],
		})
			.overrideProvider(getModelToken('Auth'))
			.useValue(null)
			.compile();

		authService = moduleRef.get<AuthService>(AuthService);
		authController = moduleRef.get<AuthController>(AuthController);
	});

	it('should be defined', () => {
		expect(authController).toBeDefined();
	});

	it('should login', async () => {
		const result = 'test';

		jest.spyOn(authService, 'login').mockImplementation(() => result);

		expect(
			await authController.login({ email: result, password: result })
		).toBe(result);
	});
});
