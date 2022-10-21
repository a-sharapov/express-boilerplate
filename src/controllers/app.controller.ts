import { JsonController, Get, Param, UseBefore, UseAfter, UseInterceptor, Action, Post, OnUndefined, Body } from 'routing-controllers';
import 'reflect-metadata';
import { hookBefore, hookAfter } from '../middlewares';
import { AppValidator } from '../validators';
import { logger } from '../';

@JsonController()
@UseBefore(hookBefore)
@UseInterceptor((action: Action, content: any) => {
  logger.warn(`Trigger of the hook interceptor: ${action.request.method} ${action.request.url}`);
  return content;
})
@UseAfter(hookAfter)
export class AppController {
  @Get('/')
  getAll () {
    return 'Works!';
  }

  @Get('/:id')
  getOne (@Param('id') id: number) {
    return 'This action returns #' + id;
  }

  @Post('/')
  @OnUndefined(204)
  postOne (@Body() app: AppValidator) {
    console.log(JSON.stringify(app));
  }
}