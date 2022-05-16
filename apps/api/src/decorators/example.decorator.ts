import { SetMetadata } from '@nestjs/common';

export const Example = (...args: string[]) => SetMetadata('example', args);
