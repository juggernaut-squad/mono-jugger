import { ArgumentMetadata } from '@nestjs/common';
import { IdValidationPipe } from './id-validation.pipe';

describe('IdValidationPipe', () => {
	let pipe: IdValidationPipe;

	beforeEach(() => {
		pipe = new IdValidationPipe();
	});

	it('should be defined', () => {
		expect(pipe).toBeDefined();
	});

	it('should pass correct Id value', () => {
		const testId = '507f1f77bcf86cd799439011';
		expect(pipe.transform(testId, {} as ArgumentMetadata)).toBe(testId);
	});
});
