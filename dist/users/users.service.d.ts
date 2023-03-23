import { Model } from 'mongoose';
import { Users } from './interfaces/user.interface';
import { creteUsersDTO } from './dto/users.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<Users>);
    getUsers(): Promise<Users[]>;
    createUser(createUserDTO: creteUsersDTO): Promise<Users>;
}
