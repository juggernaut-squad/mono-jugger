import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { IdValidationPipe } from '../pipes/id-validation/id-validation.pipe';
import { UserByIdPipe } from '../pipes/user-by-id/user-by-id.pipe';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post('create')
	async create(@Body() userDto: UserModel) {
		return this.userService.create(userDto);
	}

	@Get()
	async getAll() {
		return await this.userService.findAll();
	}

	@Get(':id')
	async get(@Param('id', IdValidationPipe, UserByIdPipe) user: UserModel) {
		return user;
	}

	@Delete(':id')
	async delete(@Param('id', IdValidationPipe) user: UserModel) {
		await this.userService.deleteById(user._id.toString());
	}
}
