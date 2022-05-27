import { EntityDescriptor } from '../businessLogic';
import { todoSchema } from '../schemas/todo';

export const todoEntity: EntityDescriptor = {
	todo: {
		schema: todoSchema,
	},
};
