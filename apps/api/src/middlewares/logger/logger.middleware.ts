import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	private logger = new Logger('HTTP');

	use(req: Request, res: Response, next: NextFunction): void {
		const { method, originalUrl } = req;
		const start: number = Date.now();

		res.on('finish', () => {
			const { statusCode } = res;
			const finish: number = Date.now();

			this.logger.log(
				`${method}: ${statusCode} - ${originalUrl} - ${finish - start} ms`
			);
		});

		next();
	}
}
