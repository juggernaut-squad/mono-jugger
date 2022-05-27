import { BusinessLayerContext } from '../businessLogic';
import { useCallback, useContext, useEffect, useState } from 'react';
import { MangoQuery, RxDocument } from 'rxdb';
import { addTodo } from '../actions/todoActions';
import { Subscription } from 'rxjs';

interface ToDo {
	id: string;
	title: string;
	description: string;
	done: boolean;
}

export const useTodos = (query?: MangoQuery) => {
	const businessLayer = useContext(BusinessLayerContext);

	const [todos, setTodos] = useState<ToDo[]>([]);

	useEffect(() => {
		let subscription: Subscription;
		if (businessLayer?.db) {
			const liveQuery = businessLayer.db['todo'].find(query).$;

			subscription = liveQuery.subscribe((resultSet: RxDocument[]) => {
				setTodos(resultSet.map((r) => r.toJSON() as ToDo));
			});
		}

		return () => {
			subscription?.unsubscribe();
		};
	}, [query, businessLayer?.db]);

	const create = useCallback(
		(item: ToDo) => {
			if (businessLayer?.dispatch) {
				businessLayer.dispatch(addTodo(item));
			}
		},
		[businessLayer?.dispatch]
	);

	return {
		items: todos,
		update: (item: ToDo) => {
			//dispatch(updateTodo(item))
		},
		create: create,
		delete: (itemToDelete: ToDo) => {
			//dispatch(deleteTodo(itemToDelete))
		},
	};
};
