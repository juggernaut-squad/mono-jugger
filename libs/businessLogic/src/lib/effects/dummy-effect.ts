import { Effect } from '../businessLogic';
import {
	AddTodoAction,
	addTodoResult,
	AddTodoResultAction,
	TodoActionTypes,
} from '../actions/todoActions';
import { ofType } from '../operators/ofType';
import { concatMap, catchError } from 'rxjs/operators';
import { defer, of } from 'rxjs';

export const addTodoEffect: Effect<AddTodoAction, AddTodoResultAction> = (
	actions$,
	dependencies
) =>
	actions$.pipe(
		ofType(TodoActionTypes.AddTodo),
		concatMap((action: AddTodoAction) =>
			defer(async () => {
				await dependencies.db.todo.upsert(action.payload);
				return addTodoResult('1');
			}).pipe(
				catchError((error) => {
					// handle error
					return of(addTodoResult(undefined, error));
				})
			)
		)
	);
