import { Controller, Get, Post, HttpStatus, Res, Body } from '@nestjs/common';
import { creteUsersDTO } from './dto/users.dto';

import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}

    @Post('/create')
    async createUsers(@Res() res, @Body() createUserDTO: creteUsersDTO){
        const user =  await this.userService.createUser(createUserDTO);
        return res.status(HttpStatus.OK).json({
            msj: 'Usuario creado correctamente',
            user
        });
    }

    @Get()
    async getUsers(@Res() res){
        const users = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json(users);
    }
}
