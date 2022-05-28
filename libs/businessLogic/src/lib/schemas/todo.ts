export const todoSchema = {
	title: 'todo schema',
	version: 0,
	primaryKey: 'id',
	type: 'object',
	properties: {
		id: {
			type: 'string',
			maxLength: 100,
		},
		title: {
			type: 'string',
		},
		description: {
			type: 'string',
		},
		done: {
			type: 'boolean',
		},
	},
	required: ['id', 'title', 'description', 'done'],
};
