import { IsDefined } from 'class-validator';

export default class AppValidator {
  @IsDefined()
  id: string;
}
