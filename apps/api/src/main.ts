/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:3000',
];

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const globalPrefix = 'api';

    app.enableCors({
        origin: (origin, callback) => {
            if (allowedOrigins.includes(origin) || !origin) {
                callback(null, true);
            } else {
                callback(new Error('Origin not allowed by CORS'));
            }
        },
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true,
        allowedHeaders: '*',
    });

    app.setGlobalPrefix(globalPrefix);

    const port = process.env.PORT || 3100;

    await app.listen(port);

    Logger.log(
        `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
    );
}

bootstrap();
