import { IsDefined } from "class-validator";

export default class AppModel {
  @IsDefined()
  id: string;
}