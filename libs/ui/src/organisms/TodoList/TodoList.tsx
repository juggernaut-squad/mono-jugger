import { Button, TextField } from '@mui/material';

import { useTodos } from '@jugger/businessLogic';

import { Root, Controls, List, Item } from './TodoList.styles';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface TodoListProps {}

export function TodoList(props: TodoListProps) {
	const { items, create } = useTodos();
	const [title, setTitle] = useState('');

	return (
		<Root>
			<Controls>
				<span>Add todo</span>
				<TextField
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
					size="small"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<Button
					variant="contained"
					onClick={() =>
						create({
							id: Date.now().toString(),
							title: title,
							description: 'desc',
							done: false,
						})
					}
				>
					add
				</Button>
			</Controls>
			<List>
				{items.map((item) => (
					<Item>
						<span>{item.title}</span>
						<Button variant="contained">x</Button>
					</Item>
				))}
			</List>
		</Root>
	);
}

export default TodoList;
