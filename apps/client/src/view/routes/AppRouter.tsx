import React, { lazy } from 'react';
import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
	Outlet,
} from 'react-router-dom';

import { MainLayout } from '@jugger/ui';

import LazyRoute from '@client/routes/LazyRoute';

const HomeScreen = lazy(
	() => import(/*webpackChunkName: "Home"*/ '@client/pages/home/Home')
);

const AppRoutes: React.FunctionComponent = () => (
	<React.Suspense fallback={null}>
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<MainLayout>
							<Outlet />
						</MainLayout>
					}
				>
					<Route
						path="home"
						element={
							<LazyRoute>
								<HomeScreen />
							</LazyRoute>
						}
					/>
					<Route path="*" element={<Navigate to="/home" />} />
				</Route>

				<Route index element={<Navigate to="/home" />} />
			</Routes>
		</BrowserRouter>
	</React.Suspense>
);

export default AppRoutes;
