import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  @Get('/username/:username')
  async getUserByUsername(@Param('username') username: string) {
    const user = await this.userService.findUserByUsername(username);

    if (user) return new SerializedUser(user);
    else throw new UserNotFoundException();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  @Get('/id/:id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.findUserById(id);

    if (user) return new SerializedUser(user);
    else throw new UserNotFoundException();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
