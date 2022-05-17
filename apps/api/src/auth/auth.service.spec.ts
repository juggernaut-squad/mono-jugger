import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { AuthService } from './auth.service';
import { AuthModule } from '../auth/auth.module';

describe('AuthService', () => {
	let service: AuthService;

	beforeEach(async () => {
		const moduleRef: TestingModule = await Test.createTestingModule({
			imports: [AuthModule],
		})
			.overrideProvider(getModelToken('Auth'))
			.useValue(null)
			.compile();

		service = moduleRef.get<AuthService>(AuthService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('should login', () => {
		const loginSpy = jest.spyOn(service, 'login');
		service.login('testEmail', 'testPassword');

		expect(loginSpy).toBeCalledTimes(1);
	});
});
