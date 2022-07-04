import React from 'react';

import { HomePageLayout } from '@jugger/ui';
import TodoList from '@client/organisms/TodoList/TodoList';

const HomePage = () => {
	return (
		<HomePageLayout>
			<TodoList />
		</HomePageLayout>
	);
};

export default HomePage;
