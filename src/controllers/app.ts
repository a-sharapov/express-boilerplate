import { JsonController, Get, Param, UseBefore, UseAfter, UseInterceptor, Action, Post, OnUndefined, Body } from 'routing-controllers';
import 'reflect-metadata';
import { hookBefore, hookAfter } from '../middlewares';
import { AppModel } from '../models';

@JsonController()
@UseBefore(hookBefore)
@UseInterceptor((action: Action, content: any) => {
  console.log('change response...');
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
  postOne (@Body() app: AppModel) {
    console.log(JSON.stringify(app));
  }
}