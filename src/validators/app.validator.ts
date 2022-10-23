import { IsDefined } from 'class-validator';

export default class AppValidator {
  @IsDefined()
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}
