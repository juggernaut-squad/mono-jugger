import { Root } from './HomePageLayout.styles';

import { TodoList } from '../../organisms/TodoList/TodoList';
/* eslint-disable-next-line */
export interface HomeLayoutProps {}

export function HomePageLayout(props: HomeLayoutProps) {
	return (
		<Root>
			<TodoList />
		</Root>
	);
}

export default HomePageLayout;
