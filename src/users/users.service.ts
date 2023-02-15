import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Users } from './interfaces/user.interface';
import { creteUsersDTO } from './dto/users.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel:Model<Users>){ }
    
    async getUsers(): Promise<Users[]>{
        const users = await this.userModel.find().exec();
        return users;
    }

    async createUser(createUserDTO: creteUsersDTO): Promise<Users>{
        const user = new this.userModel(createUserDTO);
        await user.save();
        return user;
    }

}
