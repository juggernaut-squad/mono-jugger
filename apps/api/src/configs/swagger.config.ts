import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const initSwagger = (app) => {
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('swagger', app, document);
};

const config = new DocumentBuilder()
	.setTitle('Juggernaut')
	.setDescription("Here is all API description of Juggernaut's project")
	.setVersion('1.0')
	.build();
