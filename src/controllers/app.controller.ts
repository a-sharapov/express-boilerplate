import {
  JsonController,
  Get,
  Param,
  UseBefore,
  UseAfter,
  UseInterceptor,
  Action,
  Post,
  OnUndefined,
  Body
} from 'routing-controllers';
import 'reflect-metadata';
import { hookBefore, hookAfter } from 'src/middlewares';
import { AppValidator } from 'src/validators';
import { logger } from 'src/utils';

@JsonController()
@UseBefore(hookBefore)
@UseInterceptor((action: Action, content: any) => {
  logger.warn(`Trigger of the hook interceptor: ${action.request.method} ${action.request.url}`);
  return content;
})
@UseAfter(hookAfter)
export class AppController {
  @Get('/')
  getAll() {
    return {
      message: 'Works!'
    };
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return {
      message: `This action returns #${id}`
    };
  }

  @Post('/')
  @OnUndefined(204)
  postOne(@Body() app: AppValidator) {
    return JSON.stringify(app);
  }
}
