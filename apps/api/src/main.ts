import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { initSwagger } from './configs/swagger.config';

async function bootstrap() {
	const globalPrefix = 'api';
	const port = process.env.PORT;

	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix(globalPrefix);

	initSwagger(app);

	await app.listen(port);

	Logger.log(`🚀 Swagger is running on: http://localhost:${port}/swagger`);
	Logger.log(
		`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
	);
}

bootstrap();
