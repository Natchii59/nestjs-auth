import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor(message?: string, statusCode?: HttpStatus) {
    super(message || 'User Not Found', statusCode || HttpStatus.BAD_REQUEST);
  }
}
