import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
	constructor(
		@InjectModel('User')
		private readonly userModel: Model<UserModel>
	) {}

	async create(dto) {
		return this.userModel.create(dto);
	}

	async findAll() {
		return this.userModel.find().exec();
	}

	async findById(id: string) {
		return this.userModel.findById(id).exec();
	}

	async deleteById(id: string) {
		return this.userModel.findByIdAndDelete(id).exec();
	}
}
