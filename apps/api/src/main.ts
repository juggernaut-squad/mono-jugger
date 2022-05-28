import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app/app.module';
import { initSwagger } from './configs/swagger.config';

async function bootstrap() {
	const globalPrefix = 'api';
	const port = process.env.PORT;

	const app: NestExpressApplication = await NestFactory.create(AppModule);
	app.setGlobalPrefix(globalPrefix);

	initSwagger(app, port);

	await app.listen(port);

	Logger.log(
		`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
	);
}

bootstrap();
