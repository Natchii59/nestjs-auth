import { Exclude } from 'class-transformer';

export class SerializedUser {
  id: number;
  username: string;
  email: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedUser>) {
    return Object.assign(this, partial);
  }
}
