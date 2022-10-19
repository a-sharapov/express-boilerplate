import { Controller, Get, Param, UseBefore, UseAfter, UseInterceptor, Action } from 'routing-controllers';
import 'reflect-metadata';
import { hookBefore, hookAfter } from '../middlewares';

@Controller()
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
}