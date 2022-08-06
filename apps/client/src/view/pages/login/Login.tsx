/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { HomePageLayout } from '@jugger/ui';
import LoginForm from '@client/organisms/LoginForm/LoginForm';

const LoginPage = () => {
	return (
		<HomePageLayout>
			<LoginForm />
		</HomePageLayout>
	);
};

export default LoginPage;
