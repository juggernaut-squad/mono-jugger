/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React, { lazy } from 'react';
import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
	Outlet,
} from 'react-router-dom';

import { MainLayout } from '@jugger/ui';

import AppHeader from '@client/organisms/AppHeader/AppHeader';
import BottomNavigation from '@client/organisms/BottomNavigation/BottomNavigation';
import LazyRoute from '@client/routes/LazyRoute';

const HomeScreen = lazy(
	() => import(/*webpackChunkName: "Home"*/ '@client/pages/home/Home')
);
const LoginScreen = lazy(
	() => import(/*webpackChunkName: "Login"*/ '@client/pages/login/Login')
);

const AppRoutes: React.FunctionComponent = () => (
	<React.Suspense fallback={null}>
		<BrowserRouter>
			<Routes>
				<Route path="auth">
					<Route
						path="login"
						element={
							<LazyRoute>
								<LoginScreen />
							</LazyRoute>
						}
					/>
				</Route>
				<Route
					path="/"
					element={
						<MainLayout
							header={<AppHeader />}
							footer={<BottomNavigation />}
							content={<Outlet />}
						/>
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

				<Route index element={<Navigate to="/auth/login" />} />
			</Routes>
		</BrowserRouter>
	</React.Suspense>
);

export default AppRoutes;
