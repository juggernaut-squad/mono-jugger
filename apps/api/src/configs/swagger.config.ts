import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

export const initSwagger = (app: NestExpressApplication, port: string) => {
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('swagger', app, document);
	Logger.log(`🚀 Swagger is running on: http://localhost:${port}/swagger`);
};

const config = new DocumentBuilder()
	.setTitle('Juggernaut')
	.setDescription("Here is all API description of Juggernaut's project")
	.setVersion('1.0')
	.build();
