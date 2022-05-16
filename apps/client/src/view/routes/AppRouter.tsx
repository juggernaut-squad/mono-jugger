import React, { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Main from '../mainLayout/main/Main';
import LazyRoute from './LazyRoute';

const HomeScreen = lazy(
	() => import(/*webpackChunkName: "Home"*/ '../pages/home/Home')
);

const AppRoutes: React.FunctionComponent = () => (
	<React.Suspense fallback={null}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />}>
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
