import {
	ArgumentMetadata,
	Injectable,
	PipeTransform,
	NotFoundException,
} from '@nestjs/common';

import { UserService } from '../../user/user.service';
import { USER_NOT_FOUND } from './user-by-id.constants';

@Injectable()
export class UserByIdPipe implements PipeTransform {
	constructor(private readonly userService: UserService) {}

	transform(id: string, metadata: ArgumentMetadata) {
		const user = this.userService.findById(id);

		if (!user) {
			throw new NotFoundException(USER_NOT_FOUND);
		}

		return user;
	}
}
