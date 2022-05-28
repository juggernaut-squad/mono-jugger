export interface TodoAction {
	type: TodoActionTypes;
}

export enum TodoActionTypes {
	AddTodo = '[Todo] Add Todo',
	AddTodoResult = '[Todo] Add Todo Result',
}

export interface AddTodoAction extends TodoAction {
	type: TodoActionTypes.AddTodo;
	payload: { title: string };
}
export const addTodo = (item: { title: string }): AddTodoAction => ({
	type: TodoActionTypes.AddTodo,
	payload: item,
});

export interface AddTodoResultAction extends TodoAction {
	type: TodoActionTypes.AddTodoResult;
	error?: Error;
	payload: {
		id?: string;
	};
}
export const addTodoResult = (
	id?: string,
	error?: Error
): AddTodoResultAction => ({
	type: TodoActionTypes.AddTodoResult,
	error,
	payload: {
		id: id,
	},
});
