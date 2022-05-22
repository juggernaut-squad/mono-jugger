import {
	Body,
	Controller,
	Delete,
	Get,
	NotFoundException,
	Param,
	Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { IdValidationPipe } from '../pipes/id-validation/id-validation.pipe';
import { USER_NOT_FOUND_ERROR } from './user.constants';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post('create')
	async create(@Body() dto) {
		return this.userService.create(dto);
	}

	@Get()
	async getAll() {
		return await this.userService.findAll();
	}

	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string) {
		const user = await this.userService.findById(id);

		if (!user) {
			throw new NotFoundException(USER_NOT_FOUND_ERROR);
		}

		return user;
	}

	@Delete(':id')
	async delete(@Param('id', IdValidationPipe) id: string) {
		const deletedProduct = await this.userService.deleteById(id);

		if (!deletedProduct) {
			throw new NotFoundException(USER_NOT_FOUND_ERROR);
		}
	}
}
