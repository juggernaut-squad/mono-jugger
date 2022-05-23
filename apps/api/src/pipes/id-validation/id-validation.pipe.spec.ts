import { ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ID_VALIDATION_ERROR } from './id-validation.constants';
import { IdValidationPipe } from './id-validation.pipe';

describe('IdValidationPipe', () => {
	let target: IdValidationPipe;

	beforeEach(() => {
		target = new IdValidationPipe();
	});

	it('should be defined', () => {
		expect(target).toBeDefined();
	});

	it('should pass correct Id value', () => {
		const testId = '507f1f77bcf86cd799439011';
		expect(target.transform(testId, {} as ArgumentMetadata)).toBe(testId);
	});
});
